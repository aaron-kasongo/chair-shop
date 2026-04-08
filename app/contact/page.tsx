'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FEFCF5]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9C7B5C] bg-[#F3EFE7] inline-block px-3 py-1 rounded-full">
              Get in touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E1915] mt-4 mb-4">
              Contact Us
            </h1>
            <p className="text-[#5A4A3A] text-lg max-w-2xl mx-auto">
              Questions about our products, a custom project, or just want to chat about design? 
              We're here to listen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-[#2C241A] mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2C241A] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent bg-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2C241A] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2C241A] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent bg-white"
                  >
                    <option value="">Choose a subject</option>
                    <option value="products">Product questions</option>
                    <option value="custom">Custom project</option>
                    <option value="shipping">Shipping & returns</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2C241A] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent bg-white resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#2C241A] hover:bg-[#4F3E2E] text-white px-6 py-3 rounded-full font-medium transition shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-[#2C241A] mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F3EFE7] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#8B6946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2C241A] mb-1">Email</h3>
                      <p className="text-[#5A4A3A]">contact@chair.com</p>
                      <p className="text-sm text-[#5A4A3A] mt-1">Response within 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F3EFE7] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#8B6946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2C241A] mb-1">Téléphone</h3>
                      <p className="text-[#5A4A3A]">+1 555 123 4567</p>
                      <p className="text-sm text-[#5A4A3A] mt-1">Mon-Fri: 9am-6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F3EFE7] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#8B6946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2C241A] mb-1">Showroom</h3>
                      <p className="text-[#5A4A3A]">123 Design Street</p>
                      <p className="text-[#5A4A3A]">10001 New York, NY</p>
                      <p className="text-sm text-[#5A4A3A] mt-1">Open by appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F3EFE7] rounded-2xl p-6">
                <h3 className="font-semibold text-[#2C241A] mb-3">Opening Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#5A4A3A]">Monday - Friday</span>
                    <span className="text-[#2C241A] font-medium">9am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5A4A3A]">Saturday</span>
                    <span className="text-[#2C241A] font-medium">10am - 5pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5A4A3A]">Sunday</span>
                    <span className="text-[#2C241A] font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#2C241A] text-white rounded-2xl p-6">
                <h3 className="font-semibold mb-3">Need help quickly?</h3>
                <p className="text-[#DCD0C2] text-sm mb-4">
                  Check our FAQ to find answers to the most common questions.
                </p>
                <button className="bg-[#9C7B5C] hover:bg-[#B48C68] text-white px-4 py-2 rounded-full text-sm font-medium transition">
                  View FAQ
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
