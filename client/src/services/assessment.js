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

export const assessmentService = {
  // Submit a new assessment
  submitAssessment: async (formData) => {
    try {
      const response = await api.post('/assessment/submit', formData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Assessment submission failed');
    }
  },

  // Get assessment by ID
  getAssessment: async (assessmentId) => {
    try {
      const response = await api.get(`/assessment/${assessmentId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get assessment');
    }
  },

  // Get user's assessments
  getUserAssessments: async () => {
    try {
      const response = await api.get('/assessment/user');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get assessments');
    }
  },

  // Calculate penalty estimate
  calculatePenalty: async (bacLevel, priorOffenses, additionalCharges) => {
    try {
      const response = await api.post('/assessment/calculate-penalty', {
        bacLevel,
        priorOffenses,
        additionalCharges,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Penalty calculation failed');
    }
  },

  // Get defense strategies
  getDefenseStrategies: async (assessmentId) => {
    try {
      const response = await api.get(`/assessment/${assessmentId}/strategies`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get defense strategies');
    }
  },

  // Generate assessment report
  generateReport: async (assessmentId, format = 'pdf') => {
    try {
      const response = await api.get(`/assessment/${assessmentId}/report`, {
        params: { format },
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Report generation failed');
    }
  },

  // Update assessment
  updateAssessment: async (assessmentId, updates) => {
    try {
      const response = await api.put(`/assessment/${assessmentId}`, updates);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Assessment update failed');
    }
  },

  // Delete assessment
  deleteAssessment: async (assessmentId) => {
    try {
      const response = await api.delete(`/assessment/${assessmentId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Assessment deletion failed');
    }
  },

  // Get assessment analytics
  getAnalytics: async (assessmentId) => {
    try {
      const response = await api.get(`/assessment/${assessmentId}/analytics`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get analytics');
    }
  },

  // Start quick assessment (anonymous)
  startQuickAssessment: async (basicData) => {
    try {
      const response = await api.post('/assessment/quick', basicData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Quick assessment failed');
    }
  },
};

export default assessmentService; 