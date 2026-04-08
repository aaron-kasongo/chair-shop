'use client';

import { useState } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { FilterOptions } from '../lib/types';

interface ProductFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  maxPrice: number;
}

export default function ProductFilters({ filters, onFiltersChange, maxPrice }: ProductFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const collections = ['minimalist', 'mid-century', 'luxe-velvet', 'outdoor', 'artisan-woven'];
  const materials = ['Walnut Wood', 'Oak Wood', 'Velvet', 'Leather', 'Rattan', 'Ash Wood'];
  const colors = ['Walnut', 'Natural', 'Black', 'Emerald', 'Gray', 'Brown'];

  const handlePriceRangeChange = (index: number, value: number) => {
    const newPriceRange: [number, number] = [...filters.priceRange];
    newPriceRange[index] = value;
    onFiltersChange({ ...filters, priceRange: newPriceRange });
  };

  const handleCollectionToggle = (collection: string) => {
    const newCollections = filters.collections.includes(collection)
      ? filters.collections.filter(c => c !== collection)
      : [...filters.collections, collection];
    onFiltersChange({ ...filters, collections: newCollections });
  };

  const handleMaterialToggle = (material: string) => {
    const newMaterials = filters.materials.includes(material)
      ? filters.materials.filter(m => m !== material)
      : [...filters.materials, material];
    onFiltersChange({ ...filters, materials: newMaterials });
  };

  const handleColorToggle = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    onFiltersChange({ ...filters, colors: newColors });
  };

  const clearFilters = () => {
    onFiltersChange({
      priceRange: [0, maxPrice],
      collections: [],
      materials: [],
      colors: [],
      inStock: false,
      sortBy: 'featured'
    });
  };

  const hasActiveFilters = filters.collections.length > 0 || 
                          filters.materials.length > 0 || 
                          filters.colors.length > 0 || 
                          filters.inStock ||
                          filters.priceRange[0] > 0 || 
                          filters.priceRange[1] < maxPrice;

  return (
    <div className="bg-white rounded-xl border border-[#EBE3D8] p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-[#8B6946]" />
          <h3 className="font-semibold text-[#2C241A]">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-[#9C7B5C] hover:text-[#8B6946] transition"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between py-2 text-[#2C241A]"
        >
          <span className="font-medium">Filters</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className={`${isExpanded ? 'block' : 'hidden'} lg:block space-y-6`}>
        {/* Price Range */}
        <div>
          <h4 className="font-medium text-[#2C241A] mb-3">Price Range</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#7C6854]">$</span>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceRangeChange(0, Number(e.target.value))}
                className="flex-1 accent-[#8B6946] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#8B6946] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#8B6946] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
              />
              <span className="text-sm font-medium text-[#2C241A] w-16 text-right">
                ${filters.priceRange[0]}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#7C6854]">$</span>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceRangeChange(1, Number(e.target.value))}
                className="flex-1 accent-[#8B6946] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#8B6946] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#8B6946] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0"
              />
              <span className="text-sm font-medium text-[#2C241A] w-16 text-right">
                ${filters.priceRange[1]}
              </span>
            </div>
          </div>
        </div>

        {/* Collections */}
        <div>
          <h4 className="font-medium text-[#2C241A] mb-3">Collections</h4>
          <div className="space-y-2">
            {collections.map((collection) => (
              <label key={collection} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.collections.includes(collection)}
                  onChange={() => handleCollectionToggle(collection)}
                  className="w-4 h-4 accent-[#8B6946] border-[#D6CDBF] rounded focus:ring-2 focus:ring-[#8B6946]/50"
                />
                <span className="text-sm text-[#5A4A3A] capitalize">{collection.replace('-', ' ')}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div>
          <h4 className="font-medium text-[#2C241A] mb-3">Materials</h4>
          <div className="space-y-2">
            {materials.map((material) => (
              <label key={material} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.materials.includes(material)}
                  onChange={() => handleMaterialToggle(material)}
                  className="w-4 h-4 accent-[#8B6946] border-[#D6CDBF] rounded focus:ring-2 focus:ring-[#8B6946]/50"
                />
                <span className="text-sm text-[#5A4A3A]">{material}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <h4 className="font-medium text-[#2C241A] mb-3">Colors</h4>
          <div className="space-y-2">
            {colors.map((color) => (
              <label key={color} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.colors.includes(color)}
                  onChange={() => handleColorToggle(color)}
                  className="w-4 h-4 accent-[#8B6946] border-[#D6CDBF] rounded focus:ring-2 focus:ring-[#8B6946]/50"
                />
                <span className="text-sm text-[#5A4A3A]">{color}</span>
              </label>
            ))}
          </div>
        </div>

        {/* In Stock */}
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={(e) => onFiltersChange({ ...filters, inStock: e.target.checked })}
              className="w-4 h-4 accent-[#8B6946] border-[#D6CDBF] rounded focus:ring-2 focus:ring-[#8B6946]/50"
            />
            <span className="text-sm text-[#5A4A3A]">In Stock Only</span>
          </label>
        </div>
      </div>
    </div>
  );
}
