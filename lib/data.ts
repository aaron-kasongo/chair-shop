import { Product, Collection } from './types';

export const collections: Collection[] = [
  {
    id: '1',
    name: 'Minimalist',
    handle: 'minimalist',
    description: 'Clean lines & organic touch',
    image: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 16,
    featured: true
  },
  {
    id: '2',
    name: 'Mid-Century',
    handle: 'mid-century',
    description: 'Retro warmth, modern build',
    image: 'https://i.pinimg.com/1200x/8f/c8/ba/8fc8ba9bcfd961aaba4d65bd849d31e8.jpg',
    productCount: 10,
    featured: true
  },
  {
    id: '3',
    name: 'Luxe Velvet',
    handle: 'luxe-velvet',
    description: 'Rich textures & refined depth',
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 7,
    featured: true
  },
  {
    id: '4',
    name: 'Outdoor',
    handle: 'outdoor',
    description: 'Weather-resistant elegance',
    image: 'https://i.pinimg.com/736x/c2/0c/89/c20c894d828c46c525ed6b9c595379ce.jpg',
    productCount: 5,
    featured: true
  },
  {
    id: '5',
    name: 'Artisan Woven',
    handle: 'artisan-woven',
    description: 'Handcrafted natural fibers',
    image: 'https://i.pinimg.com/1200x/1e/50/80/1e50801a0b8ac03a52407e5e3fd3d467.jpg',
    productCount: 8,
    featured: true
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Walnut Lounge Chair',
    price: 1290,
    compareAtPrice: 1590,
    description: 'A sophisticated lounge chair featuring solid walnut construction with premium bouclé fabric upholstery. Perfect for reading nooks and cozy corners.',
    images: [
      'https://m.media-amazon.com/images/I/81qJDNl0DWL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71o-qfQkyEL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81GvHJZpJyL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81dTvDLuyFL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/41qKzNnM+wL._AC_US100_.jpg'
    ],
    category: 'Lounge Chairs',
    collection: 'minimalist',
    material: 'Walnut Wood & Bouclé',
    colors: ['Walnut', 'Oak', 'Ash'],
    inStock: true,
    featured: true,
    tags: ['bestseller', 'eco-friendly', 'handmade'],
    variants: [
      {
        id: '1-1',
        productId: '1',
        name: 'Walnut Lounge Chair - Walnut',
        price: 1290,
        color: 'Walnut',
        inStock: true
      },
      {
        id: '1-2',
        productId: '1',
        name: 'Walnut Lounge Chair - Oak',
        price: 1190,
        color: 'Oak',
        inStock: true
      }
    ]
  },
  {
    id: '2',
    name: 'Dune Dining Chair',
    price: 490,
    description: 'Elegant dining chair crafted from solid oak with natural linen upholstery. Designed for comfort during long dinner conversations.',
    images: [
      'https://m.media-amazon.com/images/I/61GApORup2L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81X5HHxZhOL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61p0GaNoliL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81Tn507x5pL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71pxkYglvvL._AC_SX679_.jpg'
    ],
    category: 'Dining Chairs',
    collection: 'minimalist',
    material: 'Oak Wood & Natural Linen',
    colors: ['Natural', 'Black', 'Gray'],
    inStock: true,
    featured: true,
    tags: ['dining', 'sustainable', 'scandinavian'],
    variants: [
      {
        id: '2-1',
        productId: '2',
        name: 'Dune Dining Chair - Natural',
        price: 490,
        color: 'Natural',
        inStock: true
      },
      {
        id: '2-2',
        productId: '2',
        name: 'Dune Dining Chair - Black',
        price: 520,
        color: 'Black',
        inStock: true
      }
    ]
  },
  {
    id: '3',
    name: 'Milo Velvet Accent',
    price: 875,
    compareAtPrice: 1095,
    description: 'Luxurious accent chair featuring deep emerald velvet upholstery with brass legs. Adds a touch of glamour to any room.',
    images: [
      'https://m.media-amazon.com/images/I/81y+TfAsRJL._AC_SY879_.jpg',
      'https://m.media-amazon.com/images/I/71nm6C2tbxS._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81Y9C5SiTyL._AC_SY879_.jpg',
      'https://m.media-amazon.com/images/I/31nJzKkUzwL._AC_US100_.jpg'

    ],
    category: 'Accent Chairs',
    collection: 'luxe-velvet',
    material: 'Velvet & Brass',
    colors: ['Emerald', 'Sapphire', 'Ruby'],
    inStock: true,
    featured: true,
    tags: ['luxury', 'velvet', 'accent'],
    variants: [
      {
        id: '3-1',
        productId: '3',
        name: 'Milo Velvet Accent - Emerald',
        price: 875,
        color: 'Emerald',
        inStock: true
      },
      {
        id: '3-2',
        productId: '3',
        name: 'Milo Velvet Accent - Sapphire',
        price: 875,
        color: 'Sapphire',
        inStock: false
      }
    ]
  },
  {
    id: '4',
    name: 'Pivot Side Chair',
    price: 620,
    description: 'Minimalist side chair crafted from ash wood with hand-woven paper cord seat. Perfect as an accent piece or extra seating.',
    images: [
      'https://m.media-amazon.com/images/I/81PosxLl7SL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71qHpBou8+L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81rRRpaMsZL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71IvxERrLuL._AC_SX679_.jpg'
    ],
    category: 'Side Chairs',
    collection: 'minimalist',
    material: 'Ash Wood & Paper Cord',
    colors: ['Natural', 'Dark'],
    inStock: true,
    featured: false,
    tags: ['minimalist', 'handwoven', 'lightweight'],
    variants: [
      {
        id: '4-1',
        productId: '4',
        name: 'Pivot Side Chair - Natural',
        price: 620,
        color: 'Natural',
        inStock: true
      }
    ]
  },
  {
    id: '5',
    name: 'Oslo Lounge Chair',
    price: 1890,
    description: 'Premium lounge chair featuring walnut construction with genuine leather upholstery. A timeless investment piece.',
    images: [
      'https://m.media-amazon.com/images/I/A1eJBPPCu5L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/91AIKFdzoLL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/91wnCCk5ZBL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/91JaPqv2X-L._AC_SX679_.jpg'
    ],
    category: 'Lounge Chairs',
    collection: 'mid-century',
    material: 'Walnut & Leather',
    colors: ['Walnut', 'Black Leather', 'Brown Leather'],
    inStock: true,
    featured: true,
    tags: ['premium', 'leather', 'mid-century'],
    variants: [
      {
        id: '5-1',
        productId: '5',
        name: 'Oslo Lounge Chair - Walnut',
        price: 1890,
        color: 'Walnut',
        inStock: true
      }
    ]
  },
  {
    id: '6',
    name: 'Rattan Edge Chair',
    price: 540,
    description: 'Bohemian-inspired dining chair featuring natural rattan construction with oak frame. Brings texture and warmth to any space.',
    images: [
      'https://m.media-amazon.com/images/I/812xLmAUurL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/A1mTf0pMDqL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81LVZg0+LpL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/91xeG7uxVlL._AC_SX679_.jpg'
    ],
    category: 'Dining Chairs',
    collection: 'artisan-woven',
    material: 'Natural Rattan & Oak',
    colors: ['Natural', 'White Wash'],
    inStock: true,
    featured: false,
    tags: ['bohemian', 'rattan', 'natural'],
    variants: [
      {
        id: '6-1',
        productId: '6',
        name: 'Rattan Edge Chair - Natural',
        price: 540,
        color: 'Natural',
        inStock: true
      }
    ]
  },
  {
    id: '7',
    name: 'Coastal Outdoor Lounge',
    price: 780,
    description: 'Weather-resistant lounge chair perfect for patios and decks. Made from marine-grade materials with UV protection.',
    images: [
      'https://m.media-amazon.com/images/I/710NdasiIoL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81Ao8LQrVyL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71SW86f-0sL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81sC9RyzZ+L._AC_SX679_.jpg'
    ],
    category: 'Outdoor Chairs',
    collection: 'outdoor',
    material: 'Marine-grade Polymer',
    colors: ['White', 'Gray', 'Navy'],
    inStock: true,
    featured: false,
    tags: ['outdoor', 'weatherproof', 'coastal'],
    variants: [
      {
        id: '7-1',
        productId: '7',
        name: 'Coastal Outdoor Lounge - White',
        price: 780,
        color: 'White',
        inStock: true
      }
    ]
  },
  {
    id: '8',
    name: 'Velvet Club Chair',
    price: 1250,
    compareAtPrice: 1450,
    description: 'Plush club chair in rich velvet upholstery with deep button tufting. Ultimate comfort for sophisticated lounging.',
    images: [
      'https://m.media-amazon.com/images/I/714rgHS+7GL._AC_SY300_SX300_QL70_ML2_.jpg',
      'https://m.media-amazon.com/images/I/71FemyY0WLL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/711gHPZjB1L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71PG0I+AN9L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71XxrPc3SZL._AC_SX679_.jpg'
    ],
    category: 'Lounge Chairs',
    collection: 'luxe-velvet',
    material: 'Velvet & Hardwood',
    colors: ['Burgundy', 'Forest Green', 'Royal Blue'],
    inStock: true,
    featured: false,
    tags: ['luxury', 'club-chair', 'tufted'],
    variants: [
      {
        id: '8-1',
        productId: '8',
        name: 'Velvet Club Chair - Burgundy',
        price: 1250,
        color: 'Burgundy',
        inStock: true
      }
    ]
  },
  {
    id: '9',
    name: 'Scandinavian Office Chair',
    price: 680,
    compareAtPrice: 850,
    description: 'Ergonomic office chair with breathable mesh back and adjustable lumbar support. Designed for all-day comfort.',
    images: [
      'https://m.media-amazon.com/images/I/41wgUZ6oOaL._AC_SY300_SX300_QL70_ML2_.jpg',
      'https://m.media-amazon.com/images/I/61vfsuaaaZL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/41FrFx9ieXL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/41wUDcn6DIL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/51ho6U2jdFL._AC_SX679_.jpg'
    ],
    category: 'Office Chairs',
    collection: 'minimalist',
    material: 'Mesh & Aluminum',
    colors: ['Black', 'Gray', 'White'],
    inStock: true,
    featured: true,
    tags: ['ergonomic', 'office', 'scandinavian'],
    variants: [
      {
        id: '9-1',
        productId: '9',
        name: 'Scandinavian Office Chair - Black',
        price: 680,
        color: 'Black',
        inStock: true
      },
      {
        id: '9-2',
        productId: '9',
        name: 'Scandinavian Office Chair - Gray',
        price: 680,
        color: 'Gray',
        inStock: true
      }
    ]
  },
  {
    id: '10',
    name: 'Industrial Metal Stool',
    price: 320,
    description: 'Raw industrial stool featuring metal frame and wooden seat. Perfect for kitchen counters or bar areas.',
    images: [
      'https://m.media-amazon.com/images/I/71I9j0gLLWL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/91d6OPbT8vL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71VDLsPUVXL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/91wMBxXtkFL._AC_SX679_.jpg'
    ],
    category: 'Counter Stools',
    collection: 'mid-century',
    material: 'Metal & Wood',
    colors: ['Raw Metal', 'Black', 'White'],
    inStock: true,
    featured: false,
    tags: ['industrial', 'stool', 'kitchen'],
    variants: [
      {
        id: '10-1',
        productId: '10',
        name: 'Industrial Metal Stool - Raw Metal',
        price: 320,
        color: 'Raw Metal',
        inStock: true
      }
    ]
  },
  {
    id: '11',
    name: 'Bohemian Macrame Chair',
    price: 420,
    description: 'Handwoven macrame chair with natural wood frame. Adds bohemian charm to any space.',
    images: [
      'https://m.media-amazon.com/images/I/51eSuwMK8sS._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/618htC8blBS._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81LBpl4UgTS._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61Urutpa9hS._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/612vrjdPZ6S._AC_SX679_.jpg'
    ],
    category: 'Accent Chairs',
    collection: 'artisan-woven',
    material: 'Macrame & Wood',
    colors: ['Natural', 'Beige', 'Cream'],
    inStock: true,
    featured: false,
    tags: ['bohemian', 'macrame', 'handmade'],
    variants: [
      {
        id: '11-1',
        productId: '11',
        name: 'Bohemian Macrame Chair - Natural',
        price: 420,
        color: 'Natural',
        inStock: true
      }
    ]
  },
  {
    id: '12',
    name: 'Modern Rocking Chair',
    price: 890,
    description: 'Contemporary rocking chair with sleek lines and comfortable cushioning. Perfect for nurseries or relaxation spaces.',
    images: [
      'https://m.media-amazon.com/images/I/81shDV6sCuL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81u7g7FT1EL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/813tQQqPnDL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81EcixJYEIL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/81-aapk8+ML._AC_SX679_.jpg'
    ],
    category: 'Rocking Chairs',
    collection: 'minimalist',
    material: 'Wood & Fabric',
    colors: ['Oak', 'Walnut', 'White'],
    inStock: true,
    featured: true,
    tags: ['rocking', 'modern', 'nursery'],
    variants: [
      {
        id: '12-1',
        productId: '12',
        name: 'Modern Rocking Chair - Oak',
        price: 890,
        color: 'Oak',
        inStock: true
      },
      {
        id: '12-2',
        productId: '12',
        name: 'Modern Rocking Chair - Walnut',
        price: 950,
        color: 'Walnut',
        inStock: true
      }
    ]
  },
  {
    id: '13',
    name: 'Velvet Dining Bench',
    price: 680,
    compareAtPrice: 820,
    description: 'Luxurious velvet bench perfect for dining tables or entryways. Adds elegance and extra seating.',
    images: [
      'https://m.media-amazon.com/images/I/51aB7biAVIL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/813mvf8pAPL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61g9S508FKL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61lTM1xHgGL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61MtRjAI3mL._AC_SX679_.jpg'
    ],
    category: 'Benches',
    collection: 'luxe-velvet',
    material: 'Velvet & Wood',
    colors: ['Navy', 'Emerald', 'Burgundy'],
    inStock: true,
    featured: false,
    tags: ['luxury', 'velvet', 'bench'],
    variants: [
      {
        id: '13-1',
        productId: '13',
        name: 'Velvet Dining Bench - Navy',
        price: 680,
        color: 'Navy',
        inStock: true
      }
    ]
  },
  {
    id: '14',
    name: 'Teak Outdoor Armchair',
    price: 450,
    description: 'Sustainable teak wood armchair designed for outdoor living. Naturally weather-resistant and durable.',
    images: [
      'https://m.media-amazon.com/images/I/71VS2efC1qL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/811c7Y857EL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71xabXQG75L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/71hTRdla8HL._AC_SX679_.jpg'
    ],
    category: 'Outdoor Chairs',
    collection: 'outdoor',
    material: 'Teak Wood',
    colors: ['Natural Teak', 'Weathered Gray'],
    inStock: true,
    featured: false,
    tags: ['outdoor', 'teak', 'sustainable'],
    variants: [
      {
        id: '14-1',
        productId: '14',
        name: 'Teak Outdoor Armchair - Natural Teak',
        price: 450,
        color: 'Natural Teak',
        inStock: true
      }
    ]
  },
  {
    id: '15',
    name: 'Mid-Century Wingback',
    price: 1350,
    compareAtPrice: 1650,
    description: 'Classic wingback chair reimagined with mid-century modern styling. Features tapered legs and premium upholstery.',
    images: [
      'https://m.media-amazon.com/images/I/61HfH9dSrmL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/51vf9JVHRjL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/617W7V9werL._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/51tMcve7l7L._AC_SX679_.jpg',
      'https://m.media-amazon.com/images/I/61gZux-ddYL._AC_SX679_.jpg'
    ],
    category: 'Lounge Chairs',
    collection: 'mid-century',
    material: 'Fabric & Wood',
    colors: ['Mustard', 'Teal', 'Gray'],
    inStock: true,
    featured: true,
    tags: ['wingback', 'mid-century', 'classic'],
    variants: [
      {
        id: '15-1',
        productId: '15',
        name: 'Mid-Century Wingback - Mustard',
        price: 1350,
        color: 'Mustard',
        inStock: true
      },
      {
        id: '15-2',
        productId: '15',
        name: 'Mid-Century Wingback - Teal',
        price: 1350,
        color: 'Teal',
        inStock: false
      }
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getVariantById = (productId: string, variantId: string) => {
  const product = getProductById(productId);
  return product?.variants.find(variant => variant.id === variantId);
};

export const getProductsByCollection = (collectionHandle: string): Product[] => {
  return products.filter(product => product.collection === collectionHandle);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getCollectionByHandle = (handle: string): Collection | undefined => {
  return collections.find(collection => collection.handle === handle);
};
