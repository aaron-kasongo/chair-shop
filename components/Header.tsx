'use client';

import Link from 'next/link';
import { Heart, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function Header() {
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  return (
    <header className="sticky top-0 z-40 bg-[#FEFCF5]/95 backdrop-blur-sm border-b border-[#E6DFD3] shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#8B6946] rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16a1 1 0 11-2 0V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"/>
            </svg>
          </div>
          <span className="text-2xl font-semibold tracking-tight text-[#2C241A]">Chair</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-[#3A2E24] font-medium">
          <Link href="/" className="hover:text-[#9C7B5C] transition-colors duration-200">Home</Link>
          <Link href="/products" className="hover:text-[#9C7B5C] transition-colors duration-200">All Products</Link>
          <Link href="/contact" className="hover:text-[#9C7B5C] transition-colors duration-200">Contact</Link>
        </nav>

        <div className="flex items-center gap-5">
          <button className="relative text-[#2C241A] hover:text-[#9C7B5C] transition">
            <Heart className="w-5 h-5" />
          </button>
          
          <Link 
            href="/cart" 
            data-cart-button
            className="relative text-[#2C241A] hover:text-[#9C7B5C] transition"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#9C7B5C] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartItemCount > 9 ? '9+' : cartItemCount}
              </span>
            )}
          </Link>
          
          {/* <button className="hidden sm:flex items-center gap-2 border border-[#D6CDBF] rounded-full px-5 py-2 text-sm font-medium text-[#2C241A] hover:bg-[#F3EFE7] transition">
            <User className="w-4 h-4" />
            Sign in
          </button> */}
        </div>
      </div>
    </header>
  );
}
