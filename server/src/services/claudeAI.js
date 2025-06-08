const Anthropic = require('@anthropic-ai/sdk');

class ClaudeAIService {
  constructor() {
    this.apiKey = process.env.CLAUDE_API_KEY;
    
    // Only initialize Anthropic if we have a real API key
    if (this.apiKey && this.apiKey !== 'your_claude_api_key_here') {
      this.anthropic = new Anthropic({
        apiKey: this.apiKey,
      });
    } else {
      console.warn('⚠️  Claude API key not set - using mock responses for development');
      this.anthropic = null;
    }
  }

  getNSWDUIExpertPrompt() {
    return `You are a highly experienced DUI defense lawyer specializing in New South Wales (NSW) law with over 20 years of practice. Your expertise includes:

- Comprehensive knowledge of NSW Road Transport Act 2013 and related regulations
- Deep understanding of drink driving penalties, license suspensions, and interlock requirements
- Extensive experience with police procedures, breathalyzer accuracy, and evidence challenges
- Proven track record in negotiating reduced charges and alternative sentencing
- Expert knowledge of NSW Local Court procedures and magistrate preferences

You provide detailed, accurate legal analysis while being empathetic to clients facing serious consequences. Always consider both the legal technicalities and practical implications for the client's life, employment, and family.

Respond with structured JSON containing risk assessment, likely penalties, defense opportunities, and practical next steps.`;
  }

  buildCaseAnalysisPrompt(caseData) {
    return `Please analyze this NSW DUI case and provide comprehensive legal assessment:

**Case Details:**
- BAC Level: ${caseData.bacLevel || 'Not specified'}
- Prior Offenses: ${caseData.priorOffenses || 0}
- Arrest Date: ${caseData.arrestDate || 'Not specified'}
- Location: ${caseData.location || 'NSW'}
- Test Type: ${caseData.testType || 'Not specified'}
- Reason for Stop: ${caseData.reason || 'Not specified'}
- Time of Day: ${caseData.timeOfDay || 'Not specified'}
- License Type: ${caseData.licenseType || 'Full'}
- Age: ${caseData.age || 'Not specified'}

**Additional Circumstances:**
${caseData.additionalCircumstances || 'None provided'}

**Medical Conditions:**
${caseData.medicalConditions || 'None reported'}

**Medications:**
${caseData.medications || 'None reported'}

Please provide analysis in this JSON format:
{
  "riskAssessment": {
    "level": "Low/Medium/High",
    "factors": ["factor1", "factor2"],
    "score": 1-100
  },
  "likelyPenalties": {
    "fine": {"min": 0, "max": 0},
    "licenseSuspension": {"min": 0, "max": 0},
    "interlock": {"required": true/false, "duration": "months"},
    "imprisonment": {"possible": true/false, "duration": "description"},
    "communityService": {"hours": {"min": 0, "max": 0}}
  },
  "defenseOpportunities": ["opportunity1", "opportunity2"],
  "recommendedNextSteps": ["step1", "step2"],
  "mitigationStrategies": ["strategy1", "strategy2"],
  "courtPreparation": {
    "timeline": "description",
    "requiredDocuments": ["doc1", "doc2"],
    "expectations": "description"
  }
}`;
  }

  async analyzeDUICase(caseData) {
    try {
      // If no real API key, return mock response
      if (!this.anthropic) {
        return this.generateMockResponse(caseData);
      }

      const prompt = this.buildCaseAnalysisPrompt(caseData);
      
      const message = await this.anthropic.messages.create({
        model: "claude-3-sonnet-20240229",
        max_tokens: 4000,
        temperature: 0.3,
        system: this.getNSWDUIExpertPrompt(),
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      });

      const responseContent = message.content[0].text;
      
      // Try to parse as JSON first
      try {
        return JSON.parse(responseContent);
      } catch (parseError) {
        // If not JSON, try to extract structured information
        return this.parseUnstructuredResponse(responseContent);
      }
    } catch (error) {
      console.error('Claude AI analysis error:', error);
      
      // Return mock response as fallback
      return this.generateMockResponse(caseData);
    }
  }

  generateMockResponse(caseData) {
    const bacLevel = parseFloat(caseData.bacLevel) || 0.08;
    const priorOffenses = parseInt(caseData.priorOffenses) || 0;
    const isFirstOffense = priorOffenses === 0;

    // Calculate mock penalties based on NSW DUI laws
    let fine = { min: 563, max: 2252 };
    let suspension = { min: 3, max: 6 };
    let riskLevel = 'Medium';

    if (bacLevel >= 0.15) {
      fine = { min: 1127, max: 5648 };
      suspension = { min: 6, max: 12 };
      riskLevel = 'High';
    } else if (bacLevel >= 0.08) {
      fine = { min: 563, max: 2252 };
      suspension = { min: 3, max: 6 };
      riskLevel = 'Medium';
    } else {
      fine = { min: 200, max: 1127 };
      suspension = { min: 1, max: 3 };
      riskLevel = 'Low';
    }

    if (!isFirstOffense) {
      fine.min = Math.round(fine.min * 1.5);
      fine.max = Math.round(fine.max * 2);
      suspension.min = Math.round(suspension.min * 1.5);
      suspension.max = Math.round(suspension.max * 2);
      riskLevel = 'High';
    }

    return {
      riskAssessment: {
        level: riskLevel,
        factors: [
          `BAC level of ${bacLevel}% ${bacLevel >= 0.08 ? 'exceeds' : 'is below'} legal limit`,
          `${isFirstOffense ? 'First' : 'Repeat'} offense`,
          `Arrested via ${caseData.reason || 'traffic stop'}`
        ],
        score: Math.min(100, Math.max(10, Math.round((bacLevel * 100) + (priorOffenses * 20))))
      },
      likelyPenalties: {
        fine: fine,
        licenseSuspension: suspension,
        interlock: bacLevel >= 0.08 ? { required: true, duration: '12 months' } : { required: false },
        imprisonment: bacLevel >= 0.15 || priorOffenses > 0 ? { possible: true, duration: 'Up to 18 months' } : { possible: false },
        communityService: { hours: { min: 0, max: 200 } }
      },
      defenseOpportunities: [
        'Challenge BAC test accuracy and calibration',
        'Review arrest procedures for compliance',
        'Examine evidence chain of custody',
        isFirstOffense ? 'Seek first offender considerations' : 'Argue for rehabilitation over punishment',
        'Present character references and mitigation evidence'
      ],
      recommendedNextSteps: [
        'Engage an experienced DUI lawyer immediately',
        'Gather all relevant documentation',
        'Request police facts and evidence',
        'Consider early plea negotiations',
        'Explore alternative sentencing options'
      ],
      mitigationStrategies: [
        'Demonstrate remorse and responsibility',
        'Complete voluntary alcohol education program',
        'Provide employment and character references',
        'Show financial impact of penalties',
        'Present any medical or personal circumstances'
      ],
      courtPreparation: {
        timeline: '2-6 months from charge date',
        requiredDocuments: [
          'Notice of court attendance',
          'Police facts sheet',
          'Driving record abstract',
          'Character references',
          'Financial statements'
        ],
        expectations: 'Court will consider BAC level, prior history, and mitigation evidence when determining penalty'
      },
      disclaimer: 'This is a development assessment. For actual legal advice, consult a qualified NSW DUI lawyer.'
    };
  }

  async generateDefenseStrategies(caseData) {
    if (!this.anthropic) {
      return this.generateMockDefenseStrategies(caseData);
    }

    try {
      const prompt = `Based on this NSW DUI case, provide specific defense strategies:
      
      BAC: ${caseData.bacLevel}
      Test Type: ${caseData.testType}
      Arrest Circumstances: ${caseData.reason}
      Prior Offenses: ${caseData.priorOffenses}
      
      Focus on technical defenses, procedural challenges, and mitigation arguments.`;

      const message = await this.anthropic.messages.create({
        model: "claude-3-sonnet-20240229",
        max_tokens: 2000,
        temperature: 0.3,
        system: this.getNSWDUIExpertPrompt(),
        messages: [{ role: "user", content: prompt }]
      });

      return { strategies: message.content[0].text };
    } catch (error) {
      console.error('Defense strategies error:', error);
      return this.generateMockDefenseStrategies(caseData);
    }
  }

  generateMockDefenseStrategies(caseData) {
    const strategies = [
      'Challenge breathalyzer calibration and maintenance records',
      'Review police training and certification for testing procedures',
      'Examine 20-minute observation period compliance',
      'Investigate potential medical conditions affecting BAC readings',
      'Challenge the legality of the initial traffic stop',
      'Review evidence handling and chain of custody procedures'
    ];

    if (caseData.medicalConditions) {
      strategies.push('Present medical evidence that may affect BAC accuracy');
    }

    if (caseData.medications) {
      strategies.push('Examine medication interactions with alcohol testing');
    }

    return {
      strategies: strategies.join('\n• '),
      technicalDefenses: [
        'Breathalyzer accuracy challenges',
        'Procedural compliance review',
        'Evidence admissibility issues'
      ],
      mitigationArguments: [
        'First offense considerations',
        'Employment impact statements',
        'Character reference letters',
        'Voluntary rehabilitation programs'
      ]
    };
  }

  async chatWithAI(message, context = {}) {
    if (!this.anthropic) {
      return this.generateMockChatResponse(message, context);
    }

    try {
      const systemPrompt = `${this.getNSWDUIExpertPrompt()}
      
      You are having a conversation with someone who may be facing DUI charges in NSW. 
      Provide helpful, accurate legal information while being empathetic and supportive.
      Always remind them to consult with a qualified lawyer for specific legal advice.`;

      const response = await this.anthropic.messages.create({
        model: "claude-3-sonnet-20240229",
        max_tokens: 1500,
        temperature: 0.4,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: `Context: ${JSON.stringify(context)}\n\nQuestion: ${message}`
          }
        ]
      });

      return {
        response: response.content[0].text,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Chat error:', error);
      return this.generateMockChatResponse(message, context);
    }
  }

  generateMockChatResponse(message, context) {
    const responses = [
      "I understand you're concerned about your DUI case. Based on NSW law, the penalties can vary significantly depending on your BAC level and prior history. It's important to engage a qualified lawyer as soon as possible.",
      "DUI cases in NSW are taken seriously, but there are often defense opportunities available. The key is to act quickly and gather all relevant evidence. Have you considered challenging the testing procedures?",
      "The court process typically takes 2-6 months from the initial charge. During this time, it's crucial to prepare your defense and consider all mitigation strategies. A good lawyer can help navigate this process.",
      "License suspension is common in DUI cases, but there may be options for work licenses or early reinstatement depending on your circumstances. This is definitely something to discuss with your legal representative."
    ];

    return {
      response: responses[Math.floor(Math.random() * responses.length)],
      timestamp: new Date().toISOString(),
      note: "This is a development response. Please consult a qualified NSW DUI lawyer for actual legal advice."
    };
  }

  parseUnstructuredResponse(text) {
    // Fallback parser for non-JSON responses
    return {
      riskAssessment: {
        level: "Medium",
        factors: ["Analysis based on provided information"],
        score: 50
      },
      likelyPenalties: {
        fine: { min: 500, max: 2000 },
        licenseSuspension: { min: 3, max: 6 },
        interlock: { required: true, duration: "12 months" },
        imprisonment: { possible: false },
        communityService: { hours: { min: 0, max: 100 } }
      },
      defenseOpportunities: ["Consult with qualified legal counsel"],
      recommendedNextSteps: ["Engage experienced DUI lawyer"],
      mitigationStrategies: ["Present strong character evidence"],
      courtPreparation: {
        timeline: "2-6 months",
        requiredDocuments: ["Court attendance notice"],
        expectations: "Penalties based on circumstances"
      },
      rawResponse: text
    };
  }
}

module.exports = new ClaudeAIService(); 