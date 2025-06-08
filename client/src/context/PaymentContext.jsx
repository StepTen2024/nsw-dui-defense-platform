import React, { createContext, useContext, useReducer } from 'react';
import { paymentService } from '../services/payment';

const PaymentContext = createContext();

// Payment actions
const PAYMENT_ACTIONS = {
  START_PAYMENT: 'START_PAYMENT',
  PAYMENT_SUCCESS: 'PAYMENT_SUCCESS',
  PAYMENT_FAILURE: 'PAYMENT_FAILURE',
  CREATE_PAYMENT_INTENT: 'CREATE_PAYMENT_INTENT',
  PAYMENT_INTENT_SUCCESS: 'PAYMENT_INTENT_SUCCESS',
  PAYMENT_INTENT_FAILURE: 'PAYMENT_INTENT_FAILURE',
  SET_SELECTED_PLAN: 'SET_SELECTED_PLAN',
  CLEAR_ERROR: 'CLEAR_ERROR',
  RESET_PAYMENT: 'RESET_PAYMENT',
};

// Initial state
const initialState = {
  selectedPlan: null,
  clientSecret: null,
  paymentIntent: null,
  payment: null,
  loading: false,
  processing: false,
  error: null,
  isComplete: false,
};

// Payment reducer
function paymentReducer(state, action) {
  switch (action.type) {
    case PAYMENT_ACTIONS.START_PAYMENT:
      return {
        ...state,
        processing: true,
        error: null,
      };

    case PAYMENT_ACTIONS.CREATE_PAYMENT_INTENT:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case PAYMENT_ACTIONS.PAYMENT_INTENT_SUCCESS:
      return {
        ...state,
        clientSecret: action.payload.clientSecret,
        paymentIntent: action.payload.paymentIntent,
        loading: false,
        error: null,
      };

    case PAYMENT_ACTIONS.PAYMENT_INTENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PAYMENT_ACTIONS.PAYMENT_SUCCESS:
      return {
        ...state,
        payment: action.payload,
        processing: false,
        error: null,
        isComplete: true,
      };

    case PAYMENT_ACTIONS.PAYMENT_FAILURE:
      return {
        ...state,
        processing: false,
        error: action.payload,
      };

    case PAYMENT_ACTIONS.SET_SELECTED_PLAN:
      return {
        ...state,
        selectedPlan: action.payload,
      };

    case PAYMENT_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case PAYMENT_ACTIONS.RESET_PAYMENT:
      return initialState;

    default:
      return state;
  }
}

// Payment provider component
export function PaymentProvider({ children }) {
  const [state, dispatch] = useReducer(paymentReducer, initialState);

  // Set selected plan
  const setSelectedPlan = (plan) => {
    dispatch({
      type: PAYMENT_ACTIONS.SET_SELECTED_PLAN,
      payload: plan,
    });
  };

  // Create payment intent
  const createPaymentIntent = async (planId, amount) => {
    try {
      dispatch({ type: PAYMENT_ACTIONS.CREATE_PAYMENT_INTENT });
      
      const response = await paymentService.createPaymentIntent({
        planId,
        amount: amount * 100, // Convert to cents
        currency: 'aud',
      });
      
      dispatch({
        type: PAYMENT_ACTIONS.PAYMENT_INTENT_SUCCESS,
        payload: response,
      });
      
      return { success: true, data: response };
    } catch (error) {
      dispatch({
        type: PAYMENT_ACTIONS.PAYMENT_INTENT_FAILURE,
        payload: error.message,
      });
      return { success: false, error: error.message };
    }
  };

  // Confirm payment
  const confirmPayment = async (paymentMethodId) => {
    try {
      dispatch({ type: PAYMENT_ACTIONS.START_PAYMENT });
      
      const response = await paymentService.confirmPayment({
        paymentIntentId: state.paymentIntent.id,
        paymentMethodId,
      });
      
      dispatch({
        type: PAYMENT_ACTIONS.PAYMENT_SUCCESS,
        payload: response,
      });
      
      return { success: true, data: response };
    } catch (error) {
      dispatch({
        type: PAYMENT_ACTIONS.PAYMENT_FAILURE,
        payload: error.message,
      });
      return { success: false, error: error.message };
    }
  };

  // Get payment history
  const getPaymentHistory = async () => {
    try {
      const response = await paymentService.getPaymentHistory();
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Get payment by ID
  const getPayment = async (paymentId) => {
    try {
      const response = await paymentService.getPayment(paymentId);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Process refund
  const processRefund = async (paymentId, amount, reason) => {
    try {
      const response = await paymentService.processRefund({
        paymentId,
        amount: amount * 100, // Convert to cents
        reason,
      });
      return { success: true, data: response };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: PAYMENT_ACTIONS.CLEAR_ERROR });
  };

  // Reset payment
  const resetPayment = () => {
    dispatch({ type: PAYMENT_ACTIONS.RESET_PAYMENT });
  };

  const value = {
    ...state,
    setSelectedPlan,
    createPaymentIntent,
    confirmPayment,
    getPaymentHistory,
    getPayment,
    processRefund,
    clearError,
    resetPayment,
  };

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
}

// Custom hook to use payment context
export function usePayment() {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
} 