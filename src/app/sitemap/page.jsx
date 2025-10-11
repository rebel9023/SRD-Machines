'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import Link from 'next/link';

export default function Sitemap() {
  const sitemapData = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/", description: "Our homepage with company overview and featured products" },
        { name: "About Us", href: "/about", description: "Learn about our company history, mission, and leadership team" },
        { name: "Our Products", href: "/products", description: "Explore our comprehensive range of precision machinery" },
        { name: "Contact Us", href: "/contact", description: "Get in touch with our team for inquiries and support" },
        { name: "Blog", href: "/blog", description: "Latest articles and insights from the manufacturing industry" },
        { name: "Sitemap", href: "/sitemap", description: "Complete site navigation and page structure" }
      ]
    },
    {
      title: "Product Categories",
      links: [
        { name: "Grinding Machines", href: "/products#grinding", description: "High-precision grinding machines for industrial applications" },
        { name: "Turning Machines", href: "/products#turning", description: "Advanced turning machines with PLC and CNC control" },
        { name: "CNC Machines", href: "/products#cnc", description: "Computer Numerical Control machines for precision manufacturing" },
        { name: "Measuring Machines", href: "/products#measuring", description: "Automated measuring systems for quality control" },
        { name: "Washing Machines", href: "/products#washing", description: "Industrial washing systems for parts cleaning" },
        { name: "Packing Machines", href: "/products#packing", description: "Automated packing solutions for industrial products" },
        { name: "Pipe Cutting Machines", href: "/products#cutting", description: "Precision pipe cutting machines for various materials" },
        { name: "Lathe Machines", href: "/products#lathe", description: "High-speed automatic lathe machines for mass production" }
      ]
    },
    {
      title: "Company Information",
      links: [
        { name: "Our History", href: "/about#history", description: "Timeline of our company's development and milestones" },
        { name: "Leadership Team", href: "/about#team", description: "Meet our experienced leadership and management team" },
        { name: "Vision & Mission", href: "/about#vision", description: "Our company vision, mission, and core values" },
        { name: "Quality Standards", href: "/about#quality", description: "Our commitment to quality and industry certifications" },
        { name: "Manufacturing Facility", href: "/about#facility", description: "Information about our state-of-the-art manufacturing facility" }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        title="Sitemap"
        description="Navigate through our website easily with our comprehensive sitemap. Find all pages, products, and resources in one place."
        backgroundImage="/images/working.png"
        showVerticalLine={false}
      />

      {/* Sitemap Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Site Navigation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore all sections of our website organized by category for easy navigation and discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapData.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="block group"
                      >
                        <div className="text-[#F26D83] font-medium group-hover:text-[#DD394F] transition-colors mb-1">
                          {link.name}
                        </div>
                        <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          {link.description}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Quick Links
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Access the most important pages and resources quickly.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/products"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 card-hover text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#F26D83] to-[#DD394F] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Products</span>
            </Link>

            <Link
              href="/contact"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 card-hover text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#F26D83] to-[#DD394F] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Contact</span>
            </Link>

            <Link
              href="/about"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 card-hover text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#F26D83] to-[#DD394F] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">About</span>
            </Link>

            <Link
              href="#"
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 card-hover text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#F26D83] to-[#DD394F] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Blog</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
