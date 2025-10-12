'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  // State for email input and validation
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle download functionality
  const handleDownload = () => {
    // Reset previous states
    setEmailError('');
    setDownloadSuccess(false);
    
    // Validate email
    if (!email.trim()) {
      setEmailError('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Start download process
    setIsDownloading(true);
    
    try {
      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = '/files/srd_machines.pdf';
      link.download = 'SRD_Machines_Brochure.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success message
      setDownloadSuccess(true);
      
      // Reset form after successful download
      setTimeout(() => {
        setEmail('');
        setDownloadSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Download failed:', error);
      setEmailError('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleDownload();
    }
  };

  const usefulLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Sitemap', href: '#' },
    { name: 'Our Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Market Place', href: '#' },
  ];

  const services = [
    'Automatic Measuring Machine',
    'Automatic Turning line/Interconnected line',
    'Automatic Grinding Machine',
    'Pipe Cutting Machine',
    'Automatic Turning Machine',
    'Automatic Lathe Machine',
  ];

  const socialLinks = [
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="text-white">

      {/* Call to Action Section */}
      <section className="relative py-16 md:py-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(images/meetup.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7 // Adjust to taste
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg,rgb(49, 48, 116) 0%, #1E1D54 70%, #F26D83 100%)",
          opacity: 0.65
        }}
      />

        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              We look forward to working<br />with you
            </h2>
            <Link href="/contact" passHref>
              <button className="bg-gradient-to-br from-[#F26D83] to-[#DD394F] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow whitespace-nowrap">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Download Product Brochure Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#F26D83] to-[#DD394F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Download Product Brochure
          </h2>
          
          {/* Decorative underline */}
          <div className="w-44 h-1 bg-white/80 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-base md:text-lg text-white/95 mb-2">
            Please complete the below form to download digital assets.
          </p>
          <p className="text-base md:text-lg text-white/95 mb-8">
            Check files to be downloaded:
          </p>
          
          {/* Input with button inside */}
          <div className="max-w-xs sm:max-w-sm md:max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                className={`w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 pr-28 sm:pr-36 md:pr-48 border-0 rounded-lg bg-white/90 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base ${emailError ? 'ring-2 ring-red-400' : ''}`}
              />

              <button 
                onClick={handleDownload}
                disabled={isDownloading}
                className={`absolute right-0.5 sm:right-1 top-0.5 sm:top-1 bottom-0.5 sm:bottom-1 text-white px-2 sm:px-3 md:px-6 py-2 sm:py-3 font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105 whitespace-nowrap text-xs sm:text-sm md:text-base flex items-center justify-center ${
                  isDownloading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#eb6379] hover:bg-[#d8566b]'
                }`}
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Downloading...
                  </>
                ) : (
                  'Download Files Now'
                )}
              </button>
            </div>
            
            {/* Error Message */}
            {emailError && (
              <div className="mt-4 text-center animate-fadeIn">
                <div className="inline-flex items-center px-4 py-3 rounded-lg bg-red-600 text-white text-sm font-medium shadow-lg border border-red-500">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {emailError}
                </div>
              </div>
            )}
            
            {/* Success Message */}
            {downloadSuccess && (
              <div className="mt-4 text-center animate-fadeIn">
                <div className="inline-flex items-center px-4 py-3 rounded-lg bg-green-600 text-white text-sm font-medium shadow-lg border border-green-500">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Download started successfully! Check your downloads folder.
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Main Footer Content */}
      <div className="bg-[#1a1d3a] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            
            {/* Company Info & Social Media */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/icon.png"
                    alt="SRD Machines Icon"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <Image
                    src="/images/name.png"
                    alt="SRD Machines"
                    width={100}
                    height={24}
                    className="mb-1"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex space-x-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-9 h-9 bg-transparent border border-[#F26D83]/100 rounded-full flex items-center justify-center hover:bg-[#F26D83]/50 text-[#F26D88] transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-[#f0f0f0]">Follow us on</p>
              </div>
            </div>

            {/* Useful Links */}
            <div className="space-y-3.5">
              <h3 className="text-lg font-semibold text-white">Useful Links</h3>
              <ul className="space-y-1.5 leading-relaxed">
                {usefulLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="space-y-3.5">
              <h3 className="text-lg font-semibold text-white">Our Services</h3>
              <ul className="space-y-1.5 leading-relaxed">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="space-y-3.5">
              <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
              <div className="space-y-2.5">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Survey No. 159, Block No. 190/P1, Raman Gamdi, G.I.D.C. Por, Vadodara - 391243
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-400 text-sm space-y-0.5">
                    <p>+91-9427189659</p>
                    <p>+91 94263 89395</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400 text-sm">sales@srdmachines.com</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Globe size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400 text-sm">www.srdmachines.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* Need Help Chat Button */}
<div className="fixed bottom-6 right-6 z-50">
  <a 
    href="https://wa.me/919427189659?text=Hello%2C%20I%20need%20help%20with%20SRD%20Machines%20products"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-[#F26D83] to-[#DD394F] text-white px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center space-x-2.5"
  >
    <div className="flex flex-col items-start leading-none">
      <span className="text-xs font-semibold">Need Help?</span>
      <span className="text-xs font-semibold">Chat with us</span>
    </div>
    <div className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
      <MessageCircle size={16} strokeWidth={2.5} />
    </div>
  </a>
</div>


      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-[#F26D83] to-[#DD394F] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-center md:text-left">
            {/* <p className="text-sm text-white">
              SRD Machine (by Sharda Industries) All Rights Reserved.
            </p> */}
            <p className="text-sm text-white">
              2025 © Dart. All Rights Reserved. SRD Machine
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;