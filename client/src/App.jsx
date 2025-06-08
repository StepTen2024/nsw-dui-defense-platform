import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { AssessmentProvider } from './context/AssessmentContext';
import { PaymentProvider } from './context/PaymentContext';

// Pages
import LandingPage from './pages/LandingPage';
import AssessmentPage from './pages/AssessmentPage';
import ResultsPage from './pages/ResultsPage';
import ModulesPage from './pages/ModulesPage';
import PaymentPage from './pages/PaymentPage';
import DashboardPage from './pages/DashboardPage';

// Components
import Navigation from './components/Navigation';
import LoadingSpinner from './components/Common/LoadingSpinner';

// Styles
import './index.css';

// Initialize Stripe
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
  return (
    <div className="App min-h-screen bg-secondary-50">
      <Elements stripe={stripePromise}>
        <AuthProvider>
          <AssessmentProvider>
            <PaymentProvider>
              <Router>
                <div className="flex flex-col min-h-screen">
                  <Navigation />
                  <main className="flex-1">
                    <Routes>
                      <Route 
                        path="/" 
                        element={
                          <React.Suspense fallback={<LoadingSpinner />}>
                            <LandingPage />
                          </React.Suspense>
                        } 
                      />
                      <Route 
                        path="/assessment" 
                        element={
                          <React.Suspense fallback={<LoadingSpinner />}>
                            <AssessmentPage />
                          </React.Suspense>
                        } 
                      />
                      <Route 
                        path="/results/:assessmentId" 
                        element={
                          <React.Suspense fallback={<LoadingSpinner />}>
                            <ResultsPage />
                          </React.Suspense>
                        } 
                      />
                      <Route 
                        path="/modules" 
                        element={
                          <React.Suspense fallback={<LoadingSpinner />}>
                            <ModulesPage />
                          </React.Suspense>
                        } 
                      />
                      <Route 
                        path="/payment" 
                        element={
                          <React.Suspense fallback={<LoadingSpinner />}>
                            <PaymentPage />
                          </React.Suspense>
                        } 
                      />
                      <Route 
                        path="/dashboard" 
                        element={
                          <React.Suspense fallback={<LoadingSpinner />}>
                            <DashboardPage />
                          </React.Suspense>
                        } 
                      />
                    </Routes>
                  </main>
                  <footer className="bg-secondary-900 text-white py-12 mt-auto">
                    <div className="container-custom">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-4">
                            NSW DUI Defense Navigator
                          </h3>
                          <p className="text-secondary-300 text-sm">
                            AI-powered legal guidance for NSW DUI defendants. 
                            Get expert analysis and defense strategies.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-4">Services</h4>
                          <ul className="space-y-2 text-sm text-secondary-300">
                            <li>Case Assessment</li>
                            <li>Penalty Calculator</li>
                            <li>Defense Strategies</li>
                            <li>Legal Modules</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-4">Legal</h4>
                          <ul className="space-y-2 text-sm text-secondary-300">
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Disclaimers</li>
                            <li>Compliance</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-4">Support</h4>
                          <ul className="space-y-2 text-sm text-secondary-300">
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>Help Center</li>
                            <li>Documentation</li>
                          </ul>
                        </div>
                      </div>
                      <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-sm text-secondary-400">
                        <p>
                          © 2024 NSW DUI Defense Navigator. All rights reserved.
                        </p>
                        <p className="mt-2">
                          <strong>Disclaimer:</strong> This platform provides legal information, not legal advice. 
                          Consult with qualified NSW legal professionals for specific legal matters.
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
              </Router>
            </PaymentProvider>
          </AssessmentProvider>
        </AuthProvider>
      </Elements>
    </div>
  );
}

export default App; 