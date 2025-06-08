import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Scale, AlertTriangle, CheckCircle, ArrowRight, 
  Clock, DollarSign, Car, Phone, MapPin, Book, FileText,
  Users, Gavel, Award, Target
} from 'lucide-react';
import Button from '../components/Common/Button';

const DUIChargesQueensland = () => {
  const penaltyTiers = [
    {
      category: "Low Range (0.05-0.099 BAC)",
      firstOffence: {
        fine: "$400-$700",
        license: "1-9 months",
        prison: "No",
        interlock: "No"
      },
      secondOffence: {
        fine: "$700-$1,400",
        license: "3-18 months", 
        prison: "Up to 3 months",
        interlock: "Possible"
      }
    },
    {
      category: "Mid Range (0.10-0.149 BAC)",
      firstOffence: {
        fine: "$700-$1,400",
        license: "3-12 months",
        prison: "Up to 3 months",
        interlock: "Possible"
      },
      secondOffence: {
        fine: "$1,400-$2,800",
        license: "6-24 months",
        prison: "Up to 6 months", 
        interlock: "Mandatory"
      }
    },
    {
      category: "High Range (0.15+ BAC)",
      firstOffence: {
        fine: "$1,400-$2,800",
        license: "6-18 months",
        prison: "Up to 6 months",
        interlock: "Mandatory"
      },
      secondOffence: {
        fine: "$2,800-$5,600",
        license: "12-48 months",
        prison: "Up to 12 months",
        interlock: "Mandatory"
      }
    }
  ];

  const defenseStrategies = [
    {
      strategy: "Breathalyzer Accuracy Challenge",
      description: "Question calibration, maintenance records, and operator training",
      successRate: "Moderate",
      complexity: "Medium"
    },
    {
      strategy: "Procedural Errors",
      description: "Challenge improper police procedures during arrest and testing",
      successRate: "High",
      complexity: "Low"
    },
    {
      strategy: "Medical Conditions",
      description: "Diabetes, GERD, or other conditions affecting BAC readings",
      successRate: "Variable",
      complexity: "High"
    },
    {
      strategy: "Rising Blood Alcohol",
      description: "BAC was under limit when driving but rose by testing time",
      successRate: "Moderate",
      complexity: "High"
    }
  ];

  const courtProcess = [
    {
      stage: "Charge Notice",
      timeframe: "Immediate",
      description: "Police issue notice to appear in court",
      action: "Contact lawyer immediately"
    },
    {
      stage: "First Court Appearance",
      timeframe: "2-6 weeks",
      description: "Plea entered, adjournment for legal advice",
      action: "Engage legal representation"
    },
    {
      stage: "Case Conference",
      timeframe: "4-8 weeks",
      description: "Discuss case with prosecution",
      action: "Prepare defense strategy"
    },
    {
      stage: "Hearing/Trial",
      timeframe: "2-6 months",
      description: "Evidence presented, judgment made",
      action: "Present defense case"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm mb-6">
              <Link to="/" className="text-primary-200 hover:text-white">Home</Link>
              <span className="mx-2 text-primary-300">/</span>
              <Link to="/dui-charges-australia" className="text-primary-200 hover:text-white">DUI Charges Australia</Link>
              <span className="mx-2 text-primary-300">/</span>
              <span className="text-primary-100">Queensland</span>
            </nav>
            
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 mr-3 text-primary-200" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                DUI Charges in Queensland
              </h1>
            </div>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Complete guide to drink driving charges, penalties, and legal processes in Queensland. 
              Understand your rights and defense options under QLD traffic law.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/assessment">
                <Button variant="light" size="lg" className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Get Case Assessment
                </Button>
              </Link>
              <Button variant="outline-light" size="lg" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Legal Help
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Quick Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">0.05</h3>
              <p className="text-secondary-600">Legal BAC Limit</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">$400+</h3>
              <p className="text-secondary-600">Minimum Fine</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Car className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">48 months</h3>
              <p className="text-secondary-600">Max License Loss</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">12 months</h3>
              <p className="text-secondary-600">Max Prison Term</p>
            </div>
          </div>
        </section>

        {/* Penalty Structure */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-secondary-900 mb-8 text-center">
              Queensland DUI Penalties 2024
            </h2>
            <div className="space-y-6">
              {penaltyTiers.map((tier, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-secondary-900 text-white p-4">
                    <h3 className="font-heading font-semibold text-xl">{tier.category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold text-lg text-secondary-900 mb-3">First Offence</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-secondary-600">Fine:</span>
                            <span className="font-medium">{tier.firstOffence.fine}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary-600">License Suspension:</span>
                            <span className="font-medium">{tier.firstOffence.license}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary-600">Prison:</span>
                            <span className="font-medium">{tier.firstOffence.prison}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary-600">Interlock:</span>
                            <span className="font-medium">{tier.firstOffence.interlock}</span>
                          </div>
                        </div>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-lg text-secondary-900 mb-3">Repeat Offence</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-secondary-600">Fine:</span>
                            <span className="font-medium">{tier.secondOffence.fine}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary-600">License Suspension:</span>
                            <span className="font-medium">{tier.secondOffence.license}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary-600">Prison:</span>
                            <span className="font-medium">{tier.secondOffence.prison}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-secondary-600">Interlock:</span>
                            <span className="font-medium">{tier.secondOffence.interlock}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Defense Strategies */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-secondary-900 mb-8 text-center">
              Proven Defense Strategies in Queensland
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {defenseStrategies.map((defense, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-4">
                    <Shield className="w-8 h-8 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading font-semibold text-xl text-secondary-900 mb-2">
                        {defense.strategy}
                      </h3>
                      <p className="text-secondary-600 mb-3">{defense.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <Target className="w-4 h-4 mr-1 text-green-500" />
                          <span className="text-secondary-600">Success Rate: </span>
                          <span className="font-medium ml-1">{defense.successRate}</span>
                        </span>
                        <span className="flex items-center">
                          <Gavel className="w-4 h-4 mr-1 text-blue-500" />
                          <span className="text-secondary-600">Complexity: </span>
                          <span className="font-medium ml-1">{defense.complexity}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Court Process Timeline */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-secondary-900 mb-8 text-center">
              Queensland Court Process Timeline
            </h2>
            <div className="space-y-6">
              {courtProcess.map((step, index) => (
                <div key={index} className="flex items-start bg-white rounded-xl shadow-lg p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h3 className="font-heading font-semibold text-xl text-secondary-900">
                        {step.stage}
                      </h3>
                      <span className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
                        {step.timeframe}
                      </span>
                    </div>
                    <p className="text-secondary-600 mb-3">{step.description}</p>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="font-medium text-secondary-900">Recommended Action: </span>
                      <span className="text-secondary-600 ml-1">{step.action}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Queensland-Specific Information */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Scale className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                <h2 className="font-heading font-bold text-3xl mb-4">
                  Queensland-Specific DUI Laws
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Important aspects of QLD drink driving legislation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-4">Key Differences</h3>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Immediate license suspension for high-range offences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Mandatory alcohol interlock for repeat offenders</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Vehicle impoundment possible for serious offences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Work license available in limited circumstances</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-4">Additional Consequences</h3>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Criminal record for all DUI convictions</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Increased insurance premiums</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Employment implications for professional licenses</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Travel restrictions to certain countries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <Award className="w-16 h-16 mx-auto mb-6 text-primary-200" />
              <h2 className="font-heading font-bold text-3xl mb-4">
                Expert Queensland DUI Defense
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Don't face Queensland DUI charges alone. Get expert legal analysis 
                and personalized defense strategies from our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/assessment">
                  <Button variant="light" size="lg" className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Start Free Case Assessment
                  </Button>
                </Link>
                <Link to="/dui-charges-australia">
                  <Button variant="outline-light" size="lg" className="flex items-center">
                    <Book className="w-5 h-5 mr-2" />
                    Compare All States
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DUIChargesQueensland; 