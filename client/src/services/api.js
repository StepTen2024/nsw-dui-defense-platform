const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.baseUrl = API_BASE_URL;
    this.token = localStorage.getItem('authToken');
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  }

  getAuthHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }
    
    return headers;
  }

  async makeRequest(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const config = {
      ...options,
      headers: {
        ...this.getAuthHeaders(),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        if (response.status === 401) {
          this.setToken(null);
          throw new Error('Unauthorized - Please log in again');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Authentication
  async login(email, password) {
    const response = await this.makeRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (response.success && response.token) {
      this.setToken(response.token);
    }
    
    return response;
  }

  async register(firstName, lastName, email, password) {
    const response = await this.makeRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    
    if (response.success && response.token) {
      this.setToken(response.token);
    }
    
    return response;
  }

  async logout() {
    this.setToken(null);
    return { success: true };
  }

  // Assessment
  async submitAssessment(assessmentData) {
    return await this.makeRequest('/assessment/submit', {
      method: 'POST',
      body: JSON.stringify(assessmentData),
    });
  }

  async getAssessment(assessmentId) {
    return await this.makeRequest(`/assessment/${assessmentId}`);
  }

  // Payment
  async createPaymentIntent(amount, description) {
    return await this.makeRequest('/payment/create-intent', {
      method: 'POST',
      body: JSON.stringify({ amount, description }),
    });
  }

  // Modules
  async getModules() {
    return await this.makeRequest('/modules');
  }

  async purchaseModule(moduleId) {
    return await this.makeRequest(`/modules/${moduleId}/purchase`, {
      method: 'POST',
    });
  }

  // User Dashboard
  async getDashboardData() {
    return await this.makeRequest('/user/dashboard');
  }

  // Health check
  async healthCheck() {
    return await this.makeRequest('/health');
  }
}

const apiService = new ApiService();
export default apiService; 