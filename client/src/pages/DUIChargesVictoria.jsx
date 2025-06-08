import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Scale, MapPin, Phone, Clock, DollarSign, Star, Users, CheckCircle, TrendingUp } from 'lucide-react';
import Button from '../components/Common/Button';

const DUIChargesVictoria = () => {
  const navigate = useNavigate();

  const victoriaPenalties = [
    {
      bacRange: "0.05% - 0.069%",
      licence: "Minimum 3 months disqualification",
      fine: "$500 - $900",
      imprisonment: "None (usually)",
      note: "Possible community service",
      firstOffence: true
    },
    {
      bacRange: "0.07% - 0.099%",
      licence: "Minimum 6 months disqualification",
      fine: "$500 - $900",
      imprisonment: "Up to 6 months",
      note: "Interlock required",
      firstOffence: true
    },
    {
      bacRange: "0.10% - 0.149%",
      licence: "Minimum 12 months disqualification",
      fine: "$1,000 - $1,800",
      imprisonment: "Up to 12 months",
      note: "Interlock required",
      firstOffence: true
    },
    {
      bacRange: "0.15%+",
      licence: "Minimum 18 months disqualification",
      fine: "$1,500 - $2,500",
      imprisonment: "Up to 2 years",
      note: "Interlock required",
      firstOffence: true
    }
  ];

  const magistratesCourts = [
    {
      name: "Melbourne Magistrates' Court",
      address: "233 William Street, Melbourne VIC 3000",
      phone: "(03) 9628 7777",
      serviceArea: "Melbourne CBD, Southbank, Docklands",
      specialNotes: "Largest court in Victoria - busy but efficient"
    },
    {
      name: "Geelong Magistrates' Court",
      address: "19-29 Moorabool Street, Geelong VIC 3220",
      phone: "(03) 5226 4444",
      serviceArea: "Geelong, Bellarine Peninsula, Surf Coast",
      specialNotes: "Serves regional Victoria - more personal approach"
    },
    {
      name: "Dandenong Magistrates' Court",
      address: "5 Pultney Street, Dandenong VIC 3175",
      phone: "(03) 9767 7777",
      serviceArea: "Dandenong, Casey, Cardinia",
      specialNotes: "Multicultural court - interpreters available"
    },
    {
      name: "Ballarat Magistrates' Court",
      address: "47 Lydiard Street North, Ballarat VIC 3350",
      phone: "(03) 5336 6888",
      serviceArea: "Ballarat, Bacchus Marsh, Melton",
      specialNotes: "Regional court - local magistrates understand community"
    }
  ];

  const victoriaDefences = [
    {
      name: "Honest and Reasonable Mistake",
      description: "You reasonably believed you were under the limit",
      successRate: "25%",
      complexity: "High",
      requirements: "Evidence of consumption pattern, expert testimony"
    },
    {
      name: "Necessity Defence",
      description: "You drove to avoid immediate danger",
      successRate: "20%",
      complexity: "Very High",
      requirements: "Evidence of emergency, no alternatives available"
    },
    {
      name: "Procedural Errors",
      description: "Police failed to follow proper procedures",
      successRate: "35%",
      complexity: "Medium",
      requirements: "Police documentation, witness statements"
    },
    {
      name: "Medical Condition",
      description: "Medical condition affected BAC reading",
      successRate: "15%",
      complexity: "High",
      requirements: "Medical evidence, expert testimony"
    },
    {
      name: "Device Malfunction",
      description: "Breathalyzer or blood test equipment failure",
      successRate: "30%",
      complexity: "Medium",
      requirements: "Calibration records, maintenance logs"
    }
  ];

  const interlockProgram = [
    {
      step: "Court Order",
      description: "Court orders interlock installation",
      timeframe: "At sentencing",
      cost: "$0"
    },
    {
      step: "Installation",
      description: "Book and install interlock device",
      timeframe: "Within 21 days",
      cost: "$200 - $300"
    },
    {
      step: "Monthly Costs",
      description: "Device monitoring and maintenance",
      timeframe: "Monthly",
      cost: "$100 - $150"
    },
    {
      step: "Removal",
      description: "Remove device after completion",
      timeframe: "After order period",
      cost: "$100 - $200"
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
              onClick={() => navigate('/dui-charges-australia')}
              className="hover:text-primary-600 transition-colors"
            >
              DUI Charges Australia
            </button>
            <span>/</span>
            <span className="font-medium text-secondary-900">Victoria</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              DUI Charges in Victoria
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Complete guide to drink driving charges, penalties, and defence options in Victoria
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-medium">Zero Tolerance</span> - 0.00% for P1/P2
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-medium">Interlock Required</span> - 0.07%+
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-medium">Max Fine</span> - $2,500
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Immediate Licence Loss</h3>
              <p className="text-secondary-600">24-hour suspension on the spot</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-error-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Hefty Fines</h3>
              <p className="text-secondary-600">Up to $2,500 penalty</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-warning-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Criminal Record</h3>
              <p className="text-secondary-600">Permanent criminal conviction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI Defence</h3>
              <p className="text-secondary-600">Expert analysis available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Penalties Table */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Victoria DUI Penalties 2024
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">BAC Range</th>
                      <th className="px-6 py-4 text-left">Licence Disqualification</th>
                      <th className="px-6 py-4 text-left">Fine</th>
                      <th className="px-6 py-4 text-left">Imprisonment</th>
                      <th className="px-6 py-4 text-left">Additional Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {victoriaPenalties.map((penalty, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-primary-700">{penalty.bacRange}</td>
                        <td className="px-6 py-4">{penalty.licence}</td>
                        <td className="px-6 py-4 font-medium text-error-600">{penalty.fine}</td>
                        <td className="px-6 py-4">{penalty.imprisonment}</td>
                        <td className="px-6 py-4 text-sm text-secondary-600">{penalty.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-warning-50 border border-warning-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-warning-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-warning-800 mb-2">Victoria-Specific Penalties</h3>
                  <ul className="text-warning-700 space-y-1 text-sm">
                    <li>• Mandatory interlock device for BAC 0.07%+</li>
                    <li>• Zero tolerance for P1 and P2 drivers (0.00%)</li>
                    <li>• Repeat offenders face doubled penalties</li>
                    <li>• Commercial drivers face additional sanctions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defence Strategies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Victoria DUI Defence Strategies
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {victoriaDefences.map((defence, index) => (
                <div key={index} className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-lg p-6 border border-secondary-200">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Scale className="w-4 h-4 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{defence.name}</h3>
                      <p className="text-secondary-600 text-sm mb-3">{defence.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-success-500" />
                      <span className="text-secondary-600">Success Rate:</span>
                      <span className="font-medium text-success-600">{defence.successRate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-warning-500" />
                      <span className="text-secondary-600">Complexity:</span>
                      <span className="font-medium text-warning-600">{defence.complexity}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 text-xs text-secondary-500">
                    <span className="font-medium">Requirements:</span> {defence.requirements}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Magistrates Courts */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Victoria Magistrates' Courts
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {magistratesCourts.map((court, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{court.name}</h3>
                      <p className="text-secondary-600 text-sm mb-2">{court.address}</p>
                      <div className="flex items-center space-x-2 text-sm text-secondary-500 mb-2">
                        <Phone className="w-4 h-4" />
                        <span>{court.phone}</span>
                      </div>
                      <p className="text-sm text-secondary-600 mb-3">
                        <span className="font-medium">Service Area:</span> {court.serviceArea}
                      </p>
                      <div className="bg-primary-50 p-3 rounded-lg">
                        <p className="text-sm text-primary-700">{court.specialNotes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interlock Program */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Victoria Interlock Program
            </h2>
            
            <div className="bg-gradient-to-br from-warning-50 to-secondary-50 rounded-lg p-8 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-warning-600" />
                <h3 className="text-xl font-semibold">Mandatory for BAC 0.07%+</h3>
              </div>
              <p className="text-secondary-700 mb-6">
                Victoria requires alcohol interlock devices for all drink driving offences with BAC 0.07% or higher. 
                The device prevents your vehicle from starting if alcohol is detected in your breath.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {interlockProgram.map((step, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-secondary-200">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold">{step.step}</h4>
                    </div>
                    <p className="text-sm text-secondary-600 mb-2">{step.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-500">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {step.timeframe}
                      </span>
                      <span className="font-medium text-error-600">{step.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-center mb-8">
              Related DUI Information
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-lg mb-3">DUI Charges Australia</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Compare Victoria's DUI laws with other Australian states and territories.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/dui-charges-australia')}
                  className="w-full"
                >
                  Learn More
                </Button>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-lg mb-3">First Time DUI Offence</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Specific guidance for first-time offenders in Victoria.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/first-time-dui-offence-australia')}
                  className="w-full"
                >
                  Read Guide
                </Button>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-lg mb-3">Free Case Assessment</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Get AI-powered analysis of your Victoria DUI case.
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate('/assessment')}
                  className="w-full"
                >
                  Start Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Facing DUI Charges in Victoria?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert AI-powered analysis of your case. Our platform provides comprehensive 
              defence strategies specifically tailored to Victoria's legal system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/assessment')}
                className="!bg-white !text-primary-700 hover:!bg-primary-50 hover:!text-primary-800"
              >
                Start Free Assessment
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/dui-charges-australia')}
                className="!border-white !text-white hover:!bg-white/10"
              >
                Compare All States
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DUIChargesVictoria; 