'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Manufacturing: Automation Trends 2024",
      excerpt: "Explore the latest trends in manufacturing automation and how they're shaping the industry.",
      date: "March 15, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "CNC vs Traditional Machining: Which is Right for You?",
      excerpt: "A comprehensive comparison of CNC and traditional machining methods to help you make the right choice.",
      date: "March 10, 2024",
      category: "Machining",
      image: "https://images.unsplash.com/photo-1565814644575-2d8b1a0b8b5a?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Quality Control in Precision Manufacturing",
      excerpt: "Learn about the importance of quality control in precision manufacturing and best practices.",
      date: "March 5, 2024",
      category: "Quality",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Sustainable Manufacturing: Green Solutions",
      excerpt: "Discover how sustainable manufacturing practices can benefit your business and the environment.",
      date: "February 28, 2024",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1565814644575-2d8b1a0b8b5a?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Maintenance Tips for Industrial Machinery",
      excerpt: "Essential maintenance tips to keep your industrial machinery running at peak performance.",
      date: "February 20, 2024",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Industry 4.0: The Smart Factory Revolution",
      excerpt: "Understanding Industry 4.0 and how smart factories are revolutionizing manufacturing.",
      date: "February 15, 2024",
      category: "Industry 4.0",
      image: "https://images.unsplash.com/photo-1565814644575-2d8b1a0b8b5a?w=500&h=300&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        title="Blog"
        description="Stay updated with the latest insights, trends, and innovations in the manufacturing industry."
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
        showVerticalLine={false}
      />

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our collection of articles covering manufacturing trends, technology insights, and industry best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest articles and industry insights directly in your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
