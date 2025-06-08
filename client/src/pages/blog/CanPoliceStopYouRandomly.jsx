import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Shield, Users, CheckCircle, XCircle, Clock, MapPin, Scale, FileText } from 'lucide-react';
import Button from '../../components/Common/Button';

const CanPoliceStopYouRandomly = () => {
  const navigate = useNavigate();

  const randomStopPowers = [
    {
      state: "New South Wales",
      lawName: "Road Transport Act 2013",
      canStopRandomly: true,
      requires: "No suspicion required",
      restrictions: "For traffic offences, licence checks, RBT",
      notes: "Extensive powers under RBT operations"
    },
    {
      state: "Victoria",
      lawName: "Road Safety Act 1986",
      canStopRandomly: true,
      requires: "No suspicion required",
      restrictions: "For breath testing, licence checks",
      notes: "Booze bus operations common"
    },
    {
      state: "Queensland",
      lawName: "Transport Operations Act 1994",
      canStopRandomly: true,
      requires: "No suspicion required",
      restrictions: "RBT checkpoints, licence verification",
      notes: "Mobile RBT units patrol highways"
    },
    {
      state: "Western Australia",
      lawName: "Road Traffic Act 1974",
      canStopRandomly: true,
      requires: "No suspicion required",
      restrictions: "Breath testing, driving violations",
      notes: "Operation Drink Drive campaigns"
    },
    {
      state: "South Australia",
      lawName: "Road Traffic Act 1961",
      canStopRandomly: true,
      requires: "No suspicion required",
      restrictions: "RBT operations, licence checks",
      notes: "Alcotest units widely deployed"
    },
    {
      state: "Tasmania",
      lawName: "Vehicle and Traffic Act 1999",
      canStopRandomly: true,
      requires: "No suspicion required",
      restrictions: "Breath testing purposes",
      notes: "Limited by geography and resources"
    }
  ];

  const yourRights = [
    {
      right: "Remain Silent",
      description: "You have the right to remain silent beyond providing identification",
      important: true,
      caveat: "Must provide licence, registration, and insurance details"
    },
    {
      right: "Request Officer Details",
      description: "Ask for the officer's name, badge number, and station",
      important: false,
      caveat: "They must provide this information upon request"
    },
    {
      right: "Know Why You're Stopped",
      description: "Police must tell you the reason for the stop",
      important: true,
      caveat: "For RBT, the reason is breath testing"
    },
    {
      right: "Refuse Vehicle Search",
      description: "Generally refuse consent to search your vehicle",
      important: true,
      caveat: "Police can search if they have reasonable suspicion"
    },
    {
      right: "Contact a Lawyer",
      description: "Request to speak with a lawyer if arrested",
      important: true,
      caveat: "This right applies after arrest, not during traffic stops"
    },
    {
      right: "Record Interaction",
      description: "You can record your interaction with police",
      important: false,
      caveat: "Must not interfere with their duties"
    }
  ];

  const whatToExpect = [
    {
      step: 1,
      title: "Initial Stop",
      description: "Police signal you to pull over",
      whatToDo: "Pull over safely when safe to do so",
      timeExpected: "Immediate"
    },
    {
      step: 2,
      title: "Officer Approach",
      description: "Police officer approaches your vehicle",
      whatToDo: "Stay calm, keep hands visible, turn off engine",
      timeExpected: "30 seconds"
    },
    {
      step: 3,
      title: "Identification Request",
      description: "Officer asks for licence and registration",
      whatToDo: "Provide documents politely",
      timeExpected: "1-2 minutes"
    },
    {
      step: 4,
      title: "Breath Test",
      description: "Officer requests you to blow into breathalyzer",
      whatToDo: "Comply - refusal is an offence",
      timeExpected: "2-3 minutes"
    },
    {
      step: 5,
      title: "Result Processing",
      description: "Officer processes breath test results",
      whatToDo: "Wait patiently for results",
      timeExpected: "2-5 minutes"
    },
    {
      step: 6,
      title: "Outcome",
      description: "Either released or detained for further testing",
      whatToDo: "Follow officer's instructions",
      timeExpected: "Variable"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Refusing Breath Test",
      consequence: "Automatic offence - same penalty as high range DUI",
      solution: "Always comply with breath testing requests"
    },
    {
      mistake: "Being Argumentative",
      consequence: "May escalate situation, additional charges possible",
      solution: "Remain calm, polite, and cooperative"
    },
    {
      mistake: "Volunteering Information",
      consequence: "May incriminate yourself unnecessarily",
      solution: "Answer questions directly but don't elaborate"
    },
    {
      mistake: "Lying About Drinking",
      consequence: "Can be used against you in court",
      solution: "Exercise right to silence or be truthful"
    },
    {
      mistake: "Driving While Suspended",
      consequence: "Additional serious charges",
      solution: "Know your licence status before driving"
    },
    {
      mistake: "Having Open Alcohol",
      consequence: "Separate offence with fines and penalties",
      solution: "Never have open alcohol containers in vehicle"
    }
  ];

  const whenToCallLawyer = [
    {
      scenario: "Failed Breath Test",
      urgency: "Immediate",
      reason: "Need expert advice on defence options",
      timeframe: "Within 24 hours"
    },
    {
      scenario: "Arrested for DUI",
      urgency: "Immediate",
      reason: "Rights need protection, bail considerations",
      timeframe: "Before police interview"
    },
    {
      scenario: "Second Offence",
      urgency: "High",
      reason: "Penalties significantly increased",
      timeframe: "Within 48 hours"
    },
    {
      scenario: "Licence Suspended",
      urgency: "Medium",
      reason: "Appeal options available",
      timeframe: "Within 28 days"
    },
    {
      scenario: "Work Licence Needed",
      urgency: "Medium",
      reason: "Special applications required",
      timeframe: "Before court date"
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
              DUI Information
            </button>
            <span>/</span>
            <span className="font-medium text-secondary-900">Police Random Stops</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Can Police Stop You Randomly in Australia?
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Understanding your rights, police powers, and what to expect during random breath testing stops
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-medium">Yes</span> - Police can stop you randomly
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-medium">RBT</span> - No suspicion required
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-medium">Know Your Rights</span> - Stay informed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8 border border-primary-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-4">
                    Short Answer: Yes, Police Can Stop You Randomly
                  </h2>
                  <p className="text-lg text-secondary-700 mb-4">
                    In all Australian states and territories, police have the power to randomly stop vehicles 
                    for breath testing (RBT) without needing reasonable suspicion. This is legal and widely practised 
                    as part of road safety enforcement.
                  </p>
                  <p className="text-secondary-600">
                    However, you have specific rights during these stops, and police must follow proper procedures. 
                    Understanding these can help protect you and ensure the interaction goes smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State Powers */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Police Powers by State
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">State/Territory</th>
                      <th className="px-6 py-4 text-left">Governing Law</th>
                      <th className="px-6 py-4 text-left">Random Stops</th>
                      <th className="px-6 py-4 text-left">Requirements</th>
                      <th className="px-6 py-4 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {randomStopPowers.map((power, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-primary-700">{power.state}</td>
                        <td className="px-6 py-4 text-sm">{power.lawName}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-success-500" />
                            <span className="text-success-600 font-medium">Yes</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm">{power.requires}</td>
                        <td className="px-6 py-4 text-sm text-secondary-600">{power.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Your Rights During a Random Stop
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {yourRights.map((right, index) => (
                <div key={index} className={`rounded-lg p-6 border-2 ${
                  right.important ? 'bg-primary-50 border-primary-200' : 'bg-secondary-50 border-secondary-200'
                }`}>
                  <div className="flex items-start space-x-3 mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      right.important ? 'bg-primary-100' : 'bg-secondary-100'
                    }`}>
                      <Shield className={`w-4 h-4 ${
                        right.important ? 'text-primary-600' : 'text-secondary-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{right.right}</h3>
                      <p className="text-secondary-600 text-sm mb-3">{right.description}</p>
                      <div className={`text-xs p-2 rounded ${
                        right.important ? 'bg-primary-100 text-primary-700' : 'bg-secondary-100 text-secondary-700'
                      }`}>
                        <span className="font-medium">Important:</span> {right.caveat}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              What to Expect During a Random Stop
            </h2>
            
            <div className="space-y-6">
              {whatToExpect.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 font-bold text-lg">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-secondary-500">
                          <Clock className="w-4 h-4" />
                          <span>{step.timeExpected}</span>
                        </div>
                      </div>
                      <p className="text-secondary-600 mb-3">{step.description}</p>
                      <div className="bg-success-50 border border-success-200 rounded-lg p-3">
                        <p className="text-success-700 text-sm">
                          <span className="font-medium">What to do:</span> {step.whatToDo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Common Mistakes to Avoid
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="bg-gradient-to-br from-error-50 to-warning-50 rounded-lg p-6 border border-error-200">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-8 h-8 bg-error-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-4 h-4 text-error-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2 text-error-700">{mistake.mistake}</h3>
                      <p className="text-error-600 text-sm mb-3">
                        <span className="font-medium">Consequence:</span> {mistake.consequence}
                      </p>
                      <div className="bg-success-50 border border-success-200 rounded-lg p-3">
                        <p className="text-success-700 text-sm">
                          <span className="font-medium">Solution:</span> {mistake.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Call a Lawyer */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              When to Contact a Lawyer
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {whenToCallLawyer.map((scenario, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      scenario.urgency === 'Immediate' ? 'bg-error-100' :
                      scenario.urgency === 'High' ? 'bg-warning-100' : 'bg-primary-100'
                    }`}>
                      <Scale className={`w-4 h-4 ${
                        scenario.urgency === 'Immediate' ? 'text-error-600' :
                        scenario.urgency === 'High' ? 'text-warning-600' : 'text-primary-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">{scenario.scenario}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          scenario.urgency === 'Immediate' ? 'bg-error-100 text-error-700' :
                          scenario.urgency === 'High' ? 'bg-warning-100 text-warning-700' : 'bg-primary-100 text-primary-700'
                        }`}>
                          {scenario.urgency}
                        </span>
                      </div>
                      <p className="text-secondary-600 text-sm mb-3">{scenario.reason}</p>
                      <div className="bg-secondary-50 p-3 rounded-lg">
                        <p className="text-secondary-700 text-sm">
                          <span className="font-medium">Timeframe:</span> {scenario.timeframe}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Alternative */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Get Instant Expert Analysis
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Instead of waiting for a lawyer, get immediate AI-powered legal analysis of your situation. 
              Our platform provides expert guidance 24/7 at a fraction of traditional legal costs.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">24/7 Availability</h3>
                <p className="text-sm opacity-90">Get help anytime, day or night</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Instant Analysis</h3>
                <p className="text-sm opacity-90">Immediate case assessment</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Affordable</h3>
                <p className="text-sm opacity-90">90% less than traditional lawyers</p>
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
                <h3 className="font-semibold text-lg mb-3">DUI Charges Australia</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Complete guide to DUI charges, penalties, and defence options across Australia.
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
              
              <div className="bg-secondary-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">First Time DUI Offence</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Essential information for first-time DUI offenders in Australia.
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
              
              <div className="bg-secondary-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">DUI Charges NSW</h3>
                <p className="text-secondary-600 text-sm mb-4">
                  Specific information about DUI charges and penalties in New South Wales.
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

export default CanPoliceStopYouRandomly; 