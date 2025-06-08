import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Scale, 
  Shield, 
  FileText, 
  AlertTriangle, 
  MapPin, 
  Clock,
  CheckCircle,
  ArrowRight,
  Gavel,
  Users,
  DollarSign
} from 'lucide-react';
import Button from '../components/Common/Button';

const DUIChargesAustralia = () => {
  const navigate = useNavigate();

  const stateData = [
    {
      state: 'New South Wales',
      slug: 'nsw',
      maxFine: '$3,300',
      maxDisqualification: '6 months',
      maxJail: '18 months',
      population: '8.2M',
      highVolume: true
    },
    {
      state: 'Victoria', 
      slug: 'victoria',
      maxFine: '$3,000',
      maxDisqualification: '6 months', 
      maxJail: '12 months',
      population: '6.7M',
      highVolume: true
    },
    {
      state: 'Queensland',
      slug: 'queensland', 
      maxFine: '$2,800',
      maxDisqualification: '9 months',
      maxJail: '18 months',
      population: '5.2M',
      highVolume: true
    },
    {
      state: 'Western Australia',
      slug: 'western-australia',
      maxFine: '$2,500', 
      maxDisqualification: '10 months',
      maxJail: '18 months',
      population: '2.8M',
      highVolume: false
    },
    {
      state: 'South Australia',
      slug: 'south-australia', 
      maxFine: '$2,200',
      maxDisqualification: '6 months',
      maxJail: '12 months',
      population: '1.8M',
      highVolume: false
    },
    {
      state: 'Tasmania',
      slug: 'tasmania',
      maxFine: '$2,000',
      maxDisqualification: '4 months', 
      maxJail: '12 months',
      population: '540K',
      highVolume: false
    },
    {
      state: 'Australian Capital Territory',
      slug: 'act',
      maxFine: '$3,200',
      maxDisqualification: '6 months',
      maxJail: '12 months', 
      population: '460K',
      highVolume: false
    },
    {
      state: 'Northern Territory',
      slug: 'northern-territory',
      maxFine: '$2,600',
      maxDisqualification: '6 months',
      maxJail: '12 months',
      population: '250K', 
      highVolume: false
    }
  ];

  const chargeTypes = [
    {
      type: 'Low Range PCA',
      range: '0.05 - 0.079',
      description: 'First-time offenders may avoid conviction with good legal defence',
      icon: CheckCircle,
      color: 'text-success-600'
    },
    {
      type: 'Mid Range PCA', 
      range: '0.08 - 0.149',
      description: 'Mandatory licence disqualification, potential for work licence',
      icon: AlertTriangle,
      color: 'text-warning-600'
    },
    {
      type: 'High Range PCA',
      range: '0.15+',
      description: 'Serious penalties including potential imprisonment',
      icon: Scale,
      color: 'text-error-600'
    },
    {
      type: 'Refusing Breath Test',
      range: 'N/A',
      description: 'Often carries penalties equal to high range drink driving',
      icon: Shield,
      color: 'text-error-600'
    }
  ];

  const defenceOptions = [
    {
      title: 'Traditional Lawyer',
      cost: '$3,000 - $8,000',
      timeframe: '3-6 months',
      pros: ['Personal representation', 'Court appearance'],
      cons: ['Expensive', 'Slow process', 'Hourly billing']
    },
    {
      title: 'DUI Defence AI',
      cost: '$497 (one-off)',
      timeframe: '24-48 hours',
      pros: ['Immediate analysis', 'Proven strategies', 'Fixed pricing', '87% success rate'],
      cons: ['Not suitable for complex cases requiring court representation'],
      recommended: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO-Optimized Header */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Complete Legal Guide 2024</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              DUI Charges Australia: 
              <span className="block text-primary-200 mt-2">
                Complete Defence Guide
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Comprehensive guide to DUI charges across all Australian states. 
              Understand penalties, defence options, and how AI-powered legal defence 
              can save you thousands while achieving better outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="secondary"
                size="xl" 
                className="!bg-white !text-primary-700 hover:!bg-primary-50 hover:!text-primary-800 !border-0"
                onClick={() => navigate('/assessment')}
              >
                Get Free Case Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="!border-white/30 !text-white hover:!bg-white/10 !bg-transparent"
                onClick={() => navigate('/ai-dui-defence-service')}
              >
                Compare Defence Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">25,000+</div>
              <div className="text-secondary-600">Annual DUI Charges</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">$5,500</div>
              <div className="text-secondary-600">Average Legal Costs</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">87%</div>
              <div className="text-secondary-600">AI Defence Success Rate</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">$497</div>
              <div className="text-secondary-600">Fixed AI Defence Cost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding DUI Charges */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-secondary-900 mb-8">
              Understanding DUI Charges in Australia
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-secondary-600 mb-6">
                DUI (Driving Under the Influence) charges in Australia are formally known as 
                "Prescribed Concentration of Alcohol" (PCA) offences. These charges apply when 
                your blood alcohol concentration (BAC) exceeds the legal limit for your licence type.
              </p>
              
              <div className="bg-warning-50 border-l-4 border-warning-400 p-6 mb-8">
                <div className="flex">
                  <AlertTriangle className="w-6 h-6 text-warning-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-warning-800 mb-2">Important Legal Distinction</h3>
                    <p className="text-warning-700">
                      While commonly called "DUI", Australian law technically uses terms like 
                      "drink driving", "PCA", or "driving under the influence of alcohol". 
                      The penalties and processes are the same regardless of terminology.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                Blood Alcohol Concentration Limits
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-secondary-50 rounded-lg p-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Full Licence Holders</h4>
                  <ul className="space-y-2 text-secondary-700">
                    <li>• Legal limit: 0.05 BAC</li>
                    <li>• Low range: 0.05 - 0.079</li>
                    <li>• Mid range: 0.08 - 0.149</li> 
                    <li>• High range: 0.15+</li>
                  </ul>
                </div>
                
                <div className="bg-secondary-50 rounded-lg p-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">Restricted Licences</h4>
                  <ul className="space-y-2 text-secondary-700">
                    <li>• Learner drivers: 0.00 BAC</li>
                    <li>• Provisional drivers: 0.00 BAC</li>
                    <li>• Commercial drivers: 0.02 BAC</li>
                    <li>• Heavy vehicle drivers: 0.00 BAC</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of DUI Charges */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-secondary-900 mb-8 text-center">
              Types of DUI Charges in Australia
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {chargeTypes.map((charge, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <charge.icon className={`w-8 h-8 ${charge.color} mr-4 mt-1`} />
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-secondary-900 mb-2">
                        {charge.type}
                      </h3>
                      {charge.range !== 'N/A' && (
                        <div className="text-secondary-600 font-medium mb-2">
                          BAC Range: {charge.range}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-secondary-700 mb-4">{charge.description}</p>
                  <Link 
                    to={`/${charge.type.toLowerCase().replace(/\s+/g, '-')}-charges-australia`}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    Learn more about {charge.type}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* State-by-State Laws */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-secondary-900 mb-8 text-center">
              DUI Laws by Australian State and Territory
            </h2>
            
            <p className="text-xl text-secondary-600 text-center mb-12 max-w-3xl mx-auto">
              While the basic framework is similar across Australia, each state and territory 
              has unique penalties, court processes, and defence opportunities. Click on your 
              state for detailed information.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateData.map((state, index) => (
                <Link 
                  key={index}
                  to={`/dui-charges-${state.slug}`}
                  className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] border border-secondary-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-1">
                        {state.state}
                      </h3>
                      <div className="text-secondary-600 text-sm">
                        Population: {state.population}
                      </div>
                    </div>
                    {state.highVolume && (
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                        High Volume
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2 text-sm text-secondary-700 mb-4">
                    <div className="flex justify-between">
                      <span>Max Fine:</span>
                      <span className="font-medium">{state.maxFine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Max Licence Loss:</span>
                      <span className="font-medium">{state.maxDisqualification}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Max Jail Time:</span>
                      <span className="font-medium">{state.maxJail}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-primary-600 font-medium">
                    <MapPin className="w-4 h-4 mr-2" />
                    View {state.state} Details
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Defence Options Comparison */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-secondary-900 mb-8 text-center">
              DUI Defence Options: Traditional vs AI-Powered
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {defenceOptions.map((option, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-lg p-8 shadow-sm ${
                    option.recommended ? 'ring-2 ring-primary-500 relative' : ''
                  }`}
                >
                  {option.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Recommended
                      </span>
                    </div>
                  )}
                  
                  <h3 className="font-heading text-xl font-semibold text-secondary-900 mb-4">
                    {option.title}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      {option.cost}
                    </div>
                    <div className="text-secondary-600">
                      Typical timeframe: {option.timeframe}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-success-700 mb-2">Advantages:</h4>
                    <ul className="space-y-1">
                      {option.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-center text-secondary-700">
                          <CheckCircle className="w-4 h-4 text-success-500 mr-2 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-error-700 mb-2">Limitations:</h4>
                    <ul className="space-y-1">
                      {option.cons.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-start text-secondary-700">
                          <div className="w-2 h-2 bg-error-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {option.recommended && (
                    <Button 
                      className="w-full"
                      onClick={() => navigate('/assessment')}
                    >
                      Start Free Analysis
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Consequences */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-secondary-900 mb-8">
              Immediate Consequences of DUI Charges
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-error-100 text-error-600 rounded-full mb-6">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-4">
                  Immediate Licence Suspension
                </h3>
                <p className="text-secondary-600">
                  Your licence is suspended immediately upon charge. Length depends on 
                  your reading and state, typically 3-6 months minimum.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-warning-100 text-warning-600 rounded-full mb-6">
                  <Gavel className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-4">
                  Court Appearance Required
                </h3>
                <p className="text-secondary-600">
                  You must appear in court or have legal representation. Failing to 
                  appear can result in additional charges and warrants.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-4">
                  Financial Impact
                </h3>
                <p className="text-secondary-600">
                  Immediate costs include towing, impound fees, and bail. Legal costs 
                  and fines add thousands more to the total expense.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-6">
              Get Expert DUI Defence Analysis Now
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Don't face DUI charges alone. Our AI-powered analysis provides the same quality 
              defence strategies used by top criminal lawyers at a fraction of the cost.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="secondary"
                size="xl" 
                className="!bg-white !text-primary-700 hover:!bg-primary-50 hover:!text-primary-800 !border-0"
                onClick={() => navigate('/assessment')}
              >
                Start Free Case Analysis
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
              ✓ Free initial assessment • ✓ Fixed pricing • ✓ 87% success rate • ✓ 24-hour turnaround
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DUIChargesAustralia; 