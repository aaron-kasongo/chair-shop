'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import CollectionSlider from '../components/CollectionSlider';
import { collections, getFeaturedProducts } from '../lib/data';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-[#FEFCF5]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-12 pb-8 md:pt-16 md:pb-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-block text-sm uppercase tracking-wider text-[#9C7B5C] font-semibold bg-[#F3EFE7] px-3 py-1 rounded-full">
                Timeless design
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1915] leading-tight">
                Chairs that <br />shape comfort.
              </h1>
              <p className="text-[#5A4A3A] text-lg max-w-md leading-relaxed">
                Sculptural forms, sustainable materials, and ergonomic excellence — for living beautifully.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#products" 
                  className="bg-[#2C241A] hover:bg-[#4F3E2E] text-white px-7 py-3 rounded-full font-medium transition shadow-md inline-flex items-center"
                >
                  Shop Collection →
                </a>
                <a 
                  href="#about" 
                  className="border border-[#CBBFAE] bg-white/60 hover:bg-white px-7 py-3 rounded-full font-medium text-[#2C241A] transition inline-flex items-center"
                >
                  Discover story
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Elegant modern chair"
                className="hero-img w-full h-full object-cover aspect-[4/3] md:aspect-auto transition duration-700 ease-out"
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#9C7B5C] bg-[#F3EFE7] inline-block px-3 py-1 rounded-full">
              Curated picks
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1915] mt-4">
              Signature seating
            </h2>
            <p className="text-[#5A4A3A] max-w-xl mx-auto mt-2">
              Each piece crafted with intention — timeless silhouettes meet everyday comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/products" 
              className="inline-flex items-center gap-2 border-b border-[#9C7B5C] pb-1 text-[#2C241A] font-medium hover:text-[#9C7B5C] transition"
            >
              View all products 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Collections Slider */}
        <section id="collections" className="bg-[#F9F6F0] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#9C7B5C] bg-white/60 inline-block px-3 py-1 rounded-full">
                Shop by universe
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E1915] mt-3">
                All collections
              </h2>
              <p className="text-[#5A4A3A] max-w-xl mx-auto mt-2">
                Explore our families — slide through the essence of Chair.
              </p>
            </div>
            <CollectionSlider collections={collections} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#9C7B5C] bg-[#F3EFE7] inline-block px-3 py-1 rounded-full">
                Our story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E1915] mt-4 mb-5">
                Who we are — <br />crafted with intention.
              </h2>
              <p className="text-[#5A4A3A] leading-relaxed mb-4">
                Founded in 2020, Chair is more than furniture: we are a collective of designers, artisans, and thinkers who believe that the objects we live with shape our daily rituals. Every chair, stool, and sofa is made in small batches using FSC-certified wood, recycled fabrics, and low-impact finishes.
              </p>
              <p className="text-[#5A4A3A] leading-relaxed mb-6">
                We work directly with workshops in Portugal and Vermont to ensure ethical production, timeless durability, and a deep respect for material truth. Our pieces are built to last decades — not seasons.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-[#2C241A] font-medium border-b border-[#9C7B5C] pb-1 hover:text-[#9C7B5C] transition"
              >
                Meet the makers 
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/6046575/pexels-photo-6046575.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artisans working on furniture"
                className="w-full object-cover h-80 md:h-[420px]"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="bg-white py-16 md:py-20 border-y border-[#EBE3D8]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#9C7B5C] bg-[#F3EFE7] inline-block px-3 py-1 rounded-full">
                Why Chair
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E1915] mt-3">
                Mission & values
              </h2>
              <p className="text-[#5A4A3A] mt-2">
                Driven by responsibility, craftsmanship, and human-centered design.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-[#FEFCF5] border border-[#EBE3D8] hover:shadow-md transition">
                <div className="w-14 h-14 bg-[#F3EFE7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#8B6946]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#2C241A]">Sustainable soul</h3>
                <p className="text-[#5A4A3A] text-sm mt-2 leading-relaxed">
                  We prioritize recycled textiles, natural wood sources, and plastic‑free packaging. Circular design is our north star.
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-[#FEFCF5] border border-[#EBE3D8] hover:shadow-md transition">
                <div className="w-14 h-14 bg-[#F3EFE7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#8B6946]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#2C241A]">Ethical craft</h3>
                <p className="text-[#5A4A3A] text-sm mt-2 leading-relaxed">
                  Every piece is made in fair-wage workshops. We celebrate imperfections that tell a story of human hands.
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-[#FEFCF5] border border-[#EBE3D8] hover:shadow-md transition">
                <div className="w-14 h-14 bg-[#F3EFE7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#8B6946]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#2C241A]">Timeless design</h3>
                <p className="text-[#5A4A3A] text-sm mt-2 leading-relaxed">
                  We reject fast furniture trends. Our forms evolve slowly, focusing on ergonomics, modularity, and emotional resonance.
                </p>
              </div>
            </div>
            <div className="mt-12 bg-[#F3EFE7] rounded-2xl p-8 text-center max-w-3xl mx-auto">
              <svg className="w-8 h-8 text-[#9C7B5C] opacity-50 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
              </svg>
              <p className="text-[#2C241A] text-lg italic">
                "Our mission is to create furniture that brings harmony to homes and respects the planet — one thoughtful chair at a time."
              </p>
              <p className="text-sm font-medium text-[#8B6946] mt-3">
                — Chair studio manifesto
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability Badges */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-[#9C7B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <h4 className="font-semibold text-[#2C241A]">Free shipping</h4>
              <p className="text-sm text-[#5A4A3A]">On orders over $500 (continental US)</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-[#9C7B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <h4 className="font-semibold text-[#2C241A]">100 day trial</h4>
              <p className="text-sm text-[#5A4A3A]">Sit on it. Love it, or return it.</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-[#9C7B5C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-semibold text-[#2C241A]">Carbon-neutral</h4>
              <p className="text-sm text-[#5A4A3A]">We offset 100% of our footprint</p>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-[#2C241A] text-white py-16">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <svg className="w-8 h-8 text-[#CBBFAE] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h2 className="text-2xl md:text-3xl font-semibold">Join the Chair community</h2>
            <p className="text-[#DCD0C2] max-w-md mx-auto mt-2">
              Get early access to new collections, design notes & 10% off your first order.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-5 py-3 rounded-full text-[#2C241A] bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#9C7B5C]"
              />
              <button className="bg-[#9C7B5C] hover:bg-[#B48C68] text-white px-6 py-3 rounded-full font-medium transition">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-[#CBBFAE] mt-4">No spam, only timeless inspiration.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
