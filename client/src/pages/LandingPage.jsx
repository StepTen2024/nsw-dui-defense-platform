import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Scale, 
  Shield, 
  Brain, 
  FileText, 
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Gavel,
  AlertTriangle,
  Clock
} from 'lucide-react';
import Button from '../components/Common/Button';

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Assessment',
      description: 'Get intelligent analysis of your DUI case with our advanced AI system trained on NSW law.',
    },
    {
      icon: Scale,
      title: 'Penalty Calculator',
      description: 'Understand potential penalties including fines, license suspension, and jail time.',
    },
    {
      icon: Shield,
      title: 'Defense Strategies',
      description: 'Discover proven defense tactics and legal arguments specific to your situation.',
    },
    {
      icon: FileText,
      title: 'Document Generation',
      description: 'Automatically generate legal documents and correspondence templates.',
    },
    {
      icon: Gavel,
      title: 'Court Preparation',
      description: 'Step-by-step guidance for court appearances and legal proceedings.',
    },
    {
      icon: Users,
      title: 'Expert Resources',
      description: 'Access curated content from experienced NSW criminal defense lawyers.',
    },
  ];

  const pricingPlans = [
    {
      name: 'Basic Assessment',
      price: 49,
      description: 'Essential case analysis and penalty calculator',
      features: [
        'AI Case Assessment',
        'Penalty Calculator',
        'Basic Defense Overview',
        'PDF Report',
      ],
      popular: false,
    },
    {
      name: 'Complete Defense Kit',
      price: 199,
      description: 'Comprehensive defense strategy and resources',
      features: [
        'Everything in Basic',
        'Detailed Defense Strategies',
        'Document Templates',
        'Court Preparation Guide',
        'Priority Support',
        '6 Month Access',
      ],
      popular: true,
    },
    {
      name: 'Premium Bundle',
      price: 399,
      description: 'Full legal guidance with expert consultation',
      features: [
        'Everything in Complete',
        'Lawyer Consultation Session',
        'Custom Legal Strategy',
        'Ongoing Case Updates',
        'Expert Review',
        '12 Month Access',
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      location: 'Sydney, NSW',
      rating: 5,
      text: 'The assessment helped me understand my options clearly. I was able to prepare better for court and got a much better outcome than I expected.',
    },
    {
      name: 'Sarah Williams',
      location: 'Newcastle, NSW',
      rating: 5,
      text: 'Excellent guidance and very detailed analysis. The defense strategies module was particularly helpful for my solicitor.',
    },
    {
      name: 'David Thompson',
      location: 'Wollongong, NSW',
      rating: 5,
      text: 'Great value for money. The document templates saved me hundreds in legal fees and the advice was spot on.',
    },
  ];

  const handleStartAssessment = () => {
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">NSW DUI Defense Navigator</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-balance">
              Facing a DUI Charge in NSW?
              <span className="block text-primary-200 mt-2">
                Get Expert Legal Guidance
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto text-balance">
              Our AI-powered platform analyzes your case, calculates potential penalties, 
              and provides proven defense strategies used by top NSW criminal lawyers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="xl" 
                className="bg-white text-primary-700 hover:bg-primary-50"
                onClick={handleStartAssessment}
              >
                Start Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => navigate('/modules')}
              >
                View Defense Modules
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">2,500+</div>
                <div className="text-primary-200">Cases Analyzed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">87%</div>
                <div className="text-primary-200">Better Outcomes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-primary-200">Available Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Comprehensive DUI Defense Tools
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Everything you need to understand your case and build the strongest possible defense
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-hover p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-secondary-600">
              Simple steps to get your case analysis and defense strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-6 font-bold text-xl">
                1
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary-900 mb-4">
                Answer Questions
              </h3>
              <p className="text-secondary-600">
                Complete our comprehensive assessment covering all aspects of your DUI case
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-6 font-bold text-xl">
                2
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary-900 mb-4">
                Get AI Analysis
              </h3>
              <p className="text-secondary-600">
                Our AI analyzes your case against NSW law and thousands of similar cases
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-6 font-bold text-xl">
                3
              </div>
              <h3 className="font-heading text-xl font-semibold text-secondary-900 mb-4">
                Receive Strategy
              </h3>
              <p className="text-secondary-600">
                Get detailed defense strategies, penalty calculations, and next steps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Choose Your Defense Package
            </h2>
            <p className="text-xl text-secondary-600">
              Transparent pricing with no hidden fees
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`card relative ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="font-heading text-xl font-semibold text-secondary-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-secondary-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-secondary-900">${plan.price}</span>
                    <span className="text-secondary-600 ml-2">AUD</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-success-500 mr-3 flex-shrink-0" />
                        <span className="text-secondary-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'primary' : 'outline'}
                    onClick={() => navigate('/payment', { state: { plan } })}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-secondary-600">
              See how our platform has helped others navigate their DUI charges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-warning-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-secondary-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <div className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-secondary-600 text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <Clock className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Don't Wait - Act Now
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Time is critical in DUI cases. Get your case analysis today and start building your defense strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                className="bg-white text-primary-700 hover:bg-primary-50"
                onClick={handleStartAssessment}
              >
                Start Your Assessment Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-primary-200">
              Free initial assessment • No credit card required • Instant results
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 