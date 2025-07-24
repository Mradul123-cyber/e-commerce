
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleReadMore = (title) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const categories = ['All', 'JEE Tips', 'NEET Preparation', 'Study Strategies', 'Success Stories', 'Exam Updates'];

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Physics Tips for JEE Advanced 2024",
      excerpt: "Master the most challenging physics concepts with these proven strategies from IIT toppers and expert educators.",
      author: "Dr. Rajesh Kumar",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "JEE Tips",
      image: "Physics formulas and equations on blackboard with student studying"
    },
    {
      id: 2,
      title: "How to Manage Exam Stress During NEET Preparation",
      excerpt: "Effective techniques to stay calm, focused, and motivated throughout your NEET preparation journey.",
      author: "Prof. Priya Sharma",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "NEET Preparation",
      image: "Calm student meditating with books and peaceful study environment"
    },
    {
      id: 3,
      title: "NEET 2023 Success Story: From 60% to AIR 156",
      excerpt: "Inspiring journey of Priya Sharma who transformed her preparation strategy and achieved her dream rank.",
      author: "MS Chouhan Team",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Success Stories",
      image: "Happy female student celebrating NEET success with certificate"
    },
    {
      id: 4,
      title: "Effective Time Management for JEE Main Preparation",
      excerpt: "Learn how to create a balanced study schedule that maximizes productivity and ensures comprehensive coverage.",
      author: "Dr. Amit Singh",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Study Strategies",
      image: "Student with organized study schedule and time management tools"
    },
    {
      id: 5,
      title: "Chemistry Shortcuts for Organic Reactions",
      excerpt: "Master organic chemistry with these time-saving tricks and memory techniques used by top rankers.",
      author: "Prof. Ravi Sharma",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "JEE Tips",
      image: "Chemistry laboratory with organic compound structures and reactions"
    },
    {
      id: 6,
      title: "NEET 2024: Important Changes and Updates",
      excerpt: "Stay updated with the latest changes in NEET exam pattern, syllabus modifications, and important dates.",
      author: "MS Chouhan Team",
      date: "2024-01-03",
      readTime: "5 min read",
      category: "Exam Updates",
      image: "NEET exam notification and important documents on desk"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <>
      <Helmet>
        <title>Educational Blog - JEE & NEET Tips, Success Stories | MS CHOUHAN</title>
        <meta name="description" content="Read expert tips, study strategies, and success stories for JEE and NEET preparation. Get insights from top educators and successful students." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Educational Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expert insights, study tips, and success stories to guide your JEE and NEET preparation journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover cursor-pointer" onClick={() => handleReadMore(featuredPost.title)}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-blue-800 to-orange-500 flex items-center justify-center">
                  <img  className="w-full h-full object-cover" alt={featuredPost.title} src="https://images.unsplash.com/photo-1686643184179-e4b65e15022e" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  <Tag className="h-3 w-3 mr-1 inline" />
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer"
                onClick={() => handleReadMore(post.title)}
              >
                <div className="h-48 bg-gradient-to-br from-blue-800 to-orange-500 flex items-center justify-center">
                  <img  className="w-full h-full object-cover" alt={post.title} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.category === 'JEE Tips' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'NEET Preparation' ? 'bg-green-100 text-green-800' :
                      post.category === 'Success Stories' ? 'bg-purple-100 text-purple-800' :
                      post.category === 'Study Strategies' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Tips</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest study tips, exam updates, and success stories delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <Button 
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3"
                onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
