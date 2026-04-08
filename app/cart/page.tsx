'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useCart } from '../../contexts/CartContext';
import { formatPrice } from '../../lib/utils';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateQuantity(itemId, newQuantity);
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FEFCF5]">
        <Header />
        
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-[#F3EFE7] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#8B6946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-[#2C241A] mb-4">Your cart is empty</h1>
            <p className="text-[#5A4A3A] mb-8">Looks like you haven't added any chairs to your cart yet.</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#2C241A] text-white px-6 py-3 rounded-full font-medium hover:bg-[#4F3E2E] transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FEFCF5]">
      <Header />
      
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1E1915]">Shopping Cart</h1>
          <p className="text-[#5A4A3A] mt-1">{cart.items.length} item{cart.items.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-[#EBE3D8] p-6">
                <div className="flex gap-6">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg text-[#2C241A]">{item.product.name}</h3>
                        <p className="text-sm text-[#7C6854]">{item.variant.name}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-[#7C6854] hover:text-red-500 transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-[#D6CDBF] flex items-center justify-center hover:bg-[#F3EFE7] transition"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-[#D6CDBF] flex items-center justify-center hover:bg-[#F3EFE7] transition"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg text-[#2C241A]">
                          {formatPrice(item.variant.price * item.quantity)}
                        </p>
                        <p className="text-sm text-[#7C6854]">
                          {formatPrice(item.variant.price)} each
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-4">
              <button
                onClick={clearCart}
                className="text-[#7C6854] hover:text-red-500 transition text-sm"
              >
                Clear Cart
              </button>
              <Link
                href="/products"
                className="text-[#9C7B5C] hover:text-[#8B6946] transition text-sm"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-[#EBE3D8] p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-[#2C241A] mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[#5A4A3A]">
                  <span>Subtotal</span>
                  <span>{formatPrice(cart.subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#5A4A3A]">
                  <span>Shipping</span>
                  <span>{cart.shipping === 0 ? 'Free' : formatPrice(cart.shipping)}</span>
                </div>
                <div className="flex justify-between text-[#5A4A3A]">
                  <span>Tax</span>
                  <span>{formatPrice(cart.tax)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold text-[#2C241A] pt-3 border-t border-[#EBE3D8]">
                  <span>Total</span>
                  <span>{formatPrice(cart.total)}</span>
                </div>
              </div>

              {cart.shipping > 0 && (
                <div className="bg-[#F3EFE7] rounded-lg p-3 mb-6">
                  <p className="text-sm text-[#5A4A3A] text-center">
                    Add {formatPrice(500 - cart.subtotal)} more for free shipping
                  </p>
                </div>
              )}

              <button className="w-full bg-[#2C241A] text-white py-3 rounded-full font-medium hover:bg-[#4F3E2E] transition mb-4">
                Proceed to Checkout
              </button>

              <div className="text-center text-sm text-[#7C6854]">
                <p className="mb-2">Secure checkout powered by Stripe</p>
                <div className="flex justify-center gap-2">
                  <div className="w-8 h-5 bg-gray-200 rounded flex items-center justify-center text-xs">VISA</div>
                  <div className="w-8 h-5 bg-gray-200 rounded flex items-center justify-center text-xs">MC</div>
                  <div className="w-8 h-5 bg-gray-200 rounded flex items-center justify-center text-xs">AMEX</div>
                  <div className="w-8 h-5 bg-gray-200 rounded flex items-center justify-center text-xs">PP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
