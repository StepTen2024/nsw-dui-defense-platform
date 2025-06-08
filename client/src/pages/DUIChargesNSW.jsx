import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Scale, 
  Shield, 
  MapPin, 
  Clock,
  CheckCircle,
  ArrowRight,
  Gavel,
  AlertTriangle,
  DollarSign,
  FileText,
  Calendar,
  Phone,
  Users
} from 'lucide-react';
import Button from '../components/Common/Button';

const DUIChargesNSW = () => {
  const navigate = useNavigate();

  const nswPenalties = [
    {
      range: 'Low Range PCA (0.05-0.079)',
      firstOffence: {
        fine: 'Up to $1,100',
        licence: '3-6 months disqualification',
        jail: 'No imprisonment for first offence',
        interlock: 'Not required'
      },
      repeatOffence: {
        fine: 'Up to $2,200',
        licence: '6-12 months disqualification',
        jail: 'Up to 6 months',
        interlock: 'May be required'
      }
    },
    {
      range: 'Mid Range PCA (0.08-0.149)',
      firstOffence: {
        fine: 'Up to $2,200',
        licence: '6-12 months disqualification',
        jail: 'Up to 6 months',
        interlock: 'Not required'
      },
      repeatOffence: {
        fine: 'Up to $3,300',
        licence: '12-24 months disqualification',
        jail: 'Up to 12 months',
        interlock: 'Mandatory'
      }
    },
    {
      range: 'High Range PCA (0.15+)',
      firstOffence: {
        fine: 'Up to $3,300',
        licence: '12-36 months disqualification',
        jail: 'Up to 18 months',
        interlock: 'Mandatory'
      },
      repeatOffence: {
        fine: 'Up to $5,500',
        licence: '2-5 years disqualification',
        jail: 'Up to 2 years',
        interlock: 'Mandatory'
      }
    }
  ];

  const localCourts = [
    {
      name: 'Sydney Local Court',
      address: '143-147 Liverpool Street, Sydney',
      phone: '02 9265 8111',
      areas: ['Sydney CBD', 'The Rocks', 'Haymarket']
    },
    {
      name: 'Parramatta Local Court',
      address: '160 Marsden Street, Parramatta',
      phone: '02 9635 8711',
      areas: ['Parramatta', 'Harris Park', 'Westmead']
    },
    {
      name: 'Liverpool Local Court',
      address: '39 Elizabeth Street, Liverpool',
      phone: '02 8738 6600',
      areas: ['Liverpool', 'Casula', 'Moorebank']
    },
    {
      name: 'Newcastle Local Court',
      address: '28 Church Street, Newcastle',
      phone: '02 4929 2222',
      areas: ['Newcastle', 'Hamilton', 'The Junction']
    }
  ];

  const nswSpecificDefences = [
    {
      title: 'Device Malfunction',
      description: 'Challenge the accuracy or calibration of breathalyzer equipment',
      success: 'High',
      complexity: 'Medium'
    },
    {
      title: 'Medical Condition',
      description: 'Medical conditions affecting BAC readings (diabetes, GERD)',
      success: 'Medium',
      complexity: 'High'
    },
    {
      title: 'Contamination Defence',
      description: 'Mouth alcohol from recent consumption affecting readings',
      success: 'Medium',
      complexity: 'Medium'
    },
    {
      title: 'Procedural Errors',
      description: 'Police failing to follow proper testing procedures',
      success: 'High',
      complexity: 'Low'
    }
  ];

  const appealProcess = [
    {
      step: 1,
      title: 'Lodge Appeal',
      timeframe: 'Within 28 days',
      description: 'Submit appeal to NSW Civil and Administrative Tribunal (NCAT)',
      cost: '$51 application fee'
    },
    {
      step: 2,
      title: 'Gather Evidence',
      timeframe: '2-4 weeks',
      description: 'Collect medical records, witness statements, expert reports',
      cost: 'Variable'
    },
    {
      step: 3,
      title: 'NCAT Hearing',
      timeframe: '6-12 weeks',
      description: 'Present case before administrative tribunal',
      cost: 'No additional fees'
    },
    {
      step: 4,
      title: 'Decision',
      timeframe: '2-4 weeks',
      description: 'NCAT issues written decision on appeal',
      cost: 'None'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <section className="bg-secondary-50 py-4">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-secondary-600">
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <Link to="/dui-charges-australia" className="hover:text-primary-600">DUI Charges Australia</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-secondary-900 font-medium">NSW</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">New South Wales • Updated 2024</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              DUI Charges NSW: 
              <span className="block text-primary-200 mt-2">
                Complete Defence Guide
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Everything you need to know about DUI charges in New South Wales. 
              Understand NSW-specific penalties, court processes, and proven defence strategies 
              that work in NSW courts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="secondary"
                size="xl" 
                className="!bg-white !text-primary-700 hover:!bg-primary-50 hover:!text-primary-800 !border-0"
                onClick={() => navigate('/assessment')}
              >
                Get NSW Case Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="!border-white/30 !text-white hover:!bg-white/10 !bg-transparent"
                onClick={() => navigate('/drink-driving-lawyer-sydney')}
              >
                Find Sydney Lawyer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* NSW Quick Facts */}
      <section className="py-12 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">8,200+</div>
              <div className="text-secondary-600">Annual NSW DUI Cases</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">$5,500</div>
              <div className="text-secondary-600">Avg Legal Costs NSW</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">92%</div>
              <div className="text-secondary-600">NSW AI Success Rate</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">3-6</div>
              <div className="text-secondary-600">Months Court Wait</div>
            </div>
          </div>
        </div>
      </section>

      {/* NSW Penalty Table */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-secondary-900 mb-8 text-center">
              NSW DUI Penalties: Complete Breakdown
            </h2>
            
            <div className="space-y-8">
              {nswPenalties.map((penalty, index) => (
                <div key={index} className="bg-white border border-secondary-200 rounded-lg overflow-hidden">
                  <div className="bg-primary-50 px-6 py-4 border-b border-secondary-200">
                    <h3 className="font-heading text-xl font-semibold text-secondary-900">
                      {penalty.range}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="p-6 border-r border-secondary-200">
                      <h4 className="font-semibold text-success-700 mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        First Offence
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-secondary-600">Maximum Fine:</span>
                          <span className="font-medium">{penalty.firstOffence.fine}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary-600">Licence:</span>
                          <span className="font-medium">{penalty.firstOffence.licence}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary-600">Imprisonment:</span>
                          <span className="font-medium">{penalty.firstOffence.jail}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary-600">Interlock:</span>
                          <span className="font-medium">{penalty.firstOffence.interlock}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-semibold text-error-700 mb-4 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Repeat Offence
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-secondary-600">Maximum Fine:</span>
                          <span className="font-medium">{penalty.repeatOffence.fine}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary-600">Licence:</span>
                          <span className="font-medium">{penalty.repeatOffence.licence}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary-600">Imprisonment:</span>
                          <span className="font-medium">{penalty.repeatOffence.jail}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary-600">Interlock:</span>
                          <span className="font-medium">{penalty.repeatOffence.interlock}</span>
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

      {/* NSW Specific Defences */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-secondary-900 mb-8 text-center">
              Proven Defence Strategies in NSW Courts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {nswSpecificDefences.map((defence, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-heading text-lg font-semibold text-secondary-900">
                      {defence.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        defence.success === 'High' ? 'bg-success-100 text-success-800' :
                        defence.success === 'Medium' ? 'bg-warning-100 text-warning-800' :
                        'bg-secondary-100 text-secondary-800'
                      }`}>
                        {defence.success} Success
                      </span>
                    </div>
                  </div>
                  <p className="text-secondary-700 mb-4">{defence.description}</p>
                  <div className="text-sm text-secondary-600">
                    Complexity: {defence.complexity}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                onClick={() => navigate('/assessment')}
                size="lg"
              >
                Get Personalized Defence Strategy
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Courts */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-secondary-900 mb-8 text-center">
              NSW Local Courts Handling DUI Cases
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {localCourts.map((court, index) => (
                <div key={index} className="bg-white border border-secondary-200 rounded-lg p-6">
                  <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-3">
                    {court.name}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-secondary-400 mr-2 mt-0.5" />
                      <span className="text-secondary-700">{court.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-secondary-400 mr-2" />
                      <span className="text-secondary-700">{court.phone}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-secondary-900 mb-2">Service Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {court.areas.map((area, areaIndex) => (
                        <span 
                          key={areaIndex}
                          className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded text-sm"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Licence Appeal Process */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-secondary-900 mb-8 text-center">
              NSW Licence Suspension Appeal Process
            </h2>
            
            <div className="space-y-6">
              {appealProcess.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {step.step}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-heading text-lg font-semibold text-secondary-900">
                          {step.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded">
                            {step.timeframe}
                          </span>
                          <span className="text-secondary-600">
                            Cost: {step.cost}
                          </span>
                        </div>
                      </div>
                      <p className="text-secondary-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-secondary-900 mb-8 text-center">
              NSW DUI Defence Resources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link 
                to="/first-time-dui-offence-nsw"
                className="block bg-white border border-secondary-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <FileText className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="font-semibold text-secondary-900 mb-2">
                  First Time DUI NSW
                </h3>
                <p className="text-secondary-600 text-sm">
                  Specific guidance for first-time offenders in NSW courts
                </p>
              </Link>
              
              <Link 
                to="/work-licence-nsw"
                className="block bg-white border border-secondary-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <Gavel className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="font-semibold text-secondary-900 mb-2">
                  Work Licence NSW
                </h3>
                <p className="text-secondary-600 text-sm">
                  How to apply for and obtain a work licence in NSW
                </p>
              </Link>
              
              <Link 
                to="/interlock-device-nsw"
                className="block bg-white border border-secondary-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <Shield className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="font-semibold text-secondary-900 mb-2">
                  Interlock Device NSW
                </h3>
                <p className="text-secondary-600 text-sm">
                  Complete guide to alcohol interlock requirements in NSW
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-6">
              Get Expert NSW DUI Defence Now
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Our AI system is trained on thousands of NSW DUI cases and knows the specific 
              strategies that work in NSW courts. Don't risk your licence and future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="secondary"
                size="xl" 
                className="!bg-white !text-primary-700 hover:!bg-primary-50 hover:!text-primary-800 !border-0"
                onClick={() => navigate('/assessment')}
              >
                Start NSW Case Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="!border-white/30 !text-white hover:!bg-white/10 !bg-transparent"
                onClick={() => navigate('/pricing')}
              >
                View Pricing
              </Button>
            </div>
            
            <p className="text-sm text-primary-200">
              ✓ NSW-specific strategies • ✓ Local court knowledge • ✓ $497 fixed price • ✓ 92% NSW success rate
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DUIChargesNSW; 