'use client';

import { useState } from 'react';
import { Search, Grid, List } from 'lucide-react';
import { FilterOptions } from '../lib/types';

interface ProductSearchAndSortProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  sortBy: FilterOptions['sortBy'];
  onSortChange: (sort: FilterOptions['sortBy']) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  resultCount: number;
}

export default function ProductSearchAndSort({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  resultCount
}: ProductSearchAndSortProps) {
  return (
    <div className="bg-white rounded-xl border border-[#EBE3D8] p-4 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7C6854]" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-[#D6CDBF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
            />
          </div>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as FilterOptions['sortBy'])}
            className="px-4 py-2.5 border border-[#D6CDBF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent bg-white"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
            <option value="newest">Newest First</option>
          </select>

          {/* View Mode */}
          <div className="flex items-center gap-1 border border-[#D6CDBF] rounded-full p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-full transition ${
                viewMode === 'grid' ? 'bg-[#8B6946] text-white' : 'text-[#7C6854] hover:text-[#2C241A]'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-full transition ${
                viewMode === 'list' ? 'bg-[#8B6946] text-white' : 'text-[#7C6854] hover:text-[#2C241A]'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-4 text-sm text-[#7C6854]">
        {resultCount === 0 ? (
          <span>No products found</span>
        ) : (
          <span>Showing {resultCount} product{resultCount !== 1 ? 's' : ''}</span>
        )}
      </div>
    </div>
  );
}
