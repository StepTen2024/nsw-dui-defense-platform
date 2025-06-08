import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Share, 
  AlertCircle, 
  CheckCircle, 
  Calendar,
  DollarSign,
  Shield,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useAssessment } from '../context/AssessmentContext';
import Button from '../components/Common/Button';
import LoadingSpinner from '../components/Common/LoadingSpinner';

const ResultsPage = () => {
  const { assessmentId } = useParams();
  const { getAssessment } = useAssessment();
  const [loading] = useState(true);
  const [error] = useState(null);

  // In a real app, this would fetch the assessment data
  const assessment = getAssessment(assessmentId);

  // Mock data for demonstration if no assessment is found
  const mockResults = {
    riskLevel: 'Medium',
    penaltyEstimate: {
      fine: { min: 1100, max: 2200 },
      licenseSuspension: { min: 3, max: 6 },
      interlock: true,
      communityService: { min: 0, max: 100 },
      jailTime: { min: 0, max: 9 }
    },
    defenseStrategies: [
      {
        strategy: 'Challenge BAC Reading Accuracy',
        success: 'High',
        description: 'Question the calibration and maintenance of breathalyzer equipment used during your arrest.'
      },
      {
        strategy: 'Procedural Violations',
        success: 'Medium',
        description: 'Examine whether proper procedures were followed during the traffic stop and arrest.'
      },
      {
        strategy: 'Medical Condition Defense',
        success: 'Low',
        description: 'Explore whether medical conditions may have affected BAC readings or field sobriety tests.'
      }
    ],
    recommendations: [
      'Consult with an experienced DUI lawyer immediately',
      'Gather medical records if applicable',
      'Request police report and bodycam footage',
      'Consider character references for court',
      'Enroll in alcohol education program voluntarily'
    ]
  };

  const displayResults = assessment || mockResults;

  const handleDownloadReport = () => {
    // In a real app, this would download the PDF report
    alert('PDF report download functionality would be implemented here');
  };

  const handleShareResults = () => {
    // In a real app, this would share the results
    alert('Share functionality would be implemented here');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-error-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">Error Loading Results</h1>
          <p className="text-secondary-600 mb-6">{error}</p>
          <Button as={Link} to="/assessment">
            Start New Assessment
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="font-heading text-4xl font-bold text-secondary-900 mb-4">
              Assessment Results
            </h1>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Comprehensive analysis of your DUI case with penalty estimates and defense strategies.
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button onClick={handleDownloadReport} className="inline-flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download PDF Report
            </Button>
            <Button variant="outline" onClick={handleShareResults} className="inline-flex items-center">
              <Share className="w-4 h-4 mr-2" />
              Share Results
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Results */}
            <div className="lg:col-span-2 space-y-8">
              {/* Risk Assessment */}
              <div className="card p-6">
                <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-6">
                  Risk Assessment
                </h2>
                <div className="flex items-center mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    displayResults.riskLevel === 'High' ? 'bg-error-100 text-error-800' :
                    displayResults.riskLevel === 'Medium' ? 'bg-warning-100 text-warning-800' :
                    'bg-success-100 text-success-800'
                  }`}>
                    {displayResults.riskLevel} Risk
                  </div>
                </div>
                <p className="text-secondary-600">
                  Based on your case details, we've assessed your situation as {displayResults.riskLevel.toLowerCase()} risk. 
                  This assessment considers factors such as BAC level, prior offenses, and circumstances of the arrest.
                </p>
              </div>

              {/* Penalty Estimates */}
              <div className="card p-6">
                <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-6">
                  Penalty Estimates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-secondary-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-5 h-5 text-warning-600 mr-2" />
                      <h3 className="font-medium text-secondary-900">Fine</h3>
                    </div>
                    <p className="text-2xl font-bold text-secondary-900">
                      ${displayResults.penaltyEstimate.fine.min} - ${displayResults.penaltyEstimate.fine.max}
                    </p>
                  </div>

                  <div className="border border-secondary-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-error-600 mr-2" />
                      <h3 className="font-medium text-secondary-900">License Suspension</h3>
                    </div>
                    <p className="text-2xl font-bold text-secondary-900">
                      {displayResults.penaltyEstimate.licenseSuspension.min} - {displayResults.penaltyEstimate.licenseSuspension.max} months
                    </p>
                  </div>

                  <div className="border border-secondary-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Shield className="w-5 h-5 text-info-600 mr-2" />
                      <h3 className="font-medium text-secondary-900">Interlock Device</h3>
                    </div>
                    <p className="text-lg font-semibold text-secondary-900">
                      {displayResults.penaltyEstimate.interlock ? 'Required' : 'Not Required'}
                    </p>
                  </div>

                  <div className="border border-secondary-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-primary-600 mr-2" />
                      <h3 className="font-medium text-secondary-900">Community Service</h3>
                    </div>
                    <p className="text-lg font-semibold text-secondary-900">
                      {displayResults.penaltyEstimate.communityService.min} - {displayResults.penaltyEstimate.communityService.max} hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Defense Strategies */}
              <div className="card p-6">
                <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-6">
                  Recommended Defense Strategies
                </h2>
                <div className="space-y-4">
                  {displayResults.defenseStrategies.map((strategy, index) => (
                    <div key={index} className="border border-secondary-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-secondary-900">{strategy.strategy}</h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                          strategy.success === 'High' ? 'bg-success-100 text-success-800' :
                          strategy.success === 'Medium' ? 'bg-warning-100 text-warning-800' :
                          'bg-error-100 text-error-800'
                        }`}>
                          {strategy.success} Success Rate
                        </span>
                      </div>
                      <p className="text-secondary-600 text-sm">{strategy.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Next Steps */}
              <div className="card p-6">
                <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-4">
                  Next Steps
                </h2>
                <div className="space-y-3">
                  {displayResults.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-secondary-600">{recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get Professional Help */}
              <div className="card p-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <h2 className="text-xl font-bold mb-4">Need Legal Representation?</h2>
                <p className="text-primary-100 mb-4 text-sm">
                  Connect with experienced DUI lawyers in NSW who can review your case and provide personalized advice.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Find a Lawyer
                </Button>
              </div>

              {/* Continue Learning */}
              <div className="card p-6">
                <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-4">
                  Continue Learning
                </h2>
                <p className="text-secondary-600 text-sm mb-4">
                  Enhance your understanding with our legal education modules.
                </p>
                <Button 
                  as={Link} 
                  to="/modules" 
                  variant="outline" 
                  size="sm" 
                  className="w-full inline-flex items-center justify-center"
                >
                  View Modules
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Premium Upgrade */}
              <div className="card p-6">
                <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-4">
                  Get More Insights
                </h2>
                <p className="text-secondary-600 text-sm mb-4">
                  Upgrade to Premium for detailed case analysis, additional defense strategies, and lawyer consultations.
                </p>
                <Button 
                  as={Link} 
                  to="/payment" 
                  size="sm" 
                  className="w-full"
                >
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-12 p-6 bg-warning-50 border border-warning-200 rounded-lg">
            <h3 className="font-medium text-warning-900 mb-2">Important Legal Disclaimer</h3>
            <p className="text-sm text-warning-800">
              These results are estimates based on general NSW law and your provided information. 
              Actual penalties may vary based on specific circumstances, court decisions, and legal precedents. 
              This assessment does not constitute legal advice. Always consult with a qualified DUI lawyer 
              for advice specific to your situation before making any legal decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage; 