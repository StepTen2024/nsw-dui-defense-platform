import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Shield, Users, CheckCircle, XCircle, Clock, MapPin, Scale, FileText, DollarSign, Calendar, Car } from 'lucide-react';
import Button from '../../components/Common/Button';

const FirstTimeDUIOffenceAustralia = () => {
  const navigate = useNavigate();

  const stateFirstOffencePenalties = [
    {
      state: "New South Wales",
      lowRange: {
        bac: "0.05-0.079",
        fine: "$561",
        suspension: "3 months",
        interlock: "No",
        prison: "No"
      },
      midRange: {
        bac: "0.08-0.149",
        fine: "$561",
        suspension: "6 months",
        interlock: "Yes",
        prison: "No"
      },
      highRange: {
        bac: "0.15+",
        fine: "$2,200",
        suspension: "12 months",
        interlock: "Yes",
        prison: "Up to 18 months"
      }
    },
    {
      state: "Victoria",
      lowRange: {
        bac: "0.05-0.069",
        fine: "$500",
        suspension: "1 month",
        interlock: "No",
        prison: "No"
      },
      midRange: {
        bac: "0.07-0.149",
        fine: "$500",
        suspension: "6 months",
        interlock: "Yes",
        prison: "No"
      },
      highRange: {
        bac: "0.15+",
        fine: "$1,800",
        suspension: "12 months",
        interlock: "Yes",
        prison: "Up to 2 years"
      }
    },
    {
      state: "Queensland",
      lowRange: {
        bac: "0.05-0.099",
        fine: "$413",
        suspension: "1-9 months",
        interlock: "No",
        prison: "No"
      },
      midRange: {
        bac: "0.10-0.149",
        fine: "$1,653",
        suspension: "3-12 months",
        interlock: "Yes",
        prison: "Up to 9 months"
      },
      highRange: {
        bac: "0.15+",
        fine: "$2,875",
        suspension: "6-12 months",
        interlock: "Yes",
        prison: "Up to 9 months"
      }
    }
  ];

  const immediateConsequences = [
    {
      title: "Licence Suspension",
      description: "Immediate roadside suspension",
      timeframe: "24 hours minimum",
      icon: <Car className="w-5 h-5" />,
      severity: "high"
    },
    {
      title: "Vehicle Impoundment",
      description: "Car may be impounded",
      timeframe: "24-48 hours",
      icon: <AlertTriangle className="w-5 h-5" />,
      severity: "medium"
    },
    {
      title: "Court Summons",
      description: "Required court appearance",
      timeframe: "4-8 weeks",
      icon: <Scale className="w-5 h-5" />,
      severity: "high"
    },
    {
      title: "Police Interview",
      description: "Formal statement required",
      timeframe: "Same day",
      icon: <FileText className="w-5 h-5" />,
      severity: "medium"
    }
  ];

  const defenceOptions = [
    {
      strategy: "Challenge BAC Reading",
      successRate: "Medium",
      description: "Question breathalyzer accuracy, calibration, or maintenance records",
      requirements: "Technical evidence, expert witnesses",
      timeframe: "Must be raised early"
    },
    {
      strategy: "Procedural Errors",
      successRate: "High",
      description: "Police failed to follow proper procedures during arrest",
      requirements: "Detailed police records, witness statements",
      timeframe: "Can be raised anytime"
    },
    {
      strategy: "Medical Condition",
      successRate: "Low",
      description: "Medical condition affected BAC reading",
      requirements: "Medical evidence, expert testimony",
      timeframe: "Must disclose early"
    },
    {
      strategy: "Necessity Defence",
      successRate: "Low",
      description: "Drove under duress or emergency circumstances",
      requirements: "Evidence of emergency, no alternatives",
      timeframe: "Must be genuine emergency"
    },
    {
      strategy: "Section 10 Dismissal",
      successRate: "Medium",
      description: "Good character, exceptional circumstances",
      requirements: "Character references, clean record",
      timeframe: "NSW only"
    }
  ];

  const preparationSteps = [
    {
      step: 1,
      title: "Gather Documentation",
      description: "Collect all relevant documents and evidence",
      tasks: [
        "Police charge sheet and court documents",
        "Breathalyzer maintenance records",
        "Medical records if relevant",
        "Character references",
        "Employment records"
      ],
      timeframe: "Within 1 week"
    },
    {
      step: 2,
      title: "Legal Consultation",
      description: "Seek professional legal advice",
      tasks: [
        "Find experienced DUI lawyer",
        "Discuss defence options",
        "Understand potential outcomes",
        "Get cost estimate"
      ],
      timeframe: "Within 2 weeks"
    },
    {
      step: 3,
      title: "Court Preparation",
      description: "Prepare for court appearance",
      tasks: [
        "Understand court procedures",
        "Prepare character references",
        "Consider plea options",
        "Arrange work leave if needed"
      ],
      timeframe: "2 weeks before court"
    }
  ];

  const costBreakdown = [
    {
      category: "Legal Fees",
      range: "$2,000 - $10,000",
      description: "Lawyer representation and advice",
      factors: "Complexity, experience, location"
    },
    {
      category: "Court Fines",
      range: "$500 - $3,000",
      description: "Statutory penalties imposed by court",
      factors: "BAC level, state, circumstances"
    },
    {
      category: "Licence Costs",
      range: "$200 - $500",
      description: "Reinstatement and administrative fees",
      factors: "State requirements, duration"
    },
    {
      category: "Interlock Device",
      range: "$2,000 - $4,000",
      description: "Installation and monthly fees",
      factors: "Duration required, provider"
    },
    {
      category: "Insurance Impact",
      range: "$1,000 - $5,000",
      description: "Increased premiums over 3-5 years",
      factors: "Provider, driving history"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50">
      {/* Breadcrumbs */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <nav className="flex items-center space-x-2 text-sm text-secondary-600">
            <button
              onClick={() => navigate('/')}
              className="hover:text-primary-600 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => navigate('/blog')}
              className="hover:text-primary-600 transition-colors"
            >
              Blog
            </button>
            <span>/</span>
            <span className="font-medium text-secondary-900">First Time DUI Offence</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              First Time DUI Offence in Australia
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Complete guide to penalties, defence options, and what to expect for first-time DUI offenders
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-medium">Serious</span> - Even first offences
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-medium">Defence Options</span> - Available
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-medium">Act Fast</span> - Time sensitive
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-warning-50 to-error-50 rounded-lg p-8 border border-warning-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warning-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-warning-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-4">
                    Don't Underestimate a First DUI Offence
                  </h2>
                  <p className="text-lg text-secondary-700 mb-4">
                    Even first-time DUI offences carry serious penalties in Australia, including licence suspension, 
                    hefty fines, and potential imprisonment. The consequences can affect your employment, insurance, 
                    and future opportunities.
                  </p>
                  <p className="text-secondary-600">
                    However, there are defence options available, and early action can significantly improve your outcome. 
                    Understanding your rights and options is crucial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Consequences */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Immediate Consequences
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {immediateConsequences.map((consequence, index) => (
                <div key={index} className={`bg-white rounded-lg p-6 shadow-lg border-l-4 ${
                  consequence.severity === 'high' ? 'border-error-500' : 'border-warning-500'
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    consequence.severity === 'high' ? 'bg-error-100' : 'bg-warning-100'
                  }`}>
                    <div className={consequence.severity === 'high' ? 'text-error-600' : 'text-warning-600'}>
                      {consequence.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{consequence.title}</h3>
                  <p className="text-secondary-600 text-sm mb-3">{consequence.description}</p>
                  <div className="flex items-center space-x-2 text-xs text-secondary-500">
                    <Clock className="w-3 h-3" />
                    <span>{consequence.timeframe}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* State Penalties */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              First Offence Penalties by State
            </h2>
            
            <div className="space-y-8">
              {stateFirstOffencePenalties.map((state, index) => (
                <div key={index} className="bg-secondary-50 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-primary-700">{state.state}</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-success-200">
                      <h4 className="font-semibold text-success-700 mb-3">Low Range ({state.lowRange.bac})</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Fine:</span>
                          <span className="font-medium">{state.lowRange.fine}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Suspension:</span>
                          <span className="font-medium">{state.lowRange.suspension}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Interlock:</span>
                          <span className="font-medium">{state.lowRange.interlock}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prison:</span>
                          <span className="font-medium">{state.lowRange.prison}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-warning-200">
                      <h4 className="font-semibold text-warning-700 mb-3">Mid Range ({state.midRange.bac})</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Fine:</span>
                          <span className="font-medium">{state.midRange.fine}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Suspension:</span>
                          <span className="font-medium">{state.midRange.suspension}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Interlock:</span>
                          <span className="font-medium">{state.midRange.interlock}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prison:</span>
                          <span className="font-medium">{state.midRange.prison}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-error-200">
                      <h4 className="font-semibold text-error-700 mb-3">High Range ({state.highRange.bac})</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Fine:</span>
                          <span className="font-medium">{state.highRange.fine}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Suspension:</span>
                          <span className="font-medium">{state.highRange.suspension}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Interlock:</span>
                          <span className="font-medium">{state.highRange.interlock}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prison:</span>
                          <span className="font-medium">{state.highRange.prison}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Defence Options */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Defence Options for First Offenders
            </h2>
            
            <div className="space-y-6">
              {defenceOptions.map((defence, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      defence.successRate === 'High' ? 'bg-success-100' :
                      defence.successRate === 'Medium' ? 'bg-warning-100' : 'bg-error-100'
                    }`}>
                      <Shield className={`w-6 h-6 ${
                        defence.successRate === 'High' ? 'text-success-600' :
                        defence.successRate === 'Medium' ? 'text-warning-600' : 'text-error-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="font-semibold text-lg">{defence.strategy}</h3>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          defence.successRate === 'High' ? 'bg-success-100 text-success-700' :
                          defence.successRate === 'Medium' ? 'bg-warning-100 text-warning-700' : 'bg-error-100 text-error-700'
                        }`}>
                          {defence.successRate} Success Rate
                        </div>
                      </div>
                      <p className="text-secondary-600 mb-4">{defence.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
                          <p className="text-primary-700 text-sm">
                            <span className="font-medium">Requirements:</span> {defence.requirements}
                          </p>
                        </div>
                        <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-3">
                          <p className="text-secondary-700 text-sm">
                            <span className="font-medium">Timing:</span> {defence.timeframe}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Steps */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              How to Prepare for Your Case
            </h2>
            
            <div className="space-y-8">
              {preparationSteps.map((step, index) => (
                <div key={index} className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-6 border border-primary-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold text-lg">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-secondary-500">
                          <Calendar className="w-4 h-4" />
                          <span>{step.timeframe}</span>
                        </div>
                      </div>
                      <p className="text-secondary-600 mb-4">{step.description}</p>
                      <div className="bg-white rounded-lg p-4 border border-secondary-200">
                        <h4 className="font-medium text-sm mb-2">Tasks to Complete:</h4>
                        <ul className="space-y-1">
                          {step.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-center space-x-2 text-sm text-secondary-600">
                              <CheckCircle className="w-3 h-3 text-success-500 flex-shrink-0" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Expected Costs
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {costBreakdown.map((cost, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-lg">{cost.category}</h3>
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-2">{cost.range}</div>
                  <p className="text-secondary-600 text-sm mb-3">{cost.description}</p>
                  <div className="bg-secondary-50 rounded-lg p-3">
                    <p className="text-secondary-700 text-xs">
                      <span className="font-medium">Factors:</span> {cost.factors}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-warning-50 border border-warning-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-warning-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-warning-800 mb-2">Total Cost Range: $5,700 - $22,500</h3>
                  <p className="text-warning-700 text-sm">
                    These are estimated costs for a first-time offence. Actual costs vary significantly based on 
                    circumstances, location, and legal representation chosen. Early legal advice can help minimize costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Get Expert Help for Your First DUI Offence
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't face your first DUI charge alone. Our AI-powered platform provides instant analysis 
              and connects you with experienced lawyers at a fraction of traditional costs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Instant Assessment</h3>
                <p className="text-sm opacity-90">Get immediate analysis of your case</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Expert Lawyers</h3>
                <p className="text-sm opacity-90">Connect with DUI specialists</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">90% Less Cost</h3>
                <p className="text-sm opacity-90">Affordable legal assistance</p>
              </div>
            </div>
            
            <Button
              variant="secondary"
              size="lg"
              onClick={() => navigate('/assessment')}
              className="!bg-white !text-primary-700 hover:!bg-primary-50 hover:!text-primary-800"
            >
              Start Free Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-secondary-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Police Random Stops</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Understanding your rights during random breath testing stops.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/can-police-stop-you-randomly')}
                  className="w-full"
                >
                  Learn More
                </Button>
              </div>
              
              <div className="bg-secondary-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">DUI Charges Australia</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Complete guide to DUI charges, penalties, and defence options.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/dui-charges-australia')}
                  className="w-full"
                >
                  Read Guide
                </Button>
              </div>
              
              <div className="bg-secondary-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">DUI Charges NSW</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Specific information about DUI charges and penalties in NSW.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/dui-charges-nsw')}
                  className="w-full"
                >
                  NSW Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstTimeDUIOffenceAustralia; 