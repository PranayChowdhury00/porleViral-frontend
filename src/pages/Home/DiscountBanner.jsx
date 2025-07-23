import { Percent, Tag } from "lucide-react";

const DiscountBanner = () => {
  return (
    <div className="bg-yellow-100 border border-yellow-300 rounded-xl shadow-md px-6 py-10 sm:px-10 my-10 mx-4 sm:mx-auto max-w-5xl">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left - Text Content */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-800 mb-2">
            🎉 Grand Opening Offer!
          </h2>
          <p className="text-lg text-yellow-700">
            We're new! Enjoy exclusive discounts as a thank you for visiting.
          </p>
        </div>

        {/* Right - Discount Box */}
        <div className="bg-yellow-400 text-white p-6 rounded-xl flex items-center gap-4 shadow-inner">
          <Percent className="w-10 h-10" />
          <div>
            <p className="text-2xl font-bold">Get 25% OFF</p>
            <p className="text-sm">On all orders above $50</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-6 text-center sm:text-right">
        <a
          href="/products"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          <Tag className="w-5 h-5" />
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default DiscountBanner;
