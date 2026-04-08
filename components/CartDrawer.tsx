'use client';

import { useState } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity >= 0) {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#FEFCF5] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E6DFD3]">
            <h2 className="text-2xl font-semibold text-[#2C241A]">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#F3EFE7] rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-[#2C241A]" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.items.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#F3EFE7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#8B6946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-[#5A4A3A] mb-4">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="bg-[#2C241A] text-white px-6 py-2 rounded-full font-medium hover:bg-[#4F3E2E] transition"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white p-4 rounded-xl border border-[#EBE3D8]">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#2C241A]">{item.product.name}</h3>
                      <p className="text-sm text-[#7C6854]">{item.variant.name}</p>
                      <p className="font-semibold text-[#2C241A] mt-1">{formatPrice(item.variant.price)}</p>
                      
                      <div className="flex items-center gap-2 mt-3">
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
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto p-2 text-[#7C6854] hover:text-red-500 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.items.length > 0 && (
            <div className="border-t border-[#E6DFD3] p-6 bg-white">
              <div className="space-y-2 mb-4">
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
                <div className="flex justify-between text-lg font-semibold text-[#2C241A] pt-2 border-t">
                  <span>Total</span>
                  <span>{formatPrice(cart.total)}</span>
                </div>
              </div>
              
              <button className="w-full bg-[#2C241A] text-white py-3 rounded-full font-medium hover:bg-[#4F3E2E] transition">
                Checkout
              </button>
              
              {cart.shipping > 0 && (
                <p className="text-xs text-[#7C6854] text-center mt-2">
                  Add {formatPrice(500 - cart.subtotal)} more for free shipping
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
