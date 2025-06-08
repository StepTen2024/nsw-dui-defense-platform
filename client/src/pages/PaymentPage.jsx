import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Check, 
  Star, 
  Shield, 
  Clock, 
  Users,
  FileText,
  BookOpen,
  Phone,
  ArrowRight
} from 'lucide-react';
import { usePayment } from '../context/PaymentContext';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Common/Button';
import LoadingSpinner from '../components/Common/LoadingSpinner';

const PaymentPage = () => {
  const { isAuthenticated } = useAuth();
  const { setSelectedPlan, createPaymentIntent, loading } = usePayment();
  const [selectedPlanId, setSelectedPlanId] = useState('premium');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = {
    free: {
      id: 'free',
      name: 'Free',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        'Basic DUI assessment',
        'General penalty estimates',
        '2 free legal modules',
        'Basic defense strategies',
        'Community support'
      ]
    },
    premium: {
      id: 'premium',
      name: 'Premium',
      monthlyPrice: 49,
      yearlyPrice: 490,
      popular: true,
      features: [
        'Comprehensive DUI assessment',
        'Detailed penalty calculations',
        'All 6 legal education modules',
        'Personalized defense strategies',
        'PDF reports and documentation',
        'Priority customer support',
        'Case progress tracking',
        'Court date reminders'
      ]
    },
    professional: {
      id: 'professional',
      name: 'Professional',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Everything in Premium',
        '1-on-1 consultation with legal expert',
        'Custom case analysis',
        'Lawyer referral service',
        'Document review assistance',
        'Court preparation guidance',
        'Unlimited assessments',
        '24/7 priority support'
      ]
    }
  };

  const handlePlanSelection = (planId) => {
    setSelectedPlanId(planId);
    setSelectedPlan(plans[planId]);
  };

  const handleProceedToPayment = async () => {
    if (!isAuthenticated) {
      alert('Please log in to continue with payment');
      return;
    }

    const selectedPlan = plans[selectedPlanId];
    const amount = billingCycle === 'monthly' ? selectedPlan.monthlyPrice : selectedPlan.yearlyPrice;

    if (amount === 0) {
      alert('You already have access to the free plan!');
      return;
    }

    const result = await createPaymentIntent(selectedPlanId, amount);
    if (result.success) {
      // In a real app, this would redirect to Stripe checkout or show payment form
      alert(`Payment intent created successfully for $${amount}. In a real app, this would proceed to payment processing.`);
    } else {
      alert(`Payment failed: ${result.error}`);
    }
  };

  const getCurrentPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getMonthlyEquivalent = (plan) => {
    return billingCycle === 'yearly' ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice;
  };

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
              <CreditCard className="w-8 h-8" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-secondary-900 mb-4">
              Choose Your Plan
            </h1>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Get the legal support you need to navigate your DUI case with confidence. 
              Choose the plan that best fits your situation.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm border border-secondary-200">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'monthly'
                    ? 'bg-primary-600 text-white'
                    : 'text-secondary-600 hover:text-secondary-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingCycle === 'yearly'
                    ? 'bg-primary-600 text-white'
                    : 'text-secondary-600 hover:text-secondary-900'
                }`}
              >
                Yearly
                <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-success-100 text-success-800">
                  Save 17%
                </span>
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {Object.values(plans).map((plan) => (
              <div
                key={plan.id}
                className={`card p-6 relative ${
                  selectedPlanId === plan.id ? 'ring-2 ring-primary-500' : ''
                } ${
                  plan.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-600 text-white">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-secondary-900">
                      ${getCurrentPrice(plan)}
                    </span>
                    {plan.id !== 'free' && (
                      <span className="text-secondary-600">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    )}
                  </div>
                  {billingCycle === 'yearly' && plan.id !== 'free' && (
                    <p className="text-sm text-secondary-600">
                      ${getMonthlyEquivalent(plan)}/month billed annually
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={selectedPlanId === plan.id ? 'primary' : 'outline'}
                  className="w-full"
                  onClick={() => handlePlanSelection(plan.id)}
                >
                  {plan.id === 'free' ? 'Current Plan' : selectedPlanId === plan.id ? 'Selected' : 'Select Plan'}
                </Button>
              </div>
            ))}
          </div>

          {/* Selected Plan Summary */}
          {selectedPlanId !== 'free' && (
            <div className="card p-6 mb-8">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Order Summary</h3>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="font-medium text-secondary-900">
                    {plans[selectedPlanId].name} Plan
                  </h4>
                  <p className="text-sm text-secondary-600">
                    {billingCycle === 'monthly' ? 'Monthly' : 'Annual'} subscription
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-secondary-900">
                    ${getCurrentPrice(plans[selectedPlanId])}
                  </p>
                  <p className="text-sm text-secondary-600">
                    {billingCycle === 'monthly' ? 'per month' : 'per year'}
                  </p>
                </div>
              </div>
              
              <div className="border-t border-secondary-200 pt-4">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleProceedToPayment}
                  disabled={loading}
                >
                  {loading ? (
                    <LoadingSpinner size="sm" />
                  ) : (
                    <>
                      Proceed to Payment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Features Comparison */}
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
              Why Choose Premium?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-medium text-secondary-900 mb-2">Detailed Analysis</h3>
                <p className="text-sm text-secondary-600">
                  Comprehensive case analysis with personalized recommendations
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-success-100 text-success-600 rounded-full mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-medium text-secondary-900 mb-2">Full Access</h3>
                <p className="text-sm text-secondary-600">
                  All legal education modules and resources
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-info-100 text-info-600 rounded-full mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-medium text-secondary-900 mb-2">Expert Support</h3>
                <p className="text-sm text-secondary-600">
                  Priority customer support and legal guidance
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-warning-100 text-warning-600 rounded-full mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-medium text-secondary-900 mb-2">Time Sensitive</h3>
                <p className="text-sm text-secondary-600">
                  Court date reminders and deadline tracking
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
              What Our Users Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-warning-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-secondary-600 italic">
                    "The premium assessment gave me exactly what I needed to understand my case. 
                    The defense strategies were spot-on and helped me prepare for court."
                  </p>
                </div>
                <div className="font-medium text-secondary-900">Sarah M.</div>
                <div className="text-sm text-secondary-600">Sydney, NSW</div>
              </div>

              <div className="text-center">
                <div className="mb-4">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-warning-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-secondary-600 italic">
                    "The legal modules were incredibly helpful. I felt much more confident 
                    going into my court hearing after completing the education program."
                  </p>
                </div>
                <div className="font-medium text-secondary-900">Michael R.</div>
                <div className="text-sm text-secondary-600">Newcastle, NSW</div>
              </div>
            </div>
          </div>

          {/* Security & Guarantee */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-success-600 mr-3" />
                <h3 className="font-bold text-secondary-900">Secure Payment</h3>
              </div>
              <p className="text-secondary-600 text-sm">
                Your payment information is encrypted and secure. We use industry-standard 
                security measures to protect your personal and financial data.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-primary-600 mr-3" />
                <h3 className="font-bold text-secondary-900">Money-Back Guarantee</h3>
              </div>
              <p className="text-secondary-600 text-sm">
                Not satisfied with your premium experience? Get a full refund within 
                30 days of purchase, no questions asked.
              </p>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center mt-12">
            <p className="text-secondary-600 mb-4">
              Have questions about our plans? Need help choosing the right option?
            </p>
            <Button variant="outline" className="inline-flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage; 