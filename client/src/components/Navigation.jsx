import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Scale, User, LogOut, Settings, FileText, ChevronDown, BookOpen, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Button from './Common/Button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { 
      name: 'DUI Charges', 
      icon: Scale,
      dropdown: [
        { name: 'DUI Charges Australia', href: '/dui-charges-australia', description: 'Complete guide to DUI charges across Australia' },
        { name: 'NSW DUI Charges', href: '/dui-charges-nsw', description: 'NSW-specific DUI charge information' },
        { name: 'Victoria DUI Charges', href: '/dui-charges-victoria', description: 'Victoria-specific DUI charge information' },
        { name: 'Queensland DUI Charges', href: '/dui-charges-queensland', description: 'Queensland-specific DUI charge information' },
        { name: 'Western Australia DUI Charges', href: '/dui-charges-western-australia', description: 'Western Australia-specific DUI charge information' },
        { name: 'South Australia DUI Charges', href: '/dui-charges-south-australia', description: 'South Australia-specific DUI charge information' },
        { name: 'Tasmania DUI Charges', href: '/dui-charges-tasmania', description: 'Tasmania-specific DUI charge information' },
        { name: 'ACT DUI Charges', href: '/dui-charges-act', description: 'Australian Capital Territory DUI charge information' },
        { name: 'Northern Territory DUI Charges', href: '/dui-charges-northern-territory', description: 'Northern Territory-specific DUI charge information' },
      ]
    },
    { name: 'Assessment', href: '/assessment', icon: FileText },
    {
      name: 'Blog',
      href: '/blog',
      icon: BookOpen,
      dropdown: [
        { name: 'First Time DUI Offence Australia', href: '/first-time-dui-offence-australia', description: 'What to expect for first-time offenders' },
        { name: 'Can Police Stop You Randomly?', href: '/can-police-stop-you-randomly-australia', description: 'Understanding random breath testing laws' },
      ]
    },
    { name: 'Modules', href: '/modules', icon: Users },
  ];

  const userNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: User },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isDropdownActive = (dropdownItems) => {
    return dropdownItems?.some(item => location.pathname === item.href);
  };

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    
    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeDropdown]);

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
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center">
                      {item.href ? (
                        <Link
                          to={item.href}
                          className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                            isActive(item.href) || isDropdownActive(item.dropdown)
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                          }`}
                        >
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <button
                          className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                            isDropdownActive(item.dropdown) || activeDropdown === item.name
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                          }`}
                        >
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.name}</span>
                        </button>
                      )}
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`p-1 ml-1 rounded transition-colors ${
                          activeDropdown === item.name
                            ? 'text-primary-600'
                            : 'text-secondary-600 hover:text-secondary-900'
                        }`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                    </div>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-secondary-200 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            onClick={() => setActiveDropdown(null)}
                            className={`block px-4 py-3 text-sm hover:bg-secondary-50 transition-colors ${
                              isActive(dropdownItem.href) ? 'bg-primary-50 text-primary-600' : 'text-secondary-700'
                            }`}
                          >
                            <div className="font-medium">{dropdownItem.name}</div>
                            <div className="text-xs text-secondary-500 mt-1">{dropdownItem.description}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
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
                )}
              </div>
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
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="flex items-center">
                        {item.href ? (
                          <Link
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center space-x-2 px-3 py-2 text-base font-medium rounded-lg transition-colors flex-1 ${
                              isActive(item.href) || isDropdownActive(item.dropdown)
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                            }`}
                          >
                            {item.icon && <item.icon className="w-5 h-5" />}
                            <span>{item.name}</span>
                          </Link>
                        ) : (
                          <div className={`flex items-center space-x-2 px-3 py-2 text-base font-medium rounded-lg flex-1 ${
                            isDropdownActive(item.dropdown)
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-secondary-600'
                          }`}>
                            {item.icon && <item.icon className="w-5 h-5" />}
                            <span>{item.name}</span>
                          </div>
                        )}
                        <button
                          onClick={() => handleDropdownToggle(`mobile-${item.name}`)}
                          className={`p-2 rounded-lg transition-colors ${
                            activeDropdown === `mobile-${item.name}`
                              ? 'text-primary-600'
                              : 'text-secondary-600 hover:text-secondary-900'
                          }`}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            activeDropdown === `mobile-${item.name}` ? 'rotate-180' : ''
                          }`} />
                        </button>
                      </div>
                      
                      {activeDropdown === `mobile-${item.name}` && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                              className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                                isActive(dropdownItem.href)
                                  ? 'text-primary-600 bg-primary-50'
                                  : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-50'
                              }`}
                            >
                              <div className="font-medium">{dropdownItem.name}</div>
                              <div className="text-xs text-secondary-500 mt-1">{dropdownItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
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
                  )}
                </div>
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