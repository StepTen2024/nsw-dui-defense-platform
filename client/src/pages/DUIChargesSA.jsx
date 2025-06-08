import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Scale, AlertTriangle, CheckCircle, ArrowRight, 
  Clock, DollarSign, Car, Phone, MapPin, Book, FileText,
  Users, Gavel, Award, Target
} from 'lucide-react';
import Button from '../components/Common/Button';

const DUIChargesSA = () => {
  const penaltyTiers = [
    {
      category: "Low Range (0.05-0.079 BAC)",
      firstOffence: {
        fine: "$300-$600",
        license: "1-12 months",
        prison: "No",
        interlock: "No"
      },
      secondOffence: {
        fine: "$600-$1,200",
        license: "2-24 months", 
        prison: "Up to 3 months",
        interlock: "Mandatory"
      }
    },
    {
      category: "Mid Range (0.08-0.149 BAC)",  
      firstOffence: {
        fine: "$600-$1,200",
        license: "3-12 months",
        prison: "Up to 3 months",
        interlock: "Possible"
      },
      secondOffence: {
        fine: "$1,200-$2,400",
        license: "6-24 months",
        prison: "Up to 6 months", 
        interlock: "Mandatory"
      }
    },
    {
      category: "High Range (0.15+ BAC)",
      firstOffence: {
        fine: "$1,200-$2,400",
        license: "6-24 months",
        prison: "Up to 6 months",
        interlock: "Mandatory"
      },
      secondOffence: {
        fine: "$2,400-$4,800",
        license: "12-60 months",
        prison: "Up to 12 months",
        interlock: "Mandatory"
      }
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
              <span className="text-primary-100">South Australia</span>
            </nav>
            
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 mr-3 text-primary-200" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                DUI Charges in South Australia
              </h1>
            </div>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Complete guide to drink driving charges, penalties, and legal processes in South Australia. 
              Understand your rights and defense options under SA traffic law.
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
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">$300+</h3>
              <p className="text-secondary-600">Minimum Fine</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Car className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">60 months</h3>
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
              South Australia DUI Penalties 2024
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

        {/* SA-Specific Information */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Scale className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                <h2 className="font-heading font-bold text-3xl mb-4">
                  South Australia-Specific DUI Laws
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Important aspects of SA drink driving legislation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-4">Key Features</h3>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Essential person permit available for work/family needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Alcohol interlock device mandatory for high-range</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Immediate license suspension upon charge</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Good behaviour bond option for first offenders</span>
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
                      <span>Substantial increase in insurance premiums</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Professional license implications</span>
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-5 h-5 mr-3 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>Travel restrictions to some countries</span>
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
                Expert South Australia DUI Defense
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Don't face South Australia DUI charges alone. Get expert legal analysis 
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

export default DUIChargesSA; 