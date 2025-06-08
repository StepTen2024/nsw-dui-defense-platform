import React from 'react';
import { useAssessment } from '../context/AssessmentContext';
import AssessmentForm from '../components/Assessment/AssessmentForm';
import LoadingSpinner from '../components/Common/LoadingSpinner';

const AssessmentPage = () => {
  const { loading } = useAssessment();

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-secondary-600">Processing your assessment...</p>
        </div>
      </div>
    );
  }

  return <AssessmentForm />;
};

export default AssessmentPage; 