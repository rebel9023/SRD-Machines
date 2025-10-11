'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import DOMPurify from "dompurify";
import ReCAPTCHA from "react-google-recaptcha";
import ErrorMessage from './ErrorMessage';

const FloatingInquiryForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Sanitize text input
    const cleanValue = DOMPurify.sanitize(value, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
    setFormData((prev) => ({
      ...prev,
      [name]: cleanValue,
    }));
  };


  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');

  const handleCaptchaChange = (value) => {
    setCaptchaValid(!!value);
    setCaptchaToken(value || '');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required.');
      return false;
    }
    if (!formData.country.trim()) {
      setError('Country is required.');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Message is required.');
      return false;
    }
    if (!captchaValid) {
      setError('Please verify you are not a robot.');
      return false;
    }
    
    // Check if user provided email in message (optional validation)
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    if (emailRegex.test(formData.message) || emailRegex.test(formData.company)) {
      // Extract email from message or company field
      const emailMatch = formData.message.match(emailRegex) || formData.company.match(emailRegex);
      if (emailMatch) {
        const email = emailMatch[0];
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          setError('Please provide a valid email address if you want us to reply.');
          return false;
        }
      }
    }
    
    return true;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(result.message);
        setFormData({
          name: '',
          country: '',
          company: '',
          phone: '',
          message: '',
        });
        setCaptchaValid(false);
        setCaptchaToken('');
        
        // Close form after 2 seconds
        setTimeout(() => {
          setIsOpen(false);
          setSuccess('');
        }, 2000);
      } else {
        setError(result.message || 'Failed to send inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 180 }}
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#eb6379] text-white px-4 py-3 rounded-l-md shadow-md hover:shadow-lg text-sm font-semibold tracking-wide"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        Send Inquiry
      </motion.button>

      {/* Overlay + Form */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            />

            {/* Floating Form */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: 'spring', stiffness: 220, damping: 25 }}
              className="fixed right-[2%] sm:right-[4%] top-[5%] sm:top-[10%] max-h-[90vh] sm:max-h-[80vh] overflow-y-auto z-50 bg-white shadow-2xl rounded-lg w-[95vw] sm:w-[360px] max-w-[360px] border border-gray-100"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200">
                <h3 className="text-[15px] font-semibold text-[#061a40]">
                  Send Your Inquiry Today
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 rounded-full bg-[#eb6379] text-white flex items-center justify-center hover:bg-[#d8566b] transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 space-y-3">
                {/* Error Message */}
                <ErrorMessage 
                  message={error} 
                  onClose={() => setError('')} 
                  type="error" 
                />
                
                {/* Success Message */}
                <ErrorMessage 
                  message={success} 
                  type="success" 
                />
                {[
                  { name: 'name', placeholder: 'Your Name*', type: 'text' },
                  { name: 'country', placeholder: 'Your Country*', type: 'text' },
                  { name: 'company', placeholder: 'Your Company', type: 'text' },
                  { name: 'phone', placeholder: 'Your Phone', type: 'tel' },
                ].map((field) => (
                  <div key={field.name}>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-md text-sm border border-gray-200 bg-[#f8f9fb] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#eb6379]"
                    />
                  </div>
                ))}

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Your Message*"
                  className="w-full px-4 py-3 rounded-md text-sm border border-gray-200 bg-[#f8f9fb] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#eb6379] resize-none"
                />


                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                  theme="light"
                />


                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full text-white text-[15px] font-semibold py-3 rounded-md mt-2 transition-all flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#eb6379] hover:bg-[#d8566b]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Submit Now'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingInquiryForm;
