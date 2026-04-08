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
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#9c7b5c" d="M248 320L248 138.2C223.5 158.7 208 189.6 208 224L208 320L248 320zM296 320L344 320L344 114.6C336.3 112.9 328.2 112 320 112C311.8 112 303.7 112.9 296 114.6L296 320zM392 138.2L392 320L432 320L432 224C432 189.6 416.5 158.8 392 138.2zM128 320L160 320L160 224C160 135.6 231.6 64 320 64C408.4 64 480 135.6 480 224L480 320L512 320C529.7 320 544 334.3 544 352L544 416C544 433.7 529.7 448 512 448L512 544C512 561.7 497.7 576 480 576C462.3 576 448 561.7 448 544L448 448L192 448L192 544C192 561.7 177.7 576 160 576C142.3 576 128 561.7 128 544L128 448C110.3 448 96 433.7 96 416L96 352C96 334.3 110.3 320 128 320z"/></svg>
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
