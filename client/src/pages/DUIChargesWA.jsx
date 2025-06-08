import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Scale, AlertTriangle, CheckCircle, ArrowRight, 
  Clock, DollarSign, Car, Phone, MapPin, Book, FileText,
  Users, Gavel, Award, Target
} from 'lucide-react';
import Button from '../components/Common/Button';

const DUIChargesWA = () => {
  const penaltyTiers = [
    {
      category: "Low Range (0.05-0.079 BAC)",
      firstOffence: {
        fine: "$500-$900",
        license: "3-6 months",
        prison: "No",
        interlock: "No"
      },
      secondOffence: {
        fine: "$900-$1,800",
        license: "6-12 months", 
        prison: "Up to 6 months",
        interlock: "Mandatory"
      }
    },
    {
      category: "Mid Range (0.08-0.149 BAC)",  
      firstOffence: {
        fine: "$900-$1,800",
        license: "4-10 months",
        prison: "Up to 6 months",
        interlock: "Possible"
      },
      secondOffence: {
        fine: "$1,800-$3,600",
        license: "8-24 months",
        prison: "Up to 9 months", 
        interlock: "Mandatory"
      }
    },
    {
      category: "High Range (0.15+ BAC)",
      firstOffence: {
        fine: "$1,800-$3,600",
        license: "6-18 months",
        prison: "Up to 9 months",
        interlock: "Mandatory"
      },
      secondOffence: {
        fine: "$3,600-$7,200",
        license: "12-36 months",
        prison: "Up to 18 months",
        interlock: "Mandatory"
      }
    }
  ];

  const defenseStrategies = [
    {
      strategy: "Device Calibration Issues",
      description: "Challenge accuracy and maintenance of breathalyzer equipment",
      successRate: "Moderate",
      complexity: "Medium"
    },
    {
      strategy: "Police Procedure Violations",
      description: "Identify breaches in arrest and testing protocols",
      successRate: "High",
      complexity: "Low"
    },
    {
      strategy: "Medical Defense",
      description: "Medical conditions affecting breath alcohol readings",
      successRate: "Variable",
      complexity: "High"
    },
    {
      strategy: "Time of Driving Defense",
      description: "BAC below limit when actually driving",
      successRate: "Moderate",
      complexity: "High"
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
              <span className="text-primary-100">Western Australia</span>
            </nav>
            
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 mr-3 text-primary-200" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                DUI Charges in Western Australia
              </h1>
            </div>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Complete guide to drink driving charges, penalties, and legal processes in Western Australia. 
              Understand your rights and defense options under WA traffic law.
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
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">$500+</h3>
              <p className="text-secondary-600">Minimum Fine</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Car className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">36 months</h3>
              <p className="text-secondary-600">Max License Loss</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">18 months</h3>
              <p className="text-secondary-600">Max Prison Term</p>
            </div>
          </div>
        </section>

        {/* Penalty Structure */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-secondary-900 mb-8 text-center">
              Western Australia DUI Penalties 2024
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
              Proven Defense Strategies in Western Australia
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

        {/* WA-Specific Information */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Scale className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                <h2 className="font-heading font-bold text-3xl mb-4">
                  Western Australia-Specific DUI Laws
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Important aspects of WA drink driving legislation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-4">Key Features</h3>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Mandatory alcohol interlock for high-range offences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Extraordinary license available for work/medical needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Vehicle confiscation possible for serious offences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Immediate license suspension upon charge</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-4">Additional Consequences</h3>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Criminal record for all convictions</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Significantly increased insurance costs</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Impact on employment opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>International travel restrictions</span>
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
                Expert Western Australia DUI Defense
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Don't face Western Australia DUI charges alone. Get expert legal analysis 
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

export default DUIChargesWA; 