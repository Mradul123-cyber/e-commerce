
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, CheckCircle, Clock, Target, Award, BookOpen, Video, MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const MentorshipServices = () => {
  const { toast } = useToast();

  const handleEnrollClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const programs = [
    {
      name: "JEE Foundation",
      duration: "6 Months",
      price: "₹24,999",
      originalPrice: "₹34,999",
      features: [
        "Weekly 1-on-1 sessions",
        "Personalized study plan",
        "Mock tests & analysis",
        "Doubt clearing sessions",
        "Progress tracking"
      ],
      popular: false
    },
    {
      name: "JEE Advanced Pro",
      duration: "12 Months",
      price: "₹44,999",
      originalPrice: "₹59,999",
      features: [
        "Bi-weekly 1-on-1 sessions",
        "Advanced problem solving",
        "IIT alumni mentorship",
        "Unlimited doubt support",
        "Interview preparation",
        "Career guidance"
      ],
      popular: true
    },
    {
      name: "NEET Excellence",
      duration: "10 Months",
      price: "₹39,999",
      originalPrice: "₹54,999",
      features: [
        "Weekly mentorship calls",
        "Medical college guidance",
        "AIIMS/JIPMER preparation",
        "Biology focus sessions",
        "Exam strategy planning"
      ],
      popular: false
    }
  ];

  const mentors = [
    {
      name: "Dr. Rajesh Kumar",
      qualification: "IIT Delhi, PhD Physics",
      experience: "15+ years",
      specialization: "JEE Physics",
      students: "500+",
      image: "Professional male physics teacher with books and equations"
    },
    {
      name: "Prof. Priya Sharma",
      qualification: "AIIMS Delhi, MD",
      experience: "12+ years",
      specialization: "NEET Biology",
      students: "400+",
      image: "Female medical professional with stethoscope and medical books"
    },
    {
      name: "Dr. Amit Singh",
      qualification: "IIT Bombay, PhD Chemistry",
      experience: "18+ years",
      specialization: "Chemistry (JEE/NEET)",
      students: "600+",
      image: "Chemistry professor with laboratory equipment and periodic table"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Personalized Learning Path",
      description: "Customized study plans based on your strengths, weaknesses, and target goals"
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Learn from IIT/AIIMS alumni and experienced educators with proven track records"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Schedule sessions at your convenience with 24/7 doubt support availability"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "95% of our mentored students achieve their target ranks in competitive exams"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Premium Mentorship Services - JEE & NEET Coaching | MS CHOUHAN</title>
        <meta name="description" content="Get personalized mentorship from IIT/AIIMS alumni for JEE and NEET preparation. Expert guidance, flexible scheduling, and proven results." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Premium Mentorship
                <span className="block text-orange-300">Programs</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get personalized guidance from IIT/AIIMS alumni and experienced educators. Transform your preparation with expert mentorship tailored to your goals.
              </p>
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
                onClick={handleEnrollClick}
              >
                <Users className="mr-2 h-5 w-5" />
                Enroll Now
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img  className="rounded-2xl shadow-2xl w-full" alt="Student receiving mentorship guidance" src="https://images.unsplash.com/photo-1654860687488-119a90eafa86" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You Get</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mentorship designed to maximize your potential and achieve top ranks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-800 to-orange-500 text-white rounded-full mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentorship Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the mentorship program that best fits your preparation timeline and goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden card-hover relative ${
                  program.popular ? 'ring-2 ring-orange-500' : ''
                }`}
              >
                {program.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                    <p className="text-gray-600 mb-4">{program.duration}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-blue-800">{program.price}</span>
                      <span className="text-lg text-gray-500 line-through">{program.originalPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${
                      program.popular 
                        ? 'bg-orange-500 hover:bg-orange-600' 
                        : 'bg-blue-800 hover:bg-blue-900'
                    }`}
                    onClick={handleEnrollClick}
                  >
                    Enroll Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mentors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Mentors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from the best - our mentors are IIT/AIIMS alumni with extensive teaching experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="h-64 bg-gradient-to-br from-blue-800 to-orange-500 flex items-center justify-center">
                  <img  className="w-full h-full object-cover" alt={`${mentor.name} - expert mentor`} src="https://images.unsplash.com/photo-1534298435681-3fd5153b0b7c" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                  <p className="text-blue-800 font-semibold mb-2">{mentor.qualification}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-semibold">Experience:</span> {mentor.experience}</p>
                    <p><span className="font-semibold">Specialization:</span> {mentor.specialization}</p>
                    <p><span className="font-semibold">Students Mentored:</span> {mentor.students}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures comprehensive preparation and continuous improvement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Video,
                title: "Live Sessions",
                description: "Regular 1-on-1 video calls with your dedicated mentor"
              },
              {
                icon: BookOpen,
                title: "Study Planning",
                description: "Personalized study schedules and resource recommendations"
              },
              {
                icon: MessageCircle,
                title: "Doubt Support",
                description: "24/7 doubt clearing through chat and voice calls"
              },
              {
                icon: Target,
                title: "Progress Tracking",
                description: "Regular assessments and performance analysis"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center card-hover"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-800 to-orange-500 text-white rounded-full mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Success Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful students who achieved their dreams with our expert mentorship
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={handleEnrollClick}
            >
              <Users className="mr-2 h-5 w-5" />
              Enroll in Mentorship Program
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MentorshipServices;
