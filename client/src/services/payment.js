import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const paymentService = {
  // Create payment intent
  createPaymentIntent: async (paymentData) => {
    try {
      const response = await api.post('/payment/create-intent', paymentData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Payment intent creation failed');
    }
  },

  // Confirm payment
  confirmPayment: async (confirmationData) => {
    try {
      const response = await api.post('/payment/confirm', confirmationData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Payment confirmation failed');
    }
  },

  // Get payment by ID
  getPayment: async (paymentId) => {
    try {
      const response = await api.get(`/payment/${paymentId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get payment');
    }
  },

  // Get user's payment history
  getPaymentHistory: async () => {
    try {
      const response = await api.get('/payment/history');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get payment history');
    }
  },

  // Process refund
  processRefund: async (refundData) => {
    try {
      const response = await api.post('/payment/refund', refundData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Refund processing failed');
    }
  },

  // Get available plans
  getPlans: async () => {
    try {
      const response = await api.get('/payment/plans');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get plans');
    }
  },

  // Update payment method
  updatePaymentMethod: async (paymentMethodData) => {
    try {
      const response = await api.put('/payment/payment-method', paymentMethodData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Payment method update failed');
    }
  },

  // Get payment methods
  getPaymentMethods: async () => {
    try {
      const response = await api.get('/payment/payment-methods');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get payment methods');
    }
  },

  // Delete payment method
  deletePaymentMethod: async (paymentMethodId) => {
    try {
      const response = await api.delete(`/payment/payment-method/${paymentMethodId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Payment method deletion failed');
    }
  },

  // Get subscription details
  getSubscription: async (subscriptionId) => {
    try {
      const response = await api.get(`/payment/subscription/${subscriptionId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get subscription');
    }
  },

  // Cancel subscription
  cancelSubscription: async (subscriptionId) => {
    try {
      const response = await api.post(`/payment/subscription/${subscriptionId}/cancel`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Subscription cancellation failed');
    }
  },

  // Get invoice
  getInvoice: async (invoiceId) => {
    try {
      const response = await api.get(`/payment/invoice/${invoiceId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get invoice');
    }
  },

  // Download invoice
  downloadInvoice: async (invoiceId) => {
    try {
      const response = await api.get(`/payment/invoice/${invoiceId}/download`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Invoice download failed');
    }
  },
};

export default paymentService; 