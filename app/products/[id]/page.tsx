import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetail from '@/components/ProductDetail';
import { getProductById } from '@/lib/data';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FEFCF5]">
        <Header />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
          <h1 className="text-2xl font-bold text-[#2C241A]">Product not found</h1>
          <p className="text-[#5A4A3A] mt-2">The product you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FEFCF5]">
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </div>
  );
}
