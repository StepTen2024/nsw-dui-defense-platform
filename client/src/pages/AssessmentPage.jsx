import React from 'react';
import { FileText, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../components/Common/Button';

const AssessmentPage = () => {
  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-secondary-900 mb-4">
              DUI Case Assessment
            </h1>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Get a comprehensive analysis of your DUI case with our AI-powered assessment tool. 
              Answer detailed questions to receive personalized penalty calculations and defense strategies.
            </p>
          </div>

          {/* Assessment Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-2">
                Personal Information
              </h3>
              <p className="text-secondary-600 text-sm">
                Basic details about you and your driving history
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-2">
                Incident Details
              </h3>
              <p className="text-secondary-600 text-sm">
                Specific information about your DUI charge and circumstances
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-heading text-lg font-semibold text-secondary-900 mb-2">
                Analysis & Results
              </h3>
              <p className="text-secondary-600 text-sm">
                Receive detailed penalty calculations and defense recommendations
              </p>
            </div>
          </div>

          {/* What You'll Get */}
          <div className="card p-8 mb-8">
            <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-6">
              What You'll Receive
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-secondary-900 mb-1">Penalty Calculator</h4>
                  <p className="text-secondary-600 text-sm">
                    Accurate estimates of fines, license suspension, and potential jail time
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-secondary-900 mb-1">Defense Strategies</h4>
                  <p className="text-secondary-600 text-sm">
                    Tailored legal arguments and defense options for your specific case
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-secondary-900 mb-1">Court Preparation</h4>
                  <p className="text-secondary-600 text-sm">
                    Step-by-step guidance for your court appearance and legal proceedings
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-secondary-900 mb-1">PDF Report</h4>
                  <p className="text-secondary-600 text-sm">
                    Comprehensive assessment report you can share with your lawyer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Start Assessment */}
          <div className="text-center">
            <Button size="xl" className="inline-flex items-center">
              Start Your Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-secondary-600 mt-4">
              Free initial assessment • No credit card required • Takes 10-15 minutes
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-warning-50 border border-warning-200 rounded-lg">
            <p className="text-sm text-warning-800">
              <strong>Legal Disclaimer:</strong> This assessment provides legal information, not legal advice. 
              Results are estimates based on general NSW law and should not replace consultation with a qualified legal professional. 
              Always consult with an experienced DUI lawyer for advice specific to your situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage; 