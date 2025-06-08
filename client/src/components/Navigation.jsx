import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Scale, User, LogOut, Settings, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from './Common/Button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleAuth = () => {
    navigate('/auth');
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Assessment', href: '/assessment', icon: FileText },
    { name: 'Modules', href: '/modules', icon: Scale },
  ];

  const userNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-secondary-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Scale className="w-8 h-8" />
              <div className="hidden sm:block">
                <span className="font-heading font-bold text-xl">NSW DUI</span>
                <span className="font-heading font-medium text-secondary-600 ml-1">Navigator</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                {/* User Navigation */}
                {userNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                {/* User Menu */}
                <div className="flex items-center space-x-3">
                  <div className="text-sm">
                    <span className="text-secondary-600">Welcome,</span>
                    <span className="font-medium text-secondary-900 ml-1">
                      {user?.firstName || user?.email}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="flex items-center space-x-1"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" onClick={handleAuth}>
                  Login
                </Button>
                <Button variant="primary" size="sm" onClick={() => navigate('/assessment')}>
                  Start Assessment
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-secondary-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Main Navigation */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                  }`}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* Auth Section */}
              <div className="border-t border-secondary-200 pt-4 mt-4">
                {isAuthenticated ? (
                  <div className="space-y-1">
                    {/* User Navigation */}
                    {userNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center space-x-2 px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                    
                    {/* User Info */}
                    <div className="px-3 py-2">
                      <div className="text-sm text-secondary-600">
                        Welcome, <span className="font-medium text-secondary-900">
                          {user?.firstName || user?.email}
                        </span>
                      </div>
                    </div>
                    
                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50 rounded-lg transition-colors w-full text-left"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full justify-center"
                      onClick={handleAuth}
                    >
                      Login
                    </Button>
                    <Button 
                      variant="primary" 
                      className="w-full justify-center"
                      onClick={() => {
                        navigate('/assessment');
                        setIsMenuOpen(false);
                      }}
                    >
                      Start Assessment
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 