import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import HomePage from '@/pages/HomePage.jsx';
import OnlineStore from '@/pages/OnlineStore.jsx';
import MentorshipServices from '@/pages/MentorshipServices.jsx';
import AboutUs from '@/pages/AboutUs.jsx';
import Blog from '@/pages/Blog.jsx';
import ContactUs from '@/pages/ContactUs.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<OnlineStore />} />
            <Route path="/mentorship" element={<MentorshipServices />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;