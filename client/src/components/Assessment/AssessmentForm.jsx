import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { useAssessment } from '../../context/AssessmentContext';
import Button from '../Common/Button';
import LoadingSpinner from '../Common/LoadingSpinner';

const AssessmentForm = () => {
  const navigate = useNavigate();
  const { 
    currentStep, 
    formData, 
    updateFormData, 
    nextStep, 
    previousStep, 
    submitAssessment, 
    loading, 
    error,
    clearError 
  } = useAssessment();

  const [localError, setLocalError] = useState('');

  const handleNext = () => {
    setLocalError('');
    clearError();
    
    // Validate current step
    if (!validateCurrentStep()) {
      setLocalError('Please fill in all required fields before continuing.');
      return;
    }
    
    if (currentStep < 5) {
      nextStep();
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    setLocalError('');
    clearError();
    previousStep();
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return formData.personalInfo?.firstName && 
               formData.personalInfo?.email && 
               formData.personalInfo?.licenseType;
      case 2:
        return formData.incidentDetails?.bacLevel && 
               formData.incidentDetails?.arrestDate && 
               formData.incidentDetails?.location;
      case 3:
        return formData.circumstances?.reason && 
               formData.circumstances?.timeOfDay;
      case 4:
        return formData.priorOffenses?.count !== undefined;
      case 5:
        return true; // Additional info is optional
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    try {
      setLocalError('');
      const result = await submitAssessment();
      
      if (result.success) {
        navigate(`/results/${result.data.assessment.id}`);
      } else {
        setLocalError(result.error || 'Failed to submit assessment');
      }
    } catch (error) {
      setLocalError(error.message || 'Failed to submit assessment');
    }
  };

  const updateCurrentSection = (data) => {
    const sections = ['personalInfo', 'incidentDetails', 'circumstances', 'priorOffenses', 'additionalInfo'];
    const currentSection = sections[currentStep - 1];
    updateFormData(currentSection, data);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep formData={formData.personalInfo} updateData={updateCurrentSection} />;
      case 2:
        return <IncidentDetailsStep formData={formData.incidentDetails} updateData={updateCurrentSection} />;
      case 3:
        return <CircumstancesStep formData={formData.circumstances} updateData={updateCurrentSection} />;
      case 4:
        return <PriorOffensesStep formData={formData.priorOffenses} updateData={updateCurrentSection} />;
      case 5:
        return <AdditionalInfoStep formData={formData.additionalInfo} updateData={updateCurrentSection} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="font-heading text-3xl font-bold text-secondary-900">
                DUI Case Assessment
              </h1>
              <span className="text-sm text-secondary-600">
                Step {currentStep} of 5
              </span>
            </div>
            <div className="w-full bg-secondary-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Form Content */}
          <div className="card p-8">
            {renderStep()}

            {/* Error Display */}
            {(error || localError) && (
              <div className="mt-6 p-4 bg-error-50 border border-error-200 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-error-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-error-800 font-medium">Error</p>
                  <p className="text-error-700 text-sm">{error || localError}</p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentStep === 1 || loading}
                className="flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button 
                onClick={handleNext}
                disabled={loading}
                className="flex items-center"
              >
                {loading ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <>
                    {currentStep === 5 ? 'Analyze Case' : 'Next'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Step 1: Personal Information
const PersonalInfoStep = ({ formData = {}, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...formData, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-2">
          Personal Information
        </h2>
        <p className="text-secondary-600">
          Let's start with some basic information about you and your driving history.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            value={formData.firstName || ''}
            onChange={(e) => handleChange('firstName', e.target.value)}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Enter your first name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            value={formData.lastName || ''}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Enter your last name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Age
          </label>
          <input
            type="number"
            value={formData.age || ''}
            onChange={(e) => handleChange('age', e.target.value)}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Enter your age"
            min="18"
            max="100"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            License Type *
          </label>
          <select
            value={formData.licenseType || ''}
            onChange={(e) => handleChange('licenseType', e.target.value)}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select your license type</option>
            <option value="learner">Learner's Permit</option>
            <option value="provisional">Provisional License</option>
            <option value="full">Full License</option>
            <option value="international">International License</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Step 2: Incident Details
const IncidentDetailsStep = ({ formData = {}, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...formData, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-2">
          Incident Details
        </h2>
        <p className="text-secondary-600">
          Please provide specific details about your DUI charge and arrest.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            BAC Level *
          </label>
          <input
            type="number"
            step="0.001"
            value={formData.bacLevel || ''}
            onChange={(e) => handleChange('bacLevel', e.target.value)}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="e.g., 0.08"
            min="0"
            max="1"
          />
          <p className="text-xs text-secondary-500 mt-1">Enter as decimal (e.g., 0.08 for 0.08%)</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Arrest Date *
          </label>
          <input
            type="date"
            value={formData.arrestDate || ''}
            onChange={(e) => handleChange('arrestDate', e.target.value)}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Location of Arrest *
          </label>
          <input
            type="text"
            value={formData.location || ''}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="City, NSW"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Test Type
          </label>
          <select
            value={formData.testType || ''}
            onChange={(e) => handleChange('testType', e.target.value)}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select test type</option>
            <option value="breathalyzer">Breathalyzer</option>
            <option value="blood">Blood Test</option>
            <option value="urine">Urine Test</option>
            <option value="refused">Refused Testing</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Court Date
          </label>
          <input
            type="date"
            value={formData.courtDate || ''}
            onChange={(e) => handleChange('courtDate', e.target.value)}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
    </div>
  );
};

// Step 3: Circumstances
const CircumstancesStep = ({ formData = {}, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...formData, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-2">
          Circumstances
        </h2>
        <p className="text-secondary-600">
          Help us understand the circumstances surrounding your arrest.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Reason for Traffic Stop *
          </label>
          <select
            value={formData.reason || ''}
            onChange={(e) => handleChange('reason', e.target.value)}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select reason</option>
            <option value="random-breath-test">Random Breath Test (RBT)</option>
            <option value="speeding">Speeding</option>
            <option value="accident">Traffic Accident</option>
            <option value="erratic-driving">Erratic Driving</option>
            <option value="checkpoint">License Check/Checkpoint</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Time of Day *
            </label>
            <select
              value={formData.timeOfDay || ''}
              onChange={(e) => handleChange('timeOfDay', e.target.value)}
              className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select time</option>
              <option value="morning">Morning (6 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
              <option value="evening">Evening (6 PM - 10 PM)</option>
              <option value="night">Night (10 PM - 6 AM)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Weather Conditions
            </label>
            <select
              value={formData.weather || ''}
              onChange={(e) => handleChange('weather', e.target.value)}
              className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select weather</option>
              <option value="clear">Clear</option>
              <option value="rain">Rain</option>
              <option value="fog">Fog</option>
              <option value="storm">Storm</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Additional Circumstances
          </label>
          <textarea
            value={formData.additionalCircumstances || ''}
            onChange={(e) => handleChange('additionalCircumstances', e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Describe any other relevant circumstances..."
          />
        </div>
      </div>
    </div>
  );
};

// Step 4: Prior Offenses
const PriorOffensesStep = ({ formData = {}, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...formData, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-2">
          Prior Offenses
        </h2>
        <p className="text-secondary-600">
          Information about any previous driving offenses helps us provide more accurate advice.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Number of Prior DUI Offenses *
          </label>
          <select
            value={formData.count || ''}
            onChange={(e) => handleChange('count', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Select number</option>
            <option value={0}>0 (First Time)</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value="4+">4 or more</option>
          </select>
        </div>

        {formData.count > 0 && (
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Most Recent Prior Offense
            </label>
            <input
              type="date"
              value={formData.mostRecentDate || ''}
              onChange={(e) => handleChange('mostRecentDate', e.target.value)}
              className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Other Traffic Offenses (Last 5 Years)
          </label>
          <div className="space-y-2">
            {['Speeding', 'Reckless Driving', 'License Suspension', 'Other'].map((offense) => (
              <label key={offense} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.otherOffenses?.includes(offense) || false}
                  onChange={(e) => {
                    const current = formData.otherOffenses || [];
                    const updated = e.target.checked
                      ? [...current, offense]
                      : current.filter(o => o !== offense);
                    handleChange('otherOffenses', updated);
                  }}
                  className="h-4 w-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-secondary-700">{offense}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Step 5: Additional Information
const AdditionalInfoStep = ({ formData = {}, updateData }) => {
  const handleChange = (field, value) => {
    updateData({ ...formData, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-semibold text-secondary-900 mb-2">
          Additional Information
        </h2>
        <p className="text-secondary-600">
          Any additional details that might be relevant to your case.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Medical Conditions
          </label>
          <textarea
            value={formData.medicalConditions || ''}
            onChange={(e) => handleChange('medicalConditions', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Any medical conditions that might affect BAC or field sobriety tests..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Medications
          </label>
          <textarea
            value={formData.medications || ''}
            onChange={(e) => handleChange('medications', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Any medications you were taking at the time..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-2">
            Additional Comments
          </label>
          <textarea
            value={formData.comments || ''}
            onChange={(e) => handleChange('comments', e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Any other relevant information about your case..."
          />
        </div>

        <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-primary-900 mb-1">Ready to Analyze</h4>
              <p className="text-primary-700 text-sm">
                Click "Analyze Case" to get your comprehensive DUI assessment with personalized 
                penalty calculations and defense strategies from our AI legal expert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentForm; 