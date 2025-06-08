import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Scale, AlertTriangle, CheckCircle, 
  Clock, DollarSign, Car, Phone, MapPin, Book, FileText,
  Award
} from 'lucide-react';
import Button from '../components/Common/Button';

const DUIChargesACT = () => {
  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm mb-6">
              <Link to="/" className="text-primary-200 hover:text-white">Home</Link>
              <span className="mx-2 text-primary-300">/</span>
              <Link to="/dui-charges-australia" className="text-primary-200 hover:text-white">DUI Charges Australia</Link>
              <span className="mx-2 text-primary-300">/</span>
              <span className="text-primary-100">ACT</span>
            </nav>
            
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 mr-3 text-primary-200" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                DUI Charges in ACT
              </h1>
            </div>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              Complete guide to drink driving charges, penalties, and legal processes in the Australian Capital Territory. 
              Understand your rights and defense options under ACT traffic law.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/assessment">
                <Button variant="light" size="lg" className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Get Case Assessment
                </Button>
              </Link>
              <Button variant="outline-light" size="lg" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Legal Help
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">0.05</h3>
              <p className="text-secondary-600">Legal BAC Limit</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">$300+</h3>
              <p className="text-secondary-600">Minimum Fine</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Car className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">60 months</h3>
              <p className="text-secondary-600">Max License Loss</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="font-heading font-bold text-2xl text-secondary-900 mb-2">12 months</h3>
              <p className="text-secondary-600">Max Prison Term</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <Award className="w-16 h-16 mx-auto mb-6 text-primary-200" />
              <h2 className="font-heading font-bold text-3xl mb-4">
                Expert ACT DUI Defense
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Don't face ACT DUI charges alone. Get expert legal analysis 
                and personalized defense strategies from our AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/assessment">
                  <Button variant="light" size="lg" className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Start Free Case Assessment
                  </Button>
                </Link>
                <Link to="/dui-charges-australia">
                  <Button variant="outline-light" size="lg" className="flex items-center">
                    <Book className="w-5 h-5 mr-2" />
                    Compare All States
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DUIChargesACT; 