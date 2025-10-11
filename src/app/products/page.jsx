'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingInquiryForm from '../../components/FloatingInquiryForm';
import { useState } from 'react';
import productsData from '../../data/products.json';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="relative pt-24 pb-16 bg-white">
      <div className="max-w-[95%] mx-auto relative rounded-3xl overflow-hidden
                      h-64 sm:h-80 md:h-96 lg:h-[500px]">

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/working.png')" }}
        />
        
        {/* Overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgb(49,48,116) 0%, #1E1D54 70%, #F26D83 100%)",
            opacity: 0.65,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex space-x-3 sm:space-x-4 items-stretch">
                
                {/* Left Gradient Line */}
                <div className="w-0.5 sm:w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full self-stretch flex-shrink-0" />

                {/* Headings */}
                <div className="flex flex-col justify-center space-y-0.5 sm:space-y-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
                    Smart Automation for
                  </h1>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                    Seamless Manufacturing
                  </h2>
                </div>
              </div>

              {/* Paragraph */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                Engineered with industry insight, our machines meet the 
                needs of bearing manufacturers by automating turning, 
                grinding, measuring, washing, and packing-ensuring 
                minimal downtime and consistent results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Product Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Products
          </h2>
          {/* Changed grid from lg:grid-cols-4 to lg:grid-cols-2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {productsData.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-600 p-4">
                  <h3 className="text-white font-semibold text-center">
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-3 sm:p-4 md:p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-3 sm:mb-4">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold p-1"
                >
                  ×
                </button>
              </div>

              {/* Product Detail Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {/* Left Side - Images */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Main Image */}
                  <div className="bg-gray-100 rounded-lg p-2 sm:p-4">
                    <img
                      src={selectedProduct.thumbnails[currentImageIndex]}
                      alt={selectedProduct.name}
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-contain rounded-lg"
                    />
                  </div>

                  {/* Thumbnail Carousel */}
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <button
                      onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
                      className="p-1.5 sm:p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors disabled:opacity-50"
                      disabled={currentImageIndex === 0}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <div className="flex space-x-1 sm:space-x-2 overflow-x-auto flex-1">
                      {selectedProduct.thumbnails.map((thumb, index) => (
                        <img
                          key={index}
                          src={thumb}
                          alt={`${selectedProduct.name} ${index + 1}`}
                          className={`w-12 h-12 sm:w-16 sm:h-16 object-cover rounded cursor-pointer border-2 flex-shrink-0 ${
                            index === currentImageIndex ? 'border-[#eb6379]' : 'border-gray-200'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentImageIndex(Math.min(selectedProduct.thumbnails.length - 1, currentImageIndex + 1))}
                      className="p-1.5 sm:p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors disabled:opacity-50"
                      disabled={currentImageIndex === selectedProduct.thumbnails.length - 1}
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right Side - Product Info */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Send Inquiry Button */}
                  <div className="pt-2 sm:pt-4">
                    <button className="w-full sm:w-auto bg-[#eb6379] hover:bg-[#d8566b] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                      Send Inquiry Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingInquiryForm />
    </main>
  );
}
