
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, Filter, Search, Star, ShoppingCart, Grid, List } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const OnlineStore = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (bookTitle) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const categories = ['All', 'JEE Preparation Books', 'NEET Preparation Books'];
  const subjects = ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology'];

  const books = [
    {
      id: 1,
      title: "JEE Advanced Physics Mastery",
      author: "Dr. Rajesh Kumar",
      price: "₹899",
      originalPrice: "₹1299",
      rating: 4.8,
      reviews: 245,
      category: "JEE Preparation Books",
      subject: "Physics",
      description: "Comprehensive physics guide with advanced problem-solving techniques"
    },
    {
      id: 2,
      title: "NEET Biology Complete Guide",
      author: "Prof. Priya Sharma",
      price: "₹799",
      originalPrice: "₹1199",
      rating: 4.9,
      reviews: 312,
      category: "NEET Preparation Books",
      subject: "Biology",
      description: "Complete biology coverage with NEET-specific focus"
    },
    {
      id: 3,
      title: "Chemistry for JEE & NEET",
      author: "Dr. Amit Singh",
      price: "₹749",
      originalPrice: "₹999",
      rating: 4.7,
      reviews: 189,
      category: "JEE Preparation Books",
      subject: "Chemistry",
      description: "Unified chemistry approach for both JEE and NEET"
    },
    {
      id: 4,
      title: "JEE Mathematics Concepts & Problems",
      author: "Prof. Suresh Gupta",
      price: "₹849",
      originalPrice: "₹1199",
      rating: 4.6,
      reviews: 156,
      category: "JEE Preparation Books",
      subject: "Mathematics",
      description: "Advanced mathematics with step-by-step solutions"
    },
    {
      id: 5,
      title: "NEET Physics Simplified",
      author: "Dr. Kavita Mehta",
      price: "₹699",
      originalPrice: "₹999",
      rating: 4.5,
      reviews: 203,
      category: "NEET Preparation Books",
      subject: "Physics",
      description: "Physics made simple for NEET aspirants"
    },
    {
      id: 6,
      title: "Organic Chemistry Mastery",
      author: "Prof. Ravi Sharma",
      price: "₹799",
      originalPrice: "₹1099",
      rating: 4.8,
      reviews: 278,
      category: "NEET Preparation Books",
      subject: "Chemistry",
      description: "Master organic chemistry with practical examples"
    }
  ];

  const filteredBooks = books.filter(book => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSubject = selectedSubject === 'All' || book.subject === selectedSubject;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSubject && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Online Store - Premium JEE & NEET Books | MS CHOUHAN</title>
        <meta name="description" content="Shop premium JEE and NEET preparation books by expert authors. Find physics, chemistry, mathematics, and biology books with proven success records." />
      </Helmet>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-800 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Online Store</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive collection of JEE and NEET preparation books, crafted by expert educators
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search books or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-800 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-800 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredBooks.length} of {books.length} books
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-800 to-orange-500 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        book.category.includes('JEE') ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {book.subject}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{book.rating}</span>
                        <span className="ml-1 text-xs text-gray-500">({book.reviews})</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{book.title}</h3>
                    <p className="text-gray-600 mb-2">{book.author}</p>
                    <p className="text-sm text-gray-500 mb-4">{book.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-blue-800">{book.price}</span>
                        <span className="text-sm text-gray-500 line-through">{book.originalPrice}</span>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-orange-500 hover:bg-orange-600"
                        onClick={() => handleAddToCart(book.title)}
                      >
                        <ShoppingCart className="mr-1 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 card-hover"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-32 h-32 bg-gradient-to-br from-blue-800 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-12 w-12 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              book.category.includes('JEE') ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                            }`}>
                              {book.subject}
                            </span>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="ml-1 text-sm text-gray-600">{book.rating}</span>
                              <span className="ml-1 text-xs text-gray-500">({book.reviews} reviews)</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{book.title}</h3>
                          <p className="text-gray-600 mb-2">{book.author}</p>
                          <p className="text-gray-500">{book.description}</p>
                        </div>
                        <div className="flex flex-col items-end mt-4 md:mt-0">
                          <div className="flex items-center space-x-2 mb-4">
                            <span className="text-2xl font-bold text-blue-800">{book.price}</span>
                            <span className="text-sm text-gray-500 line-through">{book.originalPrice}</span>
                          </div>
                          <Button 
                            className="bg-orange-500 hover:bg-orange-600"
                            onClick={() => handleAddToCart(book.title)}
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No books found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default OnlineStore;
