import React, { createContext, useContext, useReducer } from 'react';
import { assessmentService } from '../services/assessment';

const AssessmentContext = createContext();

// Assessment actions
const ASSESSMENT_ACTIONS = {
  START_ASSESSMENT: 'START_ASSESSMENT',
  SUBMIT_ASSESSMENT: 'SUBMIT_ASSESSMENT',
  ASSESSMENT_SUCCESS: 'ASSESSMENT_SUCCESS',
  ASSESSMENT_FAILURE: 'ASSESSMENT_FAILURE',
  UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
  SET_CURRENT_STEP: 'SET_CURRENT_STEP',
  RESET_ASSESSMENT: 'RESET_ASSESSMENT',
  CLEAR_ERROR: 'CLEAR_ERROR',
  NEXT_STEP: 'NEXT_STEP',
  PREVIOUS_STEP: 'PREVIOUS_STEP',
  SUBMIT_SUCCESS: 'SUBMIT_SUCCESS',
  SUBMIT_ERROR: 'SUBMIT_ERROR',
};

// Initial state
const initialState = {
  currentStep: 1,
  totalSteps: 5,
  formData: {
    personalInfo: {},
    incidentDetails: {},
    circumstances: {},
    priorOffenses: {},
    additionalInfo: {},
  },
  assessment: null,
  results: null,
  loading: false,
  error: null,
  isComplete: false,
};

// Assessment reducer
function assessmentReducer(state, action) {
  switch (action.type) {
    case ASSESSMENT_ACTIONS.START_ASSESSMENT:
    case ASSESSMENT_ACTIONS.SUBMIT_ASSESSMENT:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ASSESSMENT_ACTIONS.ASSESSMENT_SUCCESS:
      return {
        ...state,
        assessment: action.payload.assessment,
        results: action.payload.results,
        loading: false,
        error: null,
        isComplete: true,
      };

    case ASSESSMENT_ACTIONS.ASSESSMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ASSESSMENT_ACTIONS.UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.section]: {
            ...state.formData[action.payload.section],
            ...action.payload.data,
          },
        },
      };

    case ASSESSMENT_ACTIONS.SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };

    case ASSESSMENT_ACTIONS.RESET_ASSESSMENT:
      return initialState;

    case ASSESSMENT_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case ASSESSMENT_ACTIONS.NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };

    case ASSESSMENT_ACTIONS.PREVIOUS_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };

    case ASSESSMENT_ACTIONS.SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        results: action.payload,
      };

    case ASSESSMENT_ACTIONS.SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

// Assessment provider component
export const AssessmentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(assessmentReducer, initialState);

  const updateFormData = (section, data) => {
    dispatch({
      type: ASSESSMENT_ACTIONS.UPDATE_FORM_DATA,
      payload: { section, data }
    });
  };

  const nextStep = () => {
    dispatch({ type: ASSESSMENT_ACTIONS.NEXT_STEP });
  };

  const previousStep = () => {
    dispatch({ type: ASSESSMENT_ACTIONS.PREVIOUS_STEP });
  };

  const clearError = () => {
    dispatch({ type: ASSESSMENT_ACTIONS.CLEAR_ERROR });
  };

  const startAssessment = () => {
    dispatch({ type: ASSESSMENT_ACTIONS.START_ASSESSMENT });
  };

  const submitAssessment = async () => {
    dispatch({ type: ASSESSMENT_ACTIONS.SUBMIT_ASSESSMENT });

    try {
      const result = await assessmentService.submitAssessment(state.formData);
      
      dispatch({ 
        type: ASSESSMENT_ACTIONS.SUBMIT_SUCCESS, 
        payload: result 
      });
      
      return { success: true, data: result };
    } catch (error) {
      dispatch({ 
        type: ASSESSMENT_ACTIONS.SUBMIT_ERROR, 
        payload: error.message 
      });
      
      return { success: false, error: error.message };
    }
  };

  // Get assessment by ID
  const getAssessment = async (assessmentId) => {
    try {
      dispatch({ type: ASSESSMENT_ACTIONS.START_ASSESSMENT });
      
      const response = await assessmentService.getAssessment(assessmentId);
      
      dispatch({
        type: ASSESSMENT_ACTIONS.ASSESSMENT_SUCCESS,
        payload: response,
      });
      
      return { success: true, data: response };
    } catch (error) {
      dispatch({
        type: ASSESSMENT_ACTIONS.ASSESSMENT_FAILURE,
        payload: error.message,
      });
      return { success: false, error: error.message };
    }
  };

  // Reset assessment
  const resetAssessment = () => {
    dispatch({ type: ASSESSMENT_ACTIONS.RESET_ASSESSMENT });
  };

  // Validation helpers
  const isStepValid = (step) => {
    const stepData = Object.values(state.formData)[step - 1];
    return stepData && Object.keys(stepData).length > 0;
  };

  const canProceedToNextStep = () => {
    return isStepValid(state.currentStep);
  };

  const value = {
    ...state,
    updateFormData,
    nextStep,
    previousStep,
    clearError,
    startAssessment,
    submitAssessment,
    getAssessment,
    resetAssessment,
    isStepValid,
    canProceedToNextStep,
  };

  return (
    <AssessmentContext.Provider value={value}>
      {children}
    </AssessmentContext.Provider>
  );
};

// Custom hook to use assessment context
export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (!context) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
} 