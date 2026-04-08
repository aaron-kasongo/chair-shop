'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/lib/utils';
import { CreditCard, Truck, Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    saveInfo: false
  });

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FEFCF5]">
        <Header />
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-[#2C241A] mb-4">Your cart is empty</h1>
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout submission
    console.log('Checkout submitted:', formData);
    // In a real app, this would process payment via Stripe/etc.
  };

  const steps = [
    { id: 1, name: 'Contact', completed: false },
    { id: 2, name: 'Shipping', completed: false },
    { id: 3, name: 'Payment', completed: false }
  ];

  return (
    <div className="min-h-screen bg-[#FEFCF5]">
      <Header />
      
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {steps.map((stepItem, index) => (
              <div key={stepItem.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  step >= stepItem.id 
                    ? 'bg-[#8B6946] text-white' 
                    : 'bg-[#E6DFD3] text-[#7C6854]'
                }`}>
                  {stepItem.id}
                </div>
                <span className={`ml-2 text-sm ${
                  step >= stepItem.id ? 'text-[#2C241A]' : 'text-[#7C6854]'
                }`}>
                  {stepItem.name}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    step > stepItem.id ? 'bg-[#8B6946]' : 'bg-[#E6DFD3]'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              {step === 1 && (
                <div className="bg-white rounded-xl border border-[#EBE3D8] p-6">
                  <h2 className="text-xl font-semibold text-[#2C241A] mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C241A] mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#2C241A] mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2C241A] mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2C241A] mb-2">Phone (Optional)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-[#2C241A] text-white px-6 py-2 rounded-full font-medium hover:bg-[#4F3E2E] transition flex items-center gap-2"
                    >
                      Continue to Shipping
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Shipping Address */}
              {step === 2 && (
                <div className="bg-white rounded-xl border border-[#EBE3D8] p-6">
                  <h2 className="text-xl font-semibold text-[#2C241A] mb-6">Shipping Address</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C241A] mb-2">Street Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                        placeholder="123 Main St"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#2C241A] mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2C241A] mb-2">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                          placeholder="NY"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#2C241A] mb-2">ZIP Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                          placeholder="10001"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2C241A] mb-2">Country</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-[#9C7B5C] hover:text-[#8B6946] transition flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Contact
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-[#2C241A] text-white px-6 py-2 rounded-full font-medium hover:bg-[#4F3E2E] transition flex items-center gap-2"
                    >
                      Continue to Payment
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Payment Information */}
              {step === 3 && (
                <div className="bg-white rounded-xl border border-[#EBE3D8] p-6">
                  <h2 className="text-xl font-semibold text-[#2C241A] mb-6">Payment Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2C241A] mb-2">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 pr-12 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                          placeholder="4242 4242 4242 4242"
                        />
                        <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7C6854]" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2C241A] mb-2">Name on Card</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#2C241A] mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2C241A] mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-[#D6CDBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C7B5C] focus:border-transparent"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="saveInfo"
                        id="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#8B6946] border-[#D6CDBF] rounded focus:ring-[#8B6946]"
                      />
                      <label htmlFor="saveInfo" className="ml-2 text-sm text-[#5A4A3A]">
                        Save my information for faster checkout
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-[#9C7B5C] hover:text-[#8B6946] transition flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back to Shipping
                    </button>
                    <button
                      type="submit"
                      className="bg-[#2C241A] text-white px-6 py-2 rounded-full font-medium hover:bg-[#4F3E2E] transition"
                    >
                      Complete Order
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-[#EBE3D8] p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-[#2C241A] mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-[#5A4A3A]">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="text-[#2C241A] font-medium">
                      {formatPrice(item.variant.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#EBE3D8] pt-4 space-y-3 mb-6">
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
                <div className="flex justify-between text-lg font-semibold text-[#2C241A]">
                  <span>Total</span>
                  <span>{formatPrice(cart.total)}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-[#5A4A3A]">
                  <Shield className="w-4 h-4 text-[#8B6946]" />
                  <span>Secure SSL Encryption</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#5A4A3A]">
                  <Truck className="w-4 h-4 text-[#8B6946]" />
                  <span>Free Shipping on Orders $500+</span>
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
