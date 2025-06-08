import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

class ClaudeAIService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: `${API_BASE_URL}/ai`,
      timeout: 30000, // 30 seconds for AI requests
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.apiClient.interceptors.request.use(
      (config) => {
        console.log('AI Request:', config.method?.toUpperCase(), config.url);
        return config;
      },
      (error) => {
        console.error('AI Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.apiClient.interceptors.response.use(
      (response) => {
        console.log('AI Response:', response.status, response.config.url);
        return response;
      },
      (error) => {
        console.error('AI Response Error:', error.response?.status, error.response?.data);
        return Promise.reject(error);
      }
    );
  }

  // Analyze DUI case
  async generateAssessment(assessmentData) {
    try {
      const response = await this.apiClient.post('/analyze-case', {
        assessmentData
      });

      if (response.data.success) {
        return {
          success: true,
          analysis: response.data.analysis,
          fullResponse: response.data.fullResponse
        };
      } else {
        throw new Error(response.data.error || 'Analysis failed');
      }
    } catch (error) {
      console.error('Generate Assessment Error:', error);
      throw new Error(
        error.response?.data?.message || 
        error.message || 
        'Failed to generate AI assessment'
      );
    }
  }

  // Generate defense strategies
  async generateDefenseStrategies(caseDetails) {
    try {
      const response = await this.apiClient.post('/defense-strategies', {
        caseDetails
      });

      if (response.data.success) {
        return {
          success: true,
          strategies: response.data.strategies
        };
      } else {
        throw new Error(response.data.error || 'Strategy generation failed');
      }
    } catch (error) {
      console.error('Generate Defense Strategies Error:', error);
      throw new Error(
        error.response?.data?.message || 
        error.message || 
        'Failed to generate defense strategies'
      );
    }
  }

  // Generate court documents
  async generateCourtDocuments(caseDetails) {
    try {
      // For now, use defense strategies endpoint
      // You can create a separate endpoint later
      const response = await this.generateDefenseStrategies(caseDetails);
      return {
        success: true,
        documents: response.strategies
      };
    } catch (error) {
      console.error('Generate Court Documents Error:', error);
      throw new Error('Failed to generate court documents');
    }
  }

  // Get personalized recommendations
  async getRecommendations(assessmentData) {
    try {
      const response = await this.apiClient.post('/recommendations', {
        assessmentData
      });

      if (response.data.success) {
        return {
          success: true,
          recommendations: response.data.recommendations
        };
      } else {
        throw new Error(response.data.error || 'Recommendations failed');
      }
    } catch (error) {
      console.error('Get Recommendations Error:', error);
      throw new Error(
        error.response?.data?.message || 
        error.message || 
        'Failed to get recommendations'
      );
    }
  }

  // Chat with AI
  async chatWithAI(message, context = {}) {
    try {
      const response = await this.apiClient.post('/chat', {
        message,
        context
      });

      if (response.data.success) {
        return {
          success: true,
          response: response.data.response
        };
      } else {
        throw new Error(response.data.error || 'Chat failed');
      }
    } catch (error) {
      console.error('Chat with AI Error:', error);
      throw new Error(
        error.response?.data?.message || 
        error.message || 
        'Failed to chat with AI'
      );
    }
  }

  // Health check for AI service
  async checkAIStatus() {
    try {
      const response = await axios.get(`${API_BASE_URL}/health`);
      return response.data.ai_enabled || false;
    } catch (error) {
      console.error('AI Status Check Error:', error);
      return false;
    }
  }
}

export const claudeAI = new ClaudeAIService();
export default claudeAI; 