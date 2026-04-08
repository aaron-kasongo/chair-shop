export default function Footer() {
  return (
    <footer className="bg-[#FEFCF5] border-t border-[#E6DFD3] py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#9c7b5c" d="M248 320L248 138.2C223.5 158.7 208 189.6 208 224L208 320L248 320zM296 320L344 320L344 114.6C336.3 112.9 328.2 112 320 112C311.8 112 303.7 112.9 296 114.6L296 320zM392 138.2L392 320L432 320L432 224C432 189.6 416.5 158.8 392 138.2zM128 320L160 320L160 224C160 135.6 231.6 64 320 64C408.4 64 480 135.6 480 224L480 320L512 320C529.7 320 544 334.3 544 352L544 416C544 433.7 529.7 448 512 448L512 544C512 561.7 497.7 576 480 576C462.3 576 448 561.7 448 544L448 448L192 448L192 544C192 561.7 177.7 576 160 576C142.3 576 128 561.7 128 544L128 448C110.3 448 96 433.7 96 416L96 352C96 334.3 110.3 320 128 320z"/></svg>
            </div>
            <span className="text-2xl font-semibold text-[#2C241A]">Chair</span>
          </div>
          <p className="text-[#5A4A3A] text-sm">
            Sculptural furniture for modern living. Designed with conscience, built to last.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#2C241A] mb-3">Shop</h4>
          <ul className="space-y-2 text-sm text-[#5A4A3A]">
            <li><a href="/products" className="hover:text-[#9C7B5C] transition">All products</a></li>
            <li><a href="/collections" className="hover:text-[#9C7B5C] transition">Collections</a></li>
            <li><a href="#" className="hover:text-[#9C7B5C] transition">New arrivals</a></li>
            <li><a href="#" className="hover:text-[#9C7B5C] transition">Sale</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#2C241A] mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-[#5A4A3A]">
            <li><a href="#" className="hover:text-[#9C7B5C] transition">FAQ</a></li>
            <li><a href="#" className="hover:text-[#9C7B5C] transition">Returns</a></li>
            <li><a href="#" className="hover:text-[#9C7B5C] transition">Shipping</a></li>
            <li><a href="#" className="hover:text-[#9C7B5C] transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#2C241A] mb-3">Follow</h4>
          <div className="flex gap-5 text-[#5A4A3A] text-xl">
            <a href="#" className="hover:text-[#9C7B5C] cursor-pointer transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-[#9C7B5C] cursor-pointer transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-[#9C7B5C] cursor-pointer transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 mt-8 border-t border-[#EBE3D8] text-center text-[#7C6854] text-sm">
        <p>© 2025 Chair — All rights reserved. Designed for living beautifully.</p>
      </div>
    </footer>
  );
}
