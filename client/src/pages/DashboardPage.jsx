import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  BookOpen, 
  CreditCard, 
  Calendar, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useAssessment } from '../context/AssessmentContext';
import Button from '../components/Common/Button';
import LoadingSpinner from '../components/Common/LoadingSpinner';

const DashboardPage = () => {
  const { user } = useAuth();
  const { getUserAssessments, loading } = useAssessment();
  const [assessments, setAssessments] = useState([]);
  const [stats, setStats] = useState({
    totalAssessments: 0,
    completedModules: 1,
    totalModules: 6,
    nextCourtDate: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userAssessments = await getUserAssessments();
        setAssessments(userAssessments);
        setStats(prev => ({
          ...prev,
          totalAssessments: userAssessments.length
        }));
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, [getUserAssessments]);

  const recentAssessments = assessments.slice(0, 3);

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container-custom section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold text-secondary-900 mb-2">
              Welcome back, {user?.firstName || 'User'}!
            </h1>
            <p className="text-secondary-600">
              Here's your DUI defense preparation progress and upcoming tasks.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FileText className="h-8 w-8 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary-600">Total Assessments</p>
                  <p className="text-2xl font-bold text-secondary-900">{stats.totalAssessments}</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BookOpen className="h-8 w-8 text-success-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary-600">Modules Progress</p>
                  <p className="text-2xl font-bold text-secondary-900">
                    {stats.completedModules}/{stats.totalModules}
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-info-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary-600">Completion Rate</p>
                  <p className="text-2xl font-bold text-secondary-900">
                    {Math.round((stats.completedModules / stats.totalModules) * 100)}%
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Calendar className="h-8 w-8 text-warning-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-secondary-600">Next Court Date</p>
                  <p className="text-lg font-bold text-secondary-900">
                    {stats.nextCourtDate ? stats.nextCourtDate : 'Not set'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Assessments */}
            <div className="lg:col-span-2">
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-xl font-semibold text-secondary-900">
                    Recent Assessments
                  </h2>
                  <Link 
                    to="/assessment" 
                    className="text-sm text-primary-600 hover:text-primary-500 font-medium"
                  >
                    Start New Assessment
                  </Link>
                </div>

                {loading ? (
                  <div className="flex justify-center py-8">
                    <LoadingSpinner />
                  </div>
                ) : recentAssessments.length > 0 ? (
                  <div className="space-y-4">
                    {recentAssessments.map((assessment) => (
                      <div 
                        key={assessment.id} 
                        className="border border-secondary-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <h3 className="font-medium text-secondary-900 mr-3">
                                Assessment #{assessment.id}
                              </h3>
                              {assessment.isComplete ? (
                                <CheckCircle className="w-5 h-5 text-success-500" />
                              ) : (
                                <Clock className="w-5 h-5 text-warning-500" />
                              )}
                            </div>
                            <p className="text-sm text-secondary-600 mb-2">
                              Created: {new Date(assessment.createdAt).toLocaleDateString()}
                            </p>
                            <p className="text-sm text-secondary-600">
                              Status: {assessment.isComplete ? 'Completed' : 'In Progress'}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            {assessment.isComplete ? 'View Report' : 'Continue'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
                    <p className="text-secondary-600 mb-4">
                      You haven't started any assessments yet.
                    </p>
                    <Button as={Link} to="/assessment">
                      Start Your First Assessment
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions & Progress */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="card p-6">
                <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-4">
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  <Button 
                    as={Link} 
                    to="/assessment" 
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    New Assessment
                  </Button>
                  <Button 
                    as={Link} 
                    to="/modules" 
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Continue Learning
                  </Button>
                  <Button 
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Upgrade to Premium
                  </Button>
                </div>
              </div>

              {/* Learning Progress */}
              <div className="card p-6">
                <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-4">
                  Learning Progress
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-secondary-600">Modules Completed</span>
                      <span className="font-medium">{stats.completedModules}/{stats.totalModules}</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{width: `${(stats.completedModules / stats.totalModules) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm text-secondary-600">
                    <p>Keep learning to improve your case preparation!</p>
                  </div>
                </div>
              </div>

              {/* Upcoming Tasks */}
              <div className="card p-6">
                <h2 className="font-heading text-xl font-semibold text-secondary-900 mb-4">
                  Upcoming Tasks
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-warning-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-secondary-900">
                        Complete Module 2
                      </p>
                      <p className="text-xs text-secondary-600">
                        Your Rights During a Traffic Stop
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-info-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-secondary-900">
                        Set Court Date
                      </p>
                      <p className="text-xs text-secondary-600">
                        Add your court date to track preparation time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 