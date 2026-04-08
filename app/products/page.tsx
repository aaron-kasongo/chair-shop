'use client';

import { useState, useMemo } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import ProductFilters from '../../components/ProductFilters';
import ProductSearchAndSort from '../../components/ProductSearchAndSort';
import { products } from '../../lib/data';
import { FilterOptions } from '../../lib/types';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 2000],
    collections: [],
    materials: [],
    colors: [],
    inStock: false,
    sortBy: 'featured'
  });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const maxPrice = Math.max(...products.map(p => p.price));

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Price filter
      const matchesPrice = product.price >= filters.priceRange[0] && 
                          product.price <= filters.priceRange[1];
      
      // Collection filter
      const matchesCollection = filters.collections.length === 0 || 
                               filters.collections.includes(product.collection);
      
      // Material filter
      const matchesMaterial = filters.materials.length === 0 || 
                              filters.materials.includes(product.material);
      
      // Color filter
      const matchesColor = filters.colors.length === 0 || 
                          product.colors.some(color => filters.colors.includes(color));
      
      // Stock filter
      const matchesStock = !filters.inStock || product.inStock;

      return matchesSearch && matchesPrice && matchesCollection && 
             matchesMaterial && matchesColor && matchesStock;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
          return b.id.localeCompare(a.id); // Simple ID-based sorting
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

    return filtered;
  }, [searchTerm, filters]);

  return (
    <div className="min-h-screen bg-[#FEFCF5]">
      <Header />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E1915]">All Products</h1>
          <p className="text-[#5A4A3A] mt-2">Discover our complete collection of handcrafted chairs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters
              filters={filters}
              onFiltersChange={setFilters}
              maxPrice={maxPrice}
            />
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <ProductSearchAndSort
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              sortBy={filters.sortBy}
              onSortChange={(sortBy) => setFilters({ ...filters, sortBy })}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              resultCount={filteredAndSortedProducts.length}
            />

            {/* Products Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredAndSortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl border border-[#EBE3D8] p-6 flex gap-6">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#2C241A] mb-2">{product.name}</h3>
                      <p className="text-[#7C6854] mb-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-[#2C241A]">${product.price}</span>
                        <button className="bg-[#F3EFE7] hover:bg-[#E7DFD3] text-[#2C241A] px-4 py-2 rounded-full font-medium transition">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl border border-[#EBE3D8]">
                <div className="w-16 h-16 bg-[#F3EFE7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#8B6946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#2C241A] mb-2">No products found</h3>
                <p className="text-[#5A4A3A] mb-4">Try adjusting your filters or search terms</p>
                <button
                  onClick={() => setFilters({
                    priceRange: [0, maxPrice],
                    collections: [],
                    materials: [],
                    colors: [],
                    inStock: false,
                    sortBy: 'featured'
                  })}
                  className="bg-[#8B6946] text-white px-6 py-2 rounded-full font-medium hover:bg-[#9C7B5C] transition"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
