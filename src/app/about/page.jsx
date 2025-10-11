'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import FloatingInquiryForm from '../../components/FloatingInquiryForm';

export default function About() {
  const timelineEvents = [
    { year: '1997', description: 'SRD Machines was founded with a vision to revolutionize the machinery industry through innovation and quality.' },
    { year: '2000', description: 'Expanded our product line to include automated turning machines and grinding solutions.' },
    { year: '2005', description: 'Established our first manufacturing facility in Gujarat, marking a significant milestone in our growth journey.' },
    { year: '2007', description: 'Launched our CNC-based automation systems, setting new standards in precision engineering.' },
    { year: '2010', description: 'Achieved ISO certification and expanded our market presence across India.' },
    { year: '2015-2020', description: 'Rapid expansion phase with new product launches and international partnerships. Introduced smart manufacturing solutions.' },
    { year: '2021-2025', description: 'Focus on sustainable manufacturing practices and Industry 4.0 integration. Expanded export operations to over 40 countries.' },
    { year: '2022', description: 'Crossed the milestone of 1000+ satisfied clients across various industries.' },
    { year: '2025', description: 'Continuing our journey towards becoming a global leader in precision machinery manufacturing.' },
  ];

  const teamMembers = [
    { name: 'Ashwin Patel', role: 'Founder & Managing Director', image: '/team/ashwin.png' },
    { name: 'Nachiket Patel', role: 'Operations Head', image: '/team/viralt.png' },
    { name: 'Viral Patel', role: 'Technical Director', image: '/team/viral.png' },
    { name: 'Rahul Nayak', role: 'Production Manager', image: '/team/rahul.png' },
    { name: 'Paras Chauhan', role: 'Quality Control Head', image: '/team/paras.png' },
    { name: 'Dhaval Patel', role: 'Sales Manager', image: '/team/dhaval.png' },
    // { name: 'Harshal Shah', role: 'Design Engineer', image: '/team/harshal.png' },
    { name: 'Kirtan Patel', role: 'Service Manager', image: '/team/kirtan.png' },
    // { name: 'Jignesh Pawar', role: 'Marketing Head', image: '/team/jignesh.png' },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
  {/* About Hero Section */}
  <section className="relative pt-24 pb-16 bg-white">
        <div className="max-w-[95%] mx-auto relative rounded-3xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[600px]">
          <Image
            src="/images/aboutus.jpg"
            alt="About Us"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgb(49,48,116) 0%, #1E1D54 70%, #F26D83 100%)",
            opacity: 0.65,
          }}
        />
        </div>
      </section>




      {/* About Section - Inside Container */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-1 h-16 bg-gradient-to-b from-[#F26D83] to-[#DD394F] rounded-full flex-shrink-0" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About us
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              SRD Machines (by Sharda Industries) is a leading supplier of versatile Special Purpose Machines (SPMs) for bearing components in Gujarat. Our machines are designed to deliver the most efficient solutions for mass production in the bearing industry. With over three decades of experience, we specialize in providing innovative solutions that boost production, enhance efficiency, and reduce cycle time, all while ensuring cost-effectiveness.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Our SPMs cater to automatic operations such as turning, parting, grinding, measuring, washing, and packing. These machines are engineered to minimize operation time, reduce tools and tackle changeover, and prevent production losses, making them ideal for optimizing mass production processes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              We provide effective and efficient solutions to address your challenges and bottlenecks with our expertly designed machines.
            </p>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-16" style={{
    background: "linear-gradient(135deg, rgb(49,48,116) 0%, #1E1D54 70%, #F26D83 100%)",
  }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="absolute top-0 left-8 text-[#F26D83] text-6xl font-serif">"</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Motto</h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            Bring us your problems, and walk away with the best possible solutions.
          </p>
          <div className="absolute bottom-0 right-8 text-[#F26D83] text-6xl font-serif">"</div>
        </div>
      </section>

      {/* Development History Timeline */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
            Development History
          </h2>
          
          {/* Mobile Timeline */}
          <div className="block md:hidden">
            <div className="relative">
              {/* Left Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F26D83] to-[#DD394F]" />
              
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Dot */}
                    <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-[#F26D83] to-[#DD394F] rounded-full border-4 border-white shadow-lg z-10" />
                    
                    {/* Content */}
                    <div className="ml-12 w-full">
                      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{event.year}</h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#F26D83] to-[#DD394F]" />
              
              {/* Timeline Events */}
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-6' : 'text-left pl-6'}`}>
                      <div className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{event.year}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                    
                    {/* Center Dot */}
                    <div className="w-2/12 flex justify-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#F26D83] to-[#DD394F] rounded-full border-2 border-white shadow-md z-10" />
                    </div>
                    
                    {/* Empty Space */}
                    <div className="w-5/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20" style={{
    background: "linear-gradient(135deg, rgb(49,48,116) 0%, #1E1D54 70%, #F26D83 100%)",
  }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 mx-auto lg:mx-0 mb-6">
                <img src="/images/eye.png" alt="Vision" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Vision</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                To be the global leader in precision machinery manufacturing, setting new standards for innovation, quality, and customer satisfaction in the industrial automation sector.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 mx-auto lg:mx-0 mb-6">
                <img src="/images/mission.png" alt="Mission" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Mission</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                To deliver cutting-edge machinery solutions that enhance productivity, reduce costs, and drive sustainable growth for our clients while maintaining the highest standards of quality and service.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Leadership Team */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
      Leadership Team
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {teamMembers.map((member, index) => (
        <div key={index} className="relative w-[240px]">
          {/* Profile Image */}
          <div className="relative z-10 w-[140px] h-[140px] rounded-full overflow-hidden mx-auto mb-[-70px] shadow-lg bg-gray-200">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="140" height="140"%3E%3Crect fill="%23e5e7eb" width="140" height="140"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="36" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E?%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
          
          {/* Card Outer - Fixed Height */}
          <div className="relative bg-white rounded-2xl p-2.5 shadow-md h-[160px]">
            {/* Card Inner with Border - Fixed Height */}
            <div className="border-2 border-[#fca5a5] rounded-xl pt-[75px] pb-4 px-4 text-center h-full flex flex-col justify-end">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-0 tracking-tight leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[#f87171] tracking-wide">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
     <Footer />
      <FloatingInquiryForm />
    </main>
  );
}