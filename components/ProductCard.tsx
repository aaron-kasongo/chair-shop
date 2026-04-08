'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Heart } from 'lucide-react';
import { Product } from '../lib/types';
import { formatPrice } from '../lib/utils';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  showQuickAdd?: boolean;
}

export default function ProductCard({ product, showQuickAdd = true }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleQuickAdd = () => {
    const defaultVariant = product.variants.find(v => v.inStock) || product.variants[0];
    addToCart(product, defaultVariant, 1);
  };

  const discountPercentage = product.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#EBE3D8]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#F9F6F0]">
        <Link href={`/products/${product.id}`}>
          <div className="relative h-64">
            <Image
              src={product.images[selectedImageIndex]}
              alt={product.name}
              fill
              className={`object-cover transition-transform duration-500 ${
                isHovered ? 'scale-105' : 'scale-100'
              }`}
            />
            
            {product.images.length > 1 && isHovered && (
              <div className="absolute bottom-2 right-2 flex gap-1">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      selectedImageIndex === index ? 'bg-[#8B6946]' : 'bg-white/60'
                    }`}
                  />
                ))}
              </div>
            )}

            {discountPercentage > 0 && (
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                -{discountPercentage}%
              </div>
            )}

            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="bg-white text-[#2C241A] px-4 py-2 rounded-full font-medium">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
        </Link>

        <button
          onClick={(e) => {
            e.preventDefault();
            // Add to wishlist functionality
          }}
          className="absolute top-2 right-2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition opacity-0 group-hover:opacity-100"
        >
          <Heart className="w-4 h-4 text-[#2C241A]" />
        </button>
      </div>

      <div className="p-5">
        <Link href={`/products/${product.id}`}>
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-xl text-[#2C241A] hover:text-[#9C7B5C] transition">
                {product.name}
              </h3>
              <p className="text-[#7C6854] text-sm mt-1">{product.material}</p>
            </div>
            <div className="text-right ml-4">
              <span className="font-bold text-lg text-[#2C241A]">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="block text-sm text-[#7C6854] line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
          </div>
        </Link>

        {showQuickAdd && product.inStock && (
          <button
            onClick={handleQuickAdd}
            className="w-full bg-[#F3EFE7] hover:bg-[#E7DFD3] text-[#2C241A] font-medium py-2.5 rounded-full transition flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Quick add
          </button>
        )}
      </div>
    </div>
  );
}
