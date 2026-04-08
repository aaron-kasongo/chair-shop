'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Minus, Plus, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { Product, ProductVariant } from '../lib/types';
import { formatPrice } from '../lib/utils';
import { useCart } from '../contexts/CartContext';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants.find(v => v.inStock) || product.variants[0]
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const discountPercentage = product.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8">
      <nav className="text-sm text-[#7C6854] mb-8">
        <Link href="/" className="hover:text-[#9C7B5C]">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-[#9C7B5C]">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-[#2C241A]">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-[#F9F6F0] rounded-2xl overflow-hidden">
            <Image
              src={product.images[selectedImageIndex]}
              alt={product.name}
              fill
              className="object-cover"
            />
            
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {discountPercentage > 0 && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                -{discountPercentage}% OFF
              </div>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                    selectedImageIndex === index ? 'border-[#8B6946]' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1E1915] mb-2">{product.name}</h1>
            <p className="text-[#7C6854] text-lg">{product.material}</p>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-[#2C241A]">{formatPrice(selectedVariant.price)}</span>
            {product.compareAtPrice && (
              <span className="text-lg text-[#7C6854] line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>

          <div className="prose prose-sm text-[#5A4A3A] leading-relaxed">
            <p>{product.description}</p>
          </div>

          {/* Variant Selection */}
          {product.variants.length > 1 && (
            <div className="space-y-4">
              {product.colors.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-[#2C241A] mb-2">Color</label>
                  <div className="flex gap-2">
                    {product.colors.map((color) => {
                      const variant = product.variants.find(v => v.color === color);
                      return (
                        <button
                          key={color}
                          onClick={() => variant && setSelectedVariant(variant)}
                          disabled={!variant?.inStock}
                          className={`px-4 py-2 rounded-full border transition ${
                            selectedVariant.color === color
                              ? 'border-[#8B6946] bg-[#F3EFE7]'
                              : 'border-[#D6CDBF] hover:border-[#9C7B5C]'
                          } ${!variant?.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {color}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#2C241A] mb-2">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-[#D6CDBF] flex items-center justify-center hover:bg-[#F3EFE7] transition"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-[#D6CDBF] flex items-center justify-center hover:bg-[#F3EFE7] transition"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!selectedVariant.inStock}
              className={`w-full py-3 rounded-full font-medium transition flex items-center justify-center gap-2 ${
                selectedVariant.inStock
                  ? 'bg-[#2C241A] text-white hover:bg-[#4F3E2E]'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              {selectedVariant.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 border border-[#D6CDBF] rounded-full py-2.5 font-medium text-[#2C241A] hover:bg-[#F3EFE7] transition flex items-center justify-center gap-2">
              <Heart className="w-4 h-4" />
              Wishlist
            </button>
            <button className="flex-1 border border-[#D6CDBF] rounded-full py-2.5 font-medium text-[#2C241A] hover:bg-[#F3EFE7] transition flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#EBE3D8]">
            <div className="text-center">
              <Truck className="w-6 h-6 text-[#8B6946] mx-auto mb-2" />
              <p className="text-sm text-[#5A4A3A]">Free Shipping</p>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 text-[#8B6946] mx-auto mb-2" />
              <p className="text-sm text-[#5A4A3A]">2 Year Warranty</p>
            </div>
            <div className="text-center">
              <RotateCcw className="w-6 h-6 text-[#8B6946] mx-auto mb-2" />
              <p className="text-sm text-[#5A4A3A]">100 Day Returns</p>
            </div>
          </div>

          {/* Product Details */}
          <div className="pt-6 border-t border-[#EBE3D8] space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#7C6854]">Category</span>
              <span className="text-[#2C241A] font-medium">{product.category}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#7C6854]">Collection</span>
              <span className="text-[#2C241A] font-medium capitalize">{product.collection}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#7C6854]">Material</span>
              <span className="text-[#2C241A] font-medium">{product.material}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#7C6854]">Availability</span>
              <span className={`font-medium ${selectedVariant.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {selectedVariant.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
