import { Truck, ShieldCheck, BadgeCheck } from 'lucide-react';

const AboutPreview = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Shop With Us?</h2>
        <p className="text-lg text-gray-600 mb-12">
          We provide premium men's fashion at the best price. From trendy joggers to classic fits, our collection is designed for the modern man who values both style and comfort.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Fast Delivery */}
          <div className="flex flex-col items-center text-center p-6 border rounded-2xl shadow hover:shadow-md transition">
            <Truck className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get your orders delivered quickly and reliably, right to your doorstep.
            </p>
          </div>

          {/* Quality Products */}
          <div className="flex flex-col items-center text-center p-6 border rounded-2xl shadow hover:shadow-md transition">
            <BadgeCheck className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Quality Products</h3>
            <p className="text-sm text-gray-600 mt-2">
              Hand-picked fabrics and craftsmanship to ensure lasting quality and comfort.
            </p>
          </div>

          {/* Trusted by Thousands */}
          <div className="flex flex-col items-center text-center p-6 border rounded-2xl shadow hover:shadow-md transition">
            <ShieldCheck className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Trusted Brand</h3>
            <p className="text-sm text-gray-600 mt-2">
              Trusted by thousands of happy customers across the country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
