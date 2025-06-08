import axios from 'axios';
import { claudeAI } from './claudeAI';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

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
  // Submit a new assessment using Claude AI
  submitAssessment: async (formData) => {
    try {
      // Convert form data to assessment data format expected by Claude AI
      const assessmentData = {
        bacLevel: formData.incidentDetails?.bacLevel || formData.personalInfo?.bacLevel,
        priorOffenses: formData.priorOffenses?.count || 0,
        licenseType: formData.personalInfo?.licenseType || 'full',
        incidentDetails: formData.incidentDetails || {},
        circumstances: formData.circumstances || {},
        personalInfo: formData.personalInfo || {},
        additionalInfo: formData.additionalInfo || {}
      };

      // Use Claude AI to analyze the case
      const response = await claudeAI.generateAssessment(assessmentData);
      
      // Store assessment locally (in a real app, you'd save to database)
      const assessmentId = Date.now().toString();
      const assessmentRecord = {
        id: assessmentId,
        formData,
        assessmentData,
        analysis: response.analysis,
        fullResponse: response.fullResponse,
        createdAt: new Date().toISOString(),
        isComplete: true
      };
      
      // Save to localStorage for now
      const savedAssessments = JSON.parse(localStorage.getItem('assessments') || '[]');
      savedAssessments.push(assessmentRecord);
      localStorage.setItem('assessments', JSON.stringify(savedAssessments));

      return {
        assessment: assessmentRecord,
        results: response.analysis
      };
    } catch (error) {
      throw new Error(error.message || 'Assessment submission failed');
    }
  },

  // Get assessment by ID
  getAssessment: async (assessmentId) => {
    try {
      const savedAssessments = JSON.parse(localStorage.getItem('assessments') || '[]');
      const assessment = savedAssessments.find(a => a.id === assessmentId);
      
      if (!assessment) {
        throw new Error('Assessment not found');
      }
      
      return assessment;
    } catch (error) {
      throw new Error(error.message || 'Failed to get assessment');
    }
  },

  // Get user's assessments
  getUserAssessments: async () => {
    try {
      const savedAssessments = JSON.parse(localStorage.getItem('assessments') || '[]');
      return savedAssessments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } catch (error) {
      throw new Error(error.message || 'Failed to get assessments');
    }
  },

  // Calculate penalty estimate using Claude AI
  calculatePenalty: async (bacLevel, priorOffenses, additionalCharges) => {
    try {
      const assessmentData = {
        bacLevel,
        priorOffenses,
        additionalCharges
      };
      
      const response = await claudeAI.generateAssessment(assessmentData);
      return response.analysis;
    } catch (error) {
      throw new Error(error.message || 'Penalty calculation failed');
    }
  },

  // Get defense strategies using Claude AI
  getDefenseStrategies: async (assessmentData) => {
    try {
      const response = await claudeAI.generateDefenseStrategies(assessmentData);
      return response.strategies;
    } catch (error) {
      throw new Error(error.message || 'Failed to get defense strategies');
    }
  },

  // Generate assessment report
  generateReport: async (assessmentId, format = 'pdf') => {
    try {
      const assessment = await assessmentService.getAssessment(assessmentId);
      
      // Create a simple text report for now
      const reportContent = `
DUI Case Assessment Report

Assessment ID: ${assessment.id}
Date: ${new Date(assessment.createdAt).toLocaleDateString()}

Case Analysis:
${JSON.stringify(assessment.analysis, null, 2)}

Full AI Response:
${assessment.fullResponse}
      `;
      
      // Create blob for download
      const blob = new Blob([reportContent], { type: 'text/plain' });
      return blob;
    } catch (error) {
      throw new Error(error.message || 'Report generation failed');
    }
  },

  // Update assessment
  updateAssessment: async (assessmentId, updates) => {
    try {
      const savedAssessments = JSON.parse(localStorage.getItem('assessments') || '[]');
      const index = savedAssessments.findIndex(a => a.id === assessmentId);
      
      if (index === -1) {
        throw new Error('Assessment not found');
      }
      
      savedAssessments[index] = { ...savedAssessments[index], ...updates };
      localStorage.setItem('assessments', JSON.stringify(savedAssessments));
      
      return savedAssessments[index];
    } catch (error) {
      throw new Error(error.message || 'Assessment update failed');
    }
  },

  // Delete assessment
  deleteAssessment: async (assessmentId) => {
    try {
      const savedAssessments = JSON.parse(localStorage.getItem('assessments') || '[]');
      const filteredAssessments = savedAssessments.filter(a => a.id !== assessmentId);
      localStorage.setItem('assessments', JSON.stringify(filteredAssessments));
      
      return { success: true };
    } catch (error) {
      throw new Error(error.message || 'Assessment deletion failed');
    }
  },

  // Get assessment analytics
  getAnalytics: async (assessmentId) => {
    try {
      const assessment = await assessmentService.getAssessment(assessmentId);
      
      // Simple analytics based on the assessment
      const analytics = {
        riskLevel: assessment.analysis?.riskLevel || 'Unknown',
        recommendationsCount: assessment.analysis?.recommendations?.length || 0,
        strategiesCount: assessment.analysis?.defenseStrategies?.length || 0,
        completionDate: assessment.createdAt
      };
      
      return analytics;
    } catch (error) {
      throw new Error(error.message || 'Failed to get analytics');
    }
  },

  // Start quick assessment using Claude AI
  startQuickAssessment: async (basicData) => {
    try {
      const response = await claudeAI.generateAssessment(basicData);
      return response;
    } catch (error) {
      throw new Error(error.message || 'Quick assessment failed');
    }
  },
};

export default assessmentService; 