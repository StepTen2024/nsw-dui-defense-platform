import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  AlertTriangle, 
  Shield, 
  FileText, 
  Calendar, 
  DollarSign, 
  Clock,
  Download,
  MessageCircle,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import { assessmentService } from '../services/assessment';
import Button from '../components/Common/Button';
import LoadingSpinner from '../components/Common/LoadingSpinner';

const ResultsPage = () => {
  const { assessmentId } = useParams();
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAssessment();
  }, [assessmentId]);

  const loadAssessment = async () => {
    try {
      setLoading(true);
      const result = await assessmentService.getAssessment(assessmentId);
      setAssessment(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getRiskLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'low': return 'text-success-600 bg-success-50 border-success-200';
      case 'medium': return 'text-warning-600 bg-warning-50 border-warning-200';
      case 'high': return 'text-error-600 bg-error-50 border-error-200';
      default: return 'text-secondary-600 bg-secondary-50 border-secondary-200';
    }
  };

  const getRiskIcon = (level) => {
    switch (level?.toLowerCase()) {
      case 'low': return <CheckCircle className="w-5 h-5" />;
      case 'medium': return <AlertCircle className="w-5 h-5" />;
      case 'high': return <AlertTriangle className="w-5 h-5" />;
      default: return <Info className="w-5 h-5" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-secondary-600">Loading your assessment results...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <AlertTriangle className="w-16 h-16 text-error-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">Assessment Not Found</h1>
          <p className="text-secondary-600 mb-6">{error}</p>
          <Button onClick={() => navigate('/assessment')}>
            Start New Assessment
          </Button>
        </div>
      </div>
    );
  }

  const analysis = assessment?.results?.analysis || assessment?.analysis;

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container-custom section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/assessment')}
              className="mb-4 flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Assessment
            </Button>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-bold text-secondary-900 mb-2">
                  DUI Case Analysis Results
                </h1>
                <p className="text-secondary-600">
                  Comprehensive assessment generated on {new Date(assessment?.timestamp || Date.now()).toLocaleDateString()}
                </p>
              </div>
              
              <div className="flex space-x-3">
                <Button variant="outline" className="flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with AI
                </Button>
              </div>
            </div>
          </div>

          {/* Risk Assessment */}
          {analysis?.riskAssessment && (
            <div className="card p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-xl font-semibold text-secondary-900">
                  Risk Assessment
                </h2>
                <div className={`flex items-center px-3 py-1 rounded-full border ${getRiskLevelColor(analysis.riskAssessment.level)}`}>
                  {getRiskIcon(analysis.riskAssessment.level)}
                  <span className="ml-2 font-medium capitalize">
                    {analysis.riskAssessment.level} Risk
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-secondary-900 mb-2">Risk Factors</h4>
                  <ul className="space-y-1">
                    {analysis.riskAssessment.factors?.map((factor, index) => (
                      <li key={index} className="text-secondary-700 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-secondary-900 mb-2">Risk Score</h4>
                  <div className="flex items-center">
                    <div className="flex-1 bg-secondary-200 rounded-full h-3 mr-3">
                      <div 
                        className={`h-3 rounded-full ${
                          analysis.riskAssessment.score >= 70 ? 'bg-error-500' :
                          analysis.riskAssessment.score >= 40 ? 'bg-warning-500' : 'bg-success-500'
                        }`}
                        style={{ width: `${Math.min(100, analysis.riskAssessment.score || 0)}%` }}
                      />
                    </div>
                    <span className="font-bold text-secondary-900">
                      {analysis.riskAssessment.score || 0}/100
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Likely Penalties */}
          {analysis?.likelyPenalties && (
            <div className="card p-6 mb-6">
              <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-primary-600" />
                Likely Penalties
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Fine */}
                <div className="bg-secondary-50 p-4 rounded-lg">
                  <h4 className="font-medium text-secondary-900 mb-2">Fine</h4>
                  <p className="text-2xl font-bold text-secondary-900">
                    ${analysis.likelyPenalties.fine?.min?.toLocaleString()} - ${analysis.likelyPenalties.fine?.max?.toLocaleString()}
                  </p>
                  <p className="text-sm text-secondary-600">AUD</p>
                </div>

                {/* License Suspension */}
                <div className="bg-secondary-50 p-4 rounded-lg">
                  <h4 className="font-medium text-secondary-900 mb-2">License Suspension</h4>
                  <p className="text-2xl font-bold text-secondary-900">
                    {analysis.likelyPenalties.licenseSuspension?.min} - {analysis.likelyPenalties.licenseSuspension?.max} months
                  </p>
                  <p className="text-sm text-secondary-600">Disqualification period</p>
                </div>

                {/* Interlock */}
                <div className="bg-secondary-50 p-4 rounded-lg">
                  <h4 className="font-medium text-secondary-900 mb-2">Interlock Device</h4>
                  <p className="text-2xl font-bold text-secondary-900">
                    {analysis.likelyPenalties.interlock?.required ? 'Required' : 'Not Required'}
                  </p>
                  {analysis.likelyPenalties.interlock?.duration && (
                    <p className="text-sm text-secondary-600">{analysis.likelyPenalties.interlock.duration}</p>
                  )}
                </div>

                {/* Imprisonment */}
                {analysis.likelyPenalties.imprisonment?.possible && (
                  <div className="bg-error-50 p-4 rounded-lg">
                    <h4 className="font-medium text-error-900 mb-2">Potential Imprisonment</h4>
                    <p className="text-lg font-bold text-error-900">
                      {analysis.likelyPenalties.imprisonment.duration}
                    </p>
                    <p className="text-sm text-error-600">Possible sentence</p>
                  </div>
                )}

                {/* Community Service */}
                {analysis.likelyPenalties.communityService?.hours && (
                  <div className="bg-secondary-50 p-4 rounded-lg">
                    <h4 className="font-medium text-secondary-900 mb-2">Community Service</h4>
                    <p className="text-2xl font-bold text-secondary-900">
                      {analysis.likelyPenalties.communityService.hours.min} - {analysis.likelyPenalties.communityService.hours.max} hours
                    </p>
                    <p className="text-sm text-secondary-600">Potential requirement</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Defense Opportunities */}
          {analysis?.defenseOpportunities && (
            <div className="card p-6 mb-6">
              <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary-600" />
                Defense Opportunities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysis.defenseOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-primary-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-700">{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommended Next Steps */}
          {analysis?.recommendedNextSteps && (
            <div className="card p-6 mb-6">
              <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary-600" />
                Recommended Next Steps
              </h2>
              
              <div className="space-y-3">
                {analysis.recommendedNextSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-secondary-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Court Preparation */}
          {analysis?.courtPreparation && (
            <div className="card p-6 mb-6">
              <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                Court Preparation
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-secondary-900 mb-2">Timeline</h4>
                  <p className="text-secondary-700">{analysis.courtPreparation.timeline}</p>
                  
                  <h4 className="font-medium text-secondary-900 mb-2 mt-4">What to Expect</h4>
                  <p className="text-secondary-700">{analysis.courtPreparation.expectations}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-secondary-900 mb-2">Required Documents</h4>
                  <ul className="space-y-1">
                    {analysis.courtPreparation.requiredDocuments?.map((doc, index) => (
                      <li key={index} className="text-secondary-700 text-sm flex items-start">
                        <FileText className="w-4 h-4 text-secondary-400 mt-0.5 mr-2 flex-shrink-0" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="card p-6 bg-warning-50 border-warning-200">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-warning-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-warning-900 mb-1">Important Legal Disclaimer</h4>
                <p className="text-warning-800 text-sm">
                  This assessment provides legal information, not legal advice. Results are estimates based on general NSW law 
                  and should not replace consultation with a qualified legal professional. Always consult with an experienced 
                  DUI lawyer for advice specific to your situation. {analysis?.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage; 