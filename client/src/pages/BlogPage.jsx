import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen, Clock, Shield, Gavel } from 'lucide-react';
import Button from '../components/Common/Button';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'First Time DUI Offence Australia: What to Expect',
      slug: 'first-time-dui-offence-australia',
      excerpt: 'Comprehensive guide for first-time DUI offenders in Australia. Learn about penalties, legal processes, and defense strategies.',
      author: 'Legal Expert',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'First Offence',
      featured: true,
    },
    {
      id: 2,
      title: 'Can Police Stop You Randomly in Australia?',
      slug: 'can-police-stop-you-randomly-australia',
      excerpt: 'Understanding your rights during random police stops and breath testing. Know the laws and protect yourself.',
      author: 'Legal Expert', 
      date: '2024-03-12',
      readTime: '6 min read',
      category: 'Rights & Laws',
      featured: true,
    },
    {
      id: 3,
      title: 'DUI Penalties Across Australian States',
      slug: 'dui-penalties-australian-states',
      excerpt: 'State-by-state breakdown of DUI penalties, fines, and license suspensions across Australia.',
      author: 'Legal Expert',
      date: '2024-03-10',
      readTime: '10 min read',
      category: 'Penalties',
      featured: false,
    },
    {
      id: 4,
      title: 'Building a Strong DUI Defense Strategy',
      slug: 'building-strong-dui-defense-strategy',
      excerpt: 'Expert tips on creating an effective defense strategy for DUI charges. Learn what works in Australian courts.',
      author: 'Defense Specialist',
      date: '2024-03-08',
      readTime: '12 min read',
      category: 'Defense Strategies',
      featured: false,
    },
    {
      id: 5,
      title: 'BAC Limits and Testing Procedures in Australia',
      slug: 'bac-limits-testing-procedures-australia',
      excerpt: 'Complete guide to blood alcohol concentration limits and testing procedures across Australian jurisdictions.',
      author: 'Legal Expert',
      date: '2024-03-05',
      readTime: '7 min read',
      category: 'Testing & Limits',
      featured: false,
    },
    {
      id: 6,
      title: 'Court Procedures for DUI Cases',
      slug: 'court-procedures-dui-cases',
      excerpt: 'Step-by-step guide to court procedures for DUI cases. What to expect and how to prepare.',
      author: 'Court Specialist',
      date: '2024-03-03',
      readTime: '9 min read',
      category: 'Court Procedures',
      featured: false,
    }
  ];

  const categories = [
    'All Posts',
    'First Offence',
    'Rights & Laws', 
    'Penalties',
    'Defense Strategies',
    'Testing & Limits',
    'Court Procedures'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-12 h-12 mr-3" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl">
                DUI Defence Blog
              </h1>
            </div>
            <p className="text-xl text-primary-100 leading-relaxed">
              Expert insights, legal updates, and comprehensive guides on DUI defense in Australia. 
              Stay informed with the latest strategies and legal developments.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Featured Posts Section */}
        <section className="mb-16">
          <h2 className="font-heading font-bold text-3xl text-secondary-900 mb-8">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-secondary-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-secondary-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-secondary-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-secondary-500">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Link
                      to={`/${post.slug}`}
                      className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Posts Section */}
        <section>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                <h3 className="font-heading font-bold text-lg text-secondary-900 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary-50 text-primary-600 font-medium'
                            : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading font-bold text-3xl text-secondary-900">
                  {selectedCategory === 'All Posts' ? 'All Articles' : selectedCategory}
                </h2>
                <p className="text-secondary-600">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-secondary-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-secondary-900 mb-3 leading-tight">
                        <Link 
                          to={`/${post.slug}`}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-secondary-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-secondary-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span className="mr-3">{post.author}</span>
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <Link
                          to={`/${post.slug}`}
                          className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                        >
                          Read →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h2 className="font-heading font-bold text-3xl mb-4">
              Need Personal Legal Assistance?
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Get a personalized assessment of your DUI case with our AI-powered analysis tool. 
              Discover your defense options and potential outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assessment">
                <Button variant="light" size="lg" className="flex items-center">
                  <Gavel className="w-5 h-5 mr-2" />
                  Start Free Assessment
                </Button>
              </Link>
              <Link to="/dui-charges-australia">
                <Button variant="outline-light" size="lg">
                  Learn About DUI Charges
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage; 