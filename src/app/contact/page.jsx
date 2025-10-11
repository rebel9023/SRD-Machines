'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        title="Contact Us"
        description="Get in touch with our team to discuss your manufacturing needs and discover how we can help you achieve your goals."
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
        showVerticalLine={false}
      />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit our manufacturing facility and experience our state-of-the-art machinery firsthand.
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="h-96 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
                <p className="text-gray-500 text-sm mt-2">
                  Survey No. 159, Block No. 190/P1, Raman Gamdi, G.I.D.C. Por, Vadodara - 391243
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
