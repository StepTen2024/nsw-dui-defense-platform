import React from 'react';
import { BookOpen, Clock, CheckCircle, Lock } from 'lucide-react';
import Button from '../components/Common/Button';

const ModulesPage = () => {
  const modules = [
    {
      id: 1,
      title: 'Understanding DUI Charges in NSW',
      description: 'Learn about different types of DUI charges, blood alcohol limits, and the legal process.',
      duration: '15 minutes',
      completed: true,
      free: true
    },
    {
      id: 2,
      title: 'Your Rights During a Traffic Stop',
      description: 'Know your legal rights when pulled over by police and how to handle field sobriety tests.',
      duration: '12 minutes',
      completed: false,
      free: true
    },
    {
      id: 3,
      title: 'Court Procedures and What to Expect',
      description: 'Navigate the court system with confidence. Learn about hearings, pleas, and representation.',
      duration: '20 minutes',
      completed: false,
      free: false
    },
    {
      id: 4,
      title: 'Building Your Defense Strategy',
      description: 'Explore common defense strategies and how to work effectively with your legal counsel.',
      duration: '25 minutes',
      completed: false,
      free: false
    },
    {
      id: 5,
      title: 'License Suspension and Reinstatement',
      description: 'Understand the license suspension process and steps to get your driving privileges back.',
      duration: '18 minutes',
      completed: false,
      free: false
    },
    {
      id: 6,
      title: 'Managing the Financial Impact',
      description: 'Learn about fines, court costs, insurance implications, and financial planning strategies.',
      duration: '16 minutes',
      completed: false,
      free: false
    }
  ];

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-secondary-900 mb-4">
              Legal Education Modules
            </h1>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Comprehensive legal education designed to help you understand your DUI case, 
              navigate the legal system, and make informed decisions about your defense.
            </p>
          </div>

          {/* Progress Overview */}
          <div className="card p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-xl font-semibold text-secondary-900">
                Your Progress
              </h2>
              <span className="text-sm text-secondary-600">1 of 6 completed</span>
            </div>
            <div className="w-full bg-secondary-200 rounded-full h-2">
              <div className="bg-primary-600 h-2 rounded-full" style={{width: '16.67%'}}></div>
            </div>
            <p className="text-sm text-secondary-600 mt-2">
              Keep learning to improve your case understanding and defense preparation.
            </p>
          </div>

          {/* Module List */}
          <div className="space-y-6">
            {modules.map((module) => (
              <div key={module.id} className="card p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="font-heading text-lg font-semibold text-secondary-900 mr-3">
                        {module.title}
                      </h3>
                      {module.completed ? (
                        <CheckCircle className="w-5 h-5 text-success-500" />
                      ) : !module.free ? (
                        <Lock className="w-4 h-4 text-warning-500" />
                      ) : null}
                    </div>
                    
                    <p className="text-secondary-600 mb-4 pr-4">
                      {module.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-secondary-500 mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{module.duration}</span>
                      {module.free && (
                        <span className="ml-4 inline-flex items-center px-2 py-1 text-xs font-medium bg-success-100 text-success-800 rounded">
                          Free
                        </span>
                      )}
                      {!module.free && (
                        <span className="ml-4 inline-flex items-center px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded">
                          Premium
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    {module.completed ? (
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
                    ) : module.free ? (
                      <Button size="sm">
                        Start Module
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled>
                        Unlock Premium
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium CTA */}
          <div className="card p-8 mt-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                Unlock All Modules with Premium Access
              </h2>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Get comprehensive legal education, advanced assessment features, 
                and personalized defense strategies to maximize your chances of a favorable outcome.
              </p>
              <Button variant="secondary" size="lg">
                Upgrade to Premium
              </Button>
            </div>
          </div>

          {/* Learning Tips */}
          <div className="mt-12 p-6 bg-info-50 border border-info-200 rounded-lg">
            <h3 className="font-medium text-info-900 mb-2">Learning Tips</h3>
            <ul className="text-sm text-info-800 space-y-1">
              <li>• Take notes while watching modules - you'll receive a downloadable summary</li>
              <li>• Complete modules in order for the best learning experience</li>
              <li>• Review completed modules before your court date</li>
              <li>• Share key insights with your legal counsel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulesPage; 