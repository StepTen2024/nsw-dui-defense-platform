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

// SEO Content Pages
import DUIChargesAustralia from './pages/DUIChargesAustralia';
import DUIChargesNSW from './pages/DUIChargesNSW';
import DUIChargesVictoria from './pages/DUIChargesVictoria';

// Blog Posts
import FirstTimeDUIOffenceAustralia from './pages/blog/FirstTimeDUIOffenceAustralia';
import CanPoliceStopYouRandomly from './pages/blog/CanPoliceStopYouRandomly';

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
                      
                      {/* Main SEO Pillar Pages */}
                      <Route 
                        path="/dui-charges-australia" 
                        element={
                          <React.Suspense fallback={<LoadingSpinner />}>
                            <DUIChargesAustralia />
                          </React.Suspense>
                        } 
                      />
                      
                      {/* State-Specific Pages */}
                      <Route 
                        path="/dui-charges-nsw" 
                        element={
                          <React.Suspense fallback={<LoadingSpinner />}>
                            <DUIChargesNSW />
                          </React.Suspense>
                        } 
                      />
                      
                      <Route 
                        path="/dui-charges-victoria" 
                        element={
                          <React.Suspense fallback={<LoadingSpinner />}>
                            <DUIChargesVictoria />
                          </React.Suspense>
                        } 
                      />
                      
                      {/* Blog Posts */}
                      <Route 
                        path="/first-time-dui-offence-australia" 
                        element={
                          <React.Suspense fallback={<LoadingSpinner />}>
                            <FirstTimeDUIOffenceAustralia />
                          </React.Suspense>
                        } 
                      />
                      
                      <Route 
                        path="/can-police-stop-you-randomly-australia" 
                        element={
                          <React.Suspense fallback={<LoadingSpinner />}>
                            <CanPoliceStopYouRandomly />
                          </React.Suspense>
                        } 
                      />
                      
                      {/* Application Pages */}
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
                  
                  {/* Footer with SEO Links */}
                  <footer className="bg-secondary-900 text-white py-12 mt-auto">
                    <div className="container-custom">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-4">
                            DUI Defence AI
                          </h3>
                          <p className="text-secondary-300 text-sm">
                            AI-powered legal defence for DUI charges across Australia. 
                            Expert analysis and defence strategies at affordable prices.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium mb-4">DUI Information</h4>
                          <ul className="space-y-2 text-sm text-secondary-300">
                            <li>
                              <a href="/dui-charges-australia" className="hover:text-white transition-colors">
                                DUI Charges Australia
                              </a>
                            </li>
                            <li>
                              <a href="/dui-charges-nsw" className="hover:text-white transition-colors">
                                DUI Charges NSW
                              </a>
                            </li>
                            <li>
                              <a href="/dui-charges-victoria" className="hover:text-white transition-colors">
                                DUI Charges Victoria
                              </a>
                            </li>
                            <li>
                              <a href="/first-time-dui-offence-australia" className="hover:text-white transition-colors">
                                First Time Offence
                              </a>
                            </li>
                            <li>
                              <a href="/can-police-stop-you-randomly-australia" className="hover:text-white transition-colors">
                                Police Random Stops
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-4">Services</h4>
                          <ul className="space-y-2 text-sm text-secondary-300">
                            <li>
                              <a href="/assessment" className="hover:text-white transition-colors">
                                Case Assessment
                              </a>
                            </li>
                            <li>
                              <a href="/modules" className="hover:text-white transition-colors">
                                Legal Modules
                              </a>
                            </li>
                            <li>
                              <a href="/pricing" className="hover:text-white transition-colors">
                                Pricing
                              </a>
                            </li>
                            <li>
                              <a href="/vs-traditional-lawyers" className="hover:text-white transition-colors">
                                vs Traditional Lawyers
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-4">Support</h4>
                          <ul className="space-y-2 text-sm text-secondary-300">
                            <li>
                              <a href="/contact" className="hover:text-white transition-colors">
                                Contact Us
                              </a>
                            </li>
                            <li>
                              <a href="/faq" className="hover:text-white transition-colors">
                                FAQ
                              </a>
                            </li>
                            <li>
                              <a href="/help" className="hover:text-white transition-colors">
                                Help Center
                              </a>
                            </li>
                            <li>
                              <a href="/legal" className="hover:text-white transition-colors">
                                Legal Information
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-sm text-secondary-400">
                        <p>
                          © 2024 DUI Defence AI. All rights reserved.
                        </p>
                        <p className="mt-2">
                          <strong>Disclaimer:</strong> This platform provides legal information, not legal advice. 
                          Consult with qualified legal professionals for specific legal matters.
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