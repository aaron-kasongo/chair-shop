export interface Product {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  images: string[];
  category: string;
  collection: string;
  material: string;
  colors: string[];
  inStock: boolean;
  variants: ProductVariant[];
  featured: boolean;
  tags: string[];
}

export interface ProductVariant {
  id: string;
  productId: string;
  name: string;
  price: number;
  color?: string;
  material?: string;
  size?: string;
  inStock: boolean;
  image?: string;
}

export interface Collection {
  id: string;
  name: string;
  handle: string;
  description: string;
  image: string;
  productCount: number;
  featured: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  quantity: number;
  product: Product;
  variant: ProductVariant;
}

export interface Cart {
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
}

export interface FilterOptions {
  priceRange: [number, number];
  collections: string[];
  materials: string[];
  colors: string[];
  inStock: boolean;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'name' | 'newest';
}
