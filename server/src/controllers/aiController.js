const claudeAI = require('../services/claudeAI');

class AIController {
  // Analyze DUI case
  async analyzeCase(req, res) {
    try {
      const caseData = req.body;
      
      // Validate required fields
      if (!caseData.bacLevel) {
        return res.status(400).json({
          success: false,
          error: 'BAC level is required for case analysis'
        });
      }

      console.log('🔍 Analyzing DUI case:', {
        bacLevel: caseData.bacLevel,
        priorOffenses: caseData.priorOffenses || 0,
        location: caseData.location || 'NSW'
      });

      const analysis = await claudeAI.analyzeDUICase(caseData);
      
      res.json({
        success: true,
        data: {
          analysis,
          timestamp: new Date().toISOString(),
          caseId: `case_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        }
      });
    } catch (error) {
      console.error('Case analysis error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to analyze case. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Generate defense strategies
  async generateDefenseStrategies(req, res) {
    try {
      const caseData = req.body;
      
      console.log('⚖️  Generating defense strategies for case');

      const strategies = await claudeAI.generateDefenseStrategies(caseData);
      
      res.json({
        success: true,
        data: {
          strategies,
          timestamp: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Defense strategies error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to generate defense strategies. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Get personalized recommendations
  async getRecommendations(req, res) {
    try {
      const { caseData, userProfile } = req.body;
      
      console.log('💡 Generating personalized recommendations');

      // For now, use the same analysis function but focus on recommendations
      const analysis = await claudeAI.analyzeDUICase(caseData);
      
      const recommendations = {
        immediate: analysis.recommendedNextSteps || [],
        mitigation: analysis.mitigationStrategies || [],
        courtPrep: analysis.courtPreparation || {},
        timeline: this.generateTimeline(caseData)
      };
      
      res.json({
        success: true,
        data: {
          recommendations,
          timestamp: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Recommendations error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to generate recommendations. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Chat with AI
  async chat(req, res) {
    try {
      const { message, context } = req.body;
      
      if (!message || message.trim().length === 0) {
        return res.status(400).json({
          success: false,
          error: 'Message is required for chat'
        });
      }

      console.log('💬 AI Chat request:', message.substring(0, 50) + '...');

      const response = await claudeAI.chatWithAI(message, context);
      
      res.json({
        success: true,
        data: response
      });
    } catch (error) {
      console.error('Chat error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to process chat message. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Health check for AI services
  async healthCheck(req, res) {
    try {
      const status = {
        ai: {
          status: 'operational',
          provider: 'Claude AI',
          mockMode: !process.env.CLAUDE_API_KEY || process.env.CLAUDE_API_KEY === 'your_claude_api_key_here'
        },
        endpoints: {
          analyzeCase: '/api/ai/analyze-case',
          chat: '/api/ai/chat',
          defenseStrategies: '/api/ai/defense-strategies',
          recommendations: '/api/ai/recommendations'
        },
        timestamp: new Date().toISOString()
      };

      res.json({
        success: true,
        data: status
      });
    } catch (error) {
      console.error('AI health check error:', error);
      res.status(500).json({
        success: false,
        error: 'AI health check failed',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Helper method to generate timeline
  generateTimeline(caseData) {
    const arrestDate = caseData.arrestDate ? new Date(caseData.arrestDate) : new Date();
    const courtDate = caseData.courtDate ? new Date(caseData.courtDate) : null;
    
    const timeline = [
      {
        phase: 'Immediate (0-7 days)',
        tasks: [
          'Engage qualified DUI lawyer',
          'Gather all documentation',
          'Request police facts'
        ]
      },
      {
        phase: 'Preparation (1-4 weeks)',
        tasks: [
          'Review evidence with lawyer',
          'Identify defense strategies',
          'Collect character references'
        ]
      },
      {
        phase: 'Pre-Court (4-8 weeks)',
        tasks: [
          'Complete any required programs',
          'Prepare mitigation evidence',
          'Consider plea negotiations'
        ]
      }
    ];

    if (courtDate) {
      timeline.push({
        phase: 'Court Appearance',
        date: courtDate.toISOString().split('T')[0],
        tasks: [
          'Attend court with lawyer',
          'Present defense case',
          'Receive judgment'
        ]
      });
    }

    return timeline;
  }
}

module.exports = new AIController(); 