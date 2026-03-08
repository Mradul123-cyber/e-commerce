
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Target, Heart, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "10,000+", label: "Students Mentored", icon: Users },
    { number: "500+", label: "Top Ranks Achieved", icon: Target },
    { number: "50+", label: "Expert Books Published", icon: BookOpen }
  ];

  const team = [
    {
      name: "Mr. M.S. Chouhan",
      role: "Founder & Chief Mentor",
      qualification: "IIT Delhi, 25+ years experience",
      description: "Visionary educator with a passion for nurturing young minds and helping them achieve their dreams.",
      image: "Professional educator with books and teaching materials"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Head of Physics Department",
      qualification: "IIT Delhi, PhD Physics",
      description: "Expert in advanced physics concepts with a track record of producing top JEE rankers.",
      image: "Physics professor with laboratory equipment and formulas"
    },
    {
      name: "Prof. Priya Sharma",
      role: "Head of Biology Department",
      qualification: "AIIMS Delhi, MD",
      description: "Medical professional turned educator, specializing in NEET biology preparation.",
      image: "Biology teacher with medical books and anatomical models"
    },
    {
      name: "Dr. Amit Singh",
      role: "Head of Chemistry Department",
      qualification: "IIT Bombay, PhD Chemistry",
      description: "Chemistry expert known for simplifying complex concepts and making them accessible.",
      image: "Chemistry professor with periodic table and laboratory setup"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Student-Centric Approach",
      description: "Every decision we make is centered around what's best for our students' success and growth."
    },
    {
      icon: Lightbulb,
      title: "Innovation in Education",
      description: "We continuously evolve our teaching methods and materials to stay ahead of changing exam patterns."
    },
    {
      icon: Target,
      title: "Excellence in Results",
      description: "We are committed to helping every student achieve their highest potential and dream ranks."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About MS CHOUHAN - Leading JEE & NEET Education Platform | Our Story</title>
        <meta name="description" content="Learn about MS Chouhan's 15+ year journey in JEE and NEET education. Meet our expert team and discover our mission to empower students across India." />
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About MS CHOUHAN</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Empowering students to achieve excellence in competitive examinations through quality education, expert guidance, and unwavering support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded over 15 years ago by Mr. M.S. Chouhan, our platform began with a simple yet powerful vision: to democratize quality education and make top-tier JEE and NEET preparation accessible to every ambitious student across India.
                </p>
                <p>
                  What started as a small coaching center has evolved into a comprehensive educational ecosystem, serving thousands of students through our premium books, personalized mentorship programs, and innovative teaching methodologies.
                </p>
                <p>
                  Our journey has been marked by countless success stories - students who have not only achieved their dream ranks but have gone on to become leaders in their respective fields. This legacy of excellence continues to drive us forward.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img  className="rounded-2xl shadow-2xl w-full" alt="MS Chouhan educational institution building" src="https://images.unsplash.com/photo-1687600154329-150952c73169" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-800 to-orange-500 text-white rounded-full mb-4">
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

      {/* Our Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class educational resources and personalized mentorship that empowers students to excel in competitive examinations and achieve their career aspirations in engineering and medicine.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be India's most trusted and innovative educational platform, transforming the way students prepare for competitive exams and creating a generation of confident, successful professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our educational philosophy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of educators and mentors brings decades of experience and expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="h-64 bg-gradient-to-br from-blue-800 to-orange-500 flex items-center justify-center">
                  <img  className="w-full h-full object-cover" alt={`${member.name} - ${member.role}`} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-800 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.qualification}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Our Educational Philosophy</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-blue-100 leading-relaxed">
              <p>
                We believe that every student has the potential to excel when provided with the right guidance, resources, and support system. Our approach goes beyond traditional teaching methods to focus on conceptual understanding, practical application, and holistic development.
              </p>
              <p>
                We emphasize building confidence, developing problem-solving skills, and nurturing the analytical thinking required to succeed not just in competitive exams, but in life. Our personalized approach ensures that each student receives attention tailored to their unique learning style and pace.
              </p>
              <p className="text-xl font-semibold text-orange-300">
                "Success is not just about achieving ranks; it's about building the foundation for a lifetime of learning and growth."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
