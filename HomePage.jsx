
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Award, Star, ArrowRight, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const HomePage = () => {
  const { toast } = useToast();

  const handleFeatureClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const featuredBooks = [
    {
      id: 1,
      title: "JEE Advanced Physics Mastery",
      author: "Dr. Rajesh Kumar",
      price: "₹899",
      originalPrice: "₹1299",
      rating: 4.8,
      category: "JEE"
    },
    {
      id: 2,
      title: "NEET Biology Complete Guide",
      author: "Prof. Priya Sharma",
      price: "₹799",
      originalPrice: "₹1199",
      rating: 4.9,
      category: "NEET"
    },
    {
      id: 3,
      title: "Chemistry for JEE & NEET",
      author: "Dr. Amit Singh",
      price: "₹749",
      originalPrice: "₹999",
      rating: 4.7,
      category: "Both"
    }
  ];

  const testimonials = [
    {
      name: "Arjun Patel",
      exam: "JEE Advanced 2023",
      rank: "AIR 247",
      text: "MS Chouhan's books and mentorship program were game-changers for me. The structured approach and expert guidance helped me crack JEE Advanced with confidence.",
      image: "Student studying with books and laptop"
    },
    {
      name: "Priya Sharma",
      exam: "NEET 2023",
      rank: "AIR 156",
      text: "The quality of study materials and personalized mentorship exceeded my expectations. I couldn't have achieved this rank without MS Chouhan's support.",
      image: "Female student celebrating success"
    },
    {
      name: "Rohit Kumar",
      exam: "JEE Main 2023",
      rank: "99.8 Percentile",
      text: "Excellent books with clear explanations and plenty of practice problems. The mentorship sessions helped me identify and work on my weak areas effectively.",
      image: "Male student with achievement certificate"
    }
  ];

  return (
    <>
      <Helmet>
        <title>MS CHOUHAN - Premier JEE & NEET Preparation Platform | Top Study Materials & Mentorship</title>
        <meta name="description" content="Excel in JEE and NEET exams with MS Chouhan's premium study materials, expert mentorship, and proven success strategies. Join thousands of successful students." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Master JEE & NEET with 
                <span className="block text-orange-400">Expert Guidance</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Transform your dreams into reality with our premium study materials, personalized mentorship, and proven success strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/store">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Books
                  </Button>
                </Link>
                <Link to="/mentorship">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg font-semibold">
                    <Users className="mr-2 h-5 w-5" />
                    Learn About Mentorship
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img  className="rounded-2xl shadow-2xl w-full" alt="Students studying for JEE and NEET exams" src="https://images.unsplash.com/photo-1557989048-03456d01a26e" />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-orange-400 rounded-2xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Students Mentored", icon: Users },
              { number: "95%", label: "Success Rate", icon: TrendingUp },
              { number: "500+", label: "Top Ranks", icon: Award },
              { number: "50+", label: "Expert Books", icon: BookOpen }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-blue-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Best-Selling Books</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular study materials, trusted by thousands of successful students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer"
                onClick={handleFeatureClick}
              >
                <div className="h-48 bg-gradient-to-br from-blue-800 to-orange-500 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      book.category === 'JEE' ? 'bg-blue-100 text-blue-800' :
                      book.category === 'NEET' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {book.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{book.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-4">{book.author}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-800">{book.price}</span>
                      <span className="text-sm text-gray-500 line-through">{book.originalPrice}</span>
                    </div>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/store">
              <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4">
                View All Books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MS CHOUHAN?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support to help you achieve your academic goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Targeted Preparation",
                description: "Focused study materials designed specifically for JEE and NEET success patterns"
              },
              {
                icon: Users,
                title: "Expert Mentorship",
                description: "Personalized guidance from experienced educators and successful alumni"
              },
              {
                icon: CheckCircle,
                title: "Proven Results",
                description: "Track record of helping thousands of students achieve top ranks"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg text-center card-hover"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-800 to-orange-500 text-white rounded-full mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful students who achieved their dreams with our guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <img  className="w-16 h-16 rounded-full object-cover" alt={`${testimonial.name} - successful student`} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.exam}</p>
                    <p className="text-sm font-semibold text-orange-500">{testimonial.rank}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Success Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of successful students who trusted MS CHOUHAN for their JEE and NEET preparation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/store">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Study Materials
                </Button>
              </Link>
              <Link to="/mentorship">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg font-semibold">
                  <Users className="mr-2 h-5 w-5" />
                  Get Mentorship
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
