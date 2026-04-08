import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { collections, getProductsByCollection, getCollectionByHandle } from '@/lib/data';

export default async function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);
  const products = collection ? getProductsByCollection(handle) : [];

  if (!collection) {
    return (
      <div className="min-h-screen bg-[#FEFCF5]">
        <Header />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
          <h1 className="text-2xl font-bold text-[#2C241A]">Collection not found</h1>
          <p className="text-[#5A4A3A] mt-2">The collection you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FEFCF5]">
      <Header />
      
      {/* Collection Hero */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${collection.image})` }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{collection.name}</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">{collection.description}</p>
            <p className="text-lg text-white/80 mt-2">{collection.productCount} products</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#5A4A3A]">No products found in this collection.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
