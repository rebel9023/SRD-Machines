'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingInquiryForm from '../components/FloatingInquiryForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
    {/* Hero Section */}
    <section className="relative pt-24 pb-16 bg-white">
      <div className="max-w-[95%] mx-auto relative rounded-3xl overflow-hidden
                      h-64 sm:h-80 md:h-96 lg:h-[500px]">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero1.png')" }}
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
                <div className="w-0.5 sm:w-1 bg-gradient-to-b from-[#F26D83] to-[#DD394F] rounded-full self-stretch flex-shrink-0" />

                {/* Headings */}
                <div className="flex flex-col justify-center space-y-0.5 sm:space-y-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
                    Powering Progress with
                  </h1>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                    Cutting-Edge Machinery
                  </h2>
                </div>
              </div>

              {/* Paragraph */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                At SRD Machines, we engineer precision-driven 
                solutions that blend innovation, strength, and 
                reliability powering the future of industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Machine Showcase Video Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl group cursor-pointer">
            {/* Background Image - Machine */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: "url('/machines/machine1.png')" }}
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white">
                {/* Play Button */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-[#F26D83] to-[#DD394F] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-3xl">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                
                {/* Text Content */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Watch Our Machines in Action</h3>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-md mx-auto">
                  See our precision machinery at work in our state-of-the-art manufacturing facility
                </p>
                
                {/* Duration Badge */}
                <div className="mt-4 sm:mt-6">
                  <span className="inline-block bg-black/50 backdrop-blur-sm text-white text-xs sm:text-sm px-3 py-1 rounded-full border border-white/20">
                    ▶ 2:30
                  </span>
                </div>
              </div>
            </div>
            
            {/* Video Controls Overlay (Bottom) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white text-xs sm:text-sm font-medium">HD Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </button>
                  <button className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sharda Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sharda Industries
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Pioneers in Cutting-Edge Machinery Production. At SRD Machines (by Sharda Industries), 
              we specialize in high-performance bearing machinery, pipe-cutting machines, grinding machines, 
              and a wide range of construction-related equipment. Our commitment to innovation, precision, 
              and durability drives everything we do. Established with a vision to transform the machinery 
              industry, we’ve consistently evolved to meet the growing needs of our clients. Backed by 
              advanced technology and a passion for engineering excellence, our manufacturing facility delivers 
              robust and reliable machines tailored for peak performance.
            </p>
          </div>
        </section>

        {/* 4 Feature Rectangles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <img src="/images/price.png" alt="Competitive Price Icon" className="mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Competitive Price Icon</h3>
                <p className="text-gray-600">
                  Our commitment to delivering competitive prices is driven by our dedication to 
                  customer satisfaction and long-term partnerships.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <img src="/images/market.png" alt="Superior Quality Raw Material" className="mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Superior Quality Raw Material</h3>
                <p className="text-gray-600">
                  We understand that the quality of our end products depends on the 
                  quality of the raw materials we use.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <img src="/images/team.png" alt="Experienced Team of Professionals" className="mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Experienced Team of Professionals</h3>
                <p className="text-gray-600">
                  They have a deep understand of the nuances and complexities of our field, 
                  allowing them to navigate challenges.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-6">
                  <img src="/images/service.png" alt="Unmatched Customer Service" className="mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Unmatched Customer Service</h3>
                <p className="text-gray-600">
                  We are committed to providing our customers with products that not only meet 
                  but exceed their expectations.
                </p>
              </div>
            </div>
          </div>
        </section>


     {/* SPM Machine Supplier Section */}
      <section className="py-14 " style={{
    background: "linear-gradient(135deg, rgb(49,48,116) 0%, #1E1D54 70%, #F26D83 100%)",
  }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Left - Image */}
            <div className="flex justify-center">
              <img
                src="/images/supplier.png"
                alt="SPM Machine"
                className="w-4/5 h-full object-contain rounded-lg"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                SPM Machine Supplier in Gujarat
              </h2>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                We are the most versatile supplier of special purpose machines for bearing components in Gujarat. The main purpose of our machines in industries to find the best possible solution of mass production.
              </p>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                We have experience of more than 28 year in bearing industries. Hence, we can provide best possible solution for your requirements.
              </p>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                We manufactured the SPMs for Automatic - Turning, parting, grinding, Measuring, washing, packing to reduce operation time, tools & Tackles change over time, production loss with increase in production, efficiency, cycle time in mass production.
              </p>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                We provide best possible solutions for your problem/bottle necks with the easy and effective designed machines.
              </p>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed font-semibold">
                So, we say "visit us with the problems and take away the solutions in best possible ways".
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Our Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Product 1 */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/background.png')" }}
            ></div>

            {/* Foreground Image */}
            <div className="relative h-64 flex items-center justify-center">
              <img
                src="/machines/machine1.png"
                alt="Turning Machine 1"
                className="object-contain w-auto h-full"
              />
            </div>

            {/* Caption / Title */}
            <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-pink-600 p-4">
              <h3 className="text-white font-semibold text-center">
                Turning Machines (PLC/CNC)
              </h3>
            </div>
          </div>


            {/* Product 2 */}
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/background.png')" }}
            ></div>

            {/* Foreground Machine Image */}
            <div className="relative h-64 flex items-center justify-center">
              <img
                src="/machines/machine2.png"
                alt="Turning Machine 2"
                className="object-contain w-auto h-full"
              />
            </div>

            {/* Title Section */}
            <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-pink-600 p-4">
              <h3 className="text-white font-semibold text-center">
                Turning Machines (PLC/CNC)
              </h3>
            </div>
          </div>


          </div>
        </div>
      </section>

      <section className="py-0">
        <img
          src="/images/client_success.png"
          alt="Client Success Stories"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Where Quality Meets Expectations Section */}
        <section className="py-12 md:py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-xs md:text-sm text-gray-600 mb-2">Welcome to Sharda Industries</p>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
                "Where Quality Meets Expectations"
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left side - Map with Badge */}
              <div className="relative flex justify-center items-center">
                {/* Circular Badge */}
                <div className="absolute left-0 md:left-8 lg:left-12 top-3/4 -translate-y-1/2 z-10">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#eb6379] via-[#d8566b] to-[#c44a5a] shadow-2xl flex flex-col items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">1000+</div>
                      <div className="text-xs sm:text-sm font-semibold mt-1">CLIENT</div>
                      <div className="text-xs sm:text-sm font-semibold">TRUST US</div>
                    </div>
                  </div>
                </div>

                {/* Map Container with Pins */}
                <div className="relative w-full max-w-md md:max-w-lg ml-20 md:ml-24 lg:ml-28">
                  {/* India Map Image */}
                  <img
                    src="/images/map.png"
                    alt="India Map with Location Pins"
                    className="w-full h-auto"
                  />

                  {/* Location Pins Overlay */}
                  <div className="absolute inset-0">
                    {/* Pin 1 - Top North (Kashmir region) */}
                    <div className="absolute" style={{ top: '26%', left: '30%', transform: 'translateX(-50%)' }}>
                      <svg className="w-3 h-4 sm:w-4 sm:h-5" viewBox="0 0 14 20" fill="none">
                        <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#DC2626"/>
                        <circle cx="7" cy="7" r="3" fill="white"/>
                      </svg>
                    </div>

                    {/* Pin 2 - Punjab (Left side) */}
                    <div className="absolute" style={{ top: '33%', left: '17%', transform: 'translateX(-50%)' }}>
                      <svg className="w-3 h-4 sm:w-4 sm:h-5" viewBox="0 0 14 20" fill="none">
                        <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#DC2626"/>
                        <circle cx="7" cy="7" r="3" fill="white"/>
                      </svg>
                    </div>

                    {/* Pin 3 - Delhi/Haryana (Center) */}
                    <div className="absolute" style={{ top: '33%', left: '27%', transform: 'translateX(-50%)' }}>
                      <svg className="w-3 h-4 sm:w-4 sm:h-5" viewBox="0 0 14 20" fill="none">
                        <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#DC2626"/>
                        <circle cx="7" cy="7" r="3" fill="white"/>
                      </svg>
                    </div>

                    {/* Pin 4 - UP/East (Right side) */}
                    <div className="absolute" style={{ top: '33%', left: '37%', transform: 'translateX(-50%)' }}>
                      <svg className="w-3 h-4 sm:w-4 sm:h-5" viewBox="0 0 14 20" fill="none">
                        <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#DC2626"/>
                        <circle cx="7" cy="7" r="3" fill="white"/>
                      </svg>
                    </div>

                    {/* Pin 5 - Gujarat West (Far left) */}

                    <div className="absolute" style={{ top: '44%', left: '32%', transform: 'translateX(-50%)' }}>
                      <svg className="w-3 h-4 sm:w-4 sm:h-5" viewBox="0 0 14 20" fill="none">
                        <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#DC2626"/>
                        <circle cx="7" cy="7" r="3" fill="white"/>
                      </svg>
                    </div>

                    {/* Pin 6 - Gujarat/Rajasthan (Left center) */}
                    <div className="absolute" style={{ top: '46%', left: '09%', transform: 'translateX(-50%)' }}>
                      <svg className="w-3 h-4 sm:w-4 sm:h-5" viewBox="0 0 14 20" fill="none">
                        <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#DC2626"/>
                        <circle cx="7" cy="7" r="3" fill="white"/>
                      </svg>
                    </div>
                    

                    {/* Pin 7 - Gujarat/MP border (Left-center) */}
                    <div className="absolute" style={{ top: '48%', left: '12%', transform: 'translateX(-50%)' }}>
                      <svg className="w-3 h-4 sm:w-4 sm:h-5" viewBox="0 0 14 20" fill="none">
                        <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#DC2626"/>
                        <circle cx="7" cy="7" r="3" fill="white"/>
                      </svg>
                    </div>

                    {/* Pin 8 - MP/Central India */}
                    <div className="absolute" style={{ top: '47%', left: '16%', transform: 'translateX(-50%)' }}>
                      <svg className="w-3 h-4 sm:w-4 sm:h-5" viewBox="0 0 14 20" fill="none">
                        <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#DC2626"/>
                        <circle cx="7" cy="7" r="3" fill="white"/>
                      </svg>
                    </div>

                    {/* Pin 9 - Maharashtra (Lower left) */}
                    <div className="absolute" style={{ top: '54%', left: '21%', transform: 'translateX(-50%)' }}>
                      <svg className="w-3 h-4 sm:w-4 sm:h-5" viewBox="0 0 14 20" fill="none">
                        <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#DC2626"/>
                        <circle cx="7" cy="7" r="3" fill="white"/>
                      </svg>
                    </div>

                    {/* Pin 10 - Karnataka/South */}
                    <div className="absolute" style={{ top: '63%', left: '19%', transform: 'translateX(-50%)' }}>
                      <svg className="w-3 h-4 sm:w-4 sm:h-5" viewBox="0 0 14 20" fill="none">
                        <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#DC2626"/>
                        <circle cx="7" cy="7" r="3" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Information */}
              <div className="space-y-4 md:space-y-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 mt-2 bg-gray-900 rounded-full"></div>
                    <span className="ml-3 md:ml-4 text-gray-800 text-sm md:text-base lg:text-lg font-medium">Manufacturing plants in India</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 mt-2 bg-gray-900 rounded-full"></div>
                    <span className="ml-3 md:ml-4 text-gray-800 text-sm md:text-base lg:text-lg font-medium">Distributors in all major city</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 mt-2 bg-gray-900 rounded-full"></div>
                    <span className="ml-3 md:ml-4 text-gray-800 text-sm md:text-base lg:text-lg font-medium">Exporting products to more than 45 countries</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-1.5 h-1.5 md:w-2 md:h-2 mt-2 bg-gray-900 rounded-full"></div>
                    <span className="ml-3 md:ml-4 text-gray-800 text-sm md:text-base lg:text-lg font-medium">Importing technologies and machines of reputed brands from all over the world and distributing them throughout India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      <Footer />
      <FloatingInquiryForm />
    </main>
  );
}
