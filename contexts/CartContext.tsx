'use client';

import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Cart, CartItem, Product, ProductVariant } from '../lib/types';

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, variant: ProductVariant, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; variant: ProductVariant; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, variant, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.productId === product.id && item.variantId === variant.id
      );

      let newItems: CartItem[];
      
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const newItem: CartItem = {
          id: `${product.id}-${variant.id}-${Date.now()}`,
          productId: product.id,
          variantId: variant.id,
          quantity,
          product,
          variant
        };
        newItems = [...state.items, newItem];
      }

      const subtotal = newItems.reduce((sum, item) => sum + (item.variant.price * item.quantity), 0);
      const tax = subtotal * 0.08; // 8% tax
      const shipping = subtotal > 500 ? 0 : 35; // Free shipping over $500
      const total = subtotal + tax + shipping;

      return {
        items: newItems,
        subtotal,
        tax,
        shipping,
        total
      };
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      const subtotal = newItems.reduce((sum, item) => sum + (item.variant.price * item.quantity), 0);
      const tax = subtotal * 0.08;
      const shipping = subtotal > 500 ? 0 : 35;
      const total = subtotal + tax + shipping;

      return {
        items: newItems,
        subtotal,
        tax,
        shipping,
        total
      };
    }

    case 'UPDATE_QUANTITY': {
      const { itemId, quantity } = action.payload;
      
      if (quantity === 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: itemId });
      }

      const newItems = state.items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      );

      const subtotal = newItems.reduce((sum, item) => sum + (item.variant.price * item.quantity), 0);
      const tax = subtotal * 0.08;
      const shipping = subtotal > 500 ? 0 : 35;
      const total = subtotal + tax + shipping;

      return {
        items: newItems,
        subtotal,
        tax,
        shipping,
        total
      };
    }

    case 'CLEAR_CART':
      return {
        items: [],
        subtotal: 0,
        tax: 0,
        shipping: 0,
        total: 0
      };

    default:
      return state;
  }
};

const initialState: Cart = {
  items: [],
  subtotal: 0,
  tax: 0,
  shipping: 0,
  total: 0
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: Product, variant: ProductVariant, quantity: number) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, variant, quantity } });
  };

  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartItemCount = () => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
