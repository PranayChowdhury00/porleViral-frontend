import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: "Summer Collection 2025",
      description: "Discover our latest trendy outfits at exclusive prices. Limited time offer!",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      bgColor: "bg-gradient-to-r from-sky-200 to-sky-100"
    },
    {
      title: "New Arrivals",
      description: "Fresh styles just landed in our store. Be the first to shop!",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      bgColor: "bg-gradient-to-r from-purple-300 to-blue-100"
    },
    {
      title: "Winter Specials",
      description: "Cozy up with our winter collection. Up to 50% off!",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
      bgColor: "bg-gradient-to-r from-gray-400 to-gray-200"
    }
  ];

  // Auto-rotate banners every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-h-[600px] max-w-6xl mx-auto">
      <div className="mt-10 h-[70vh] max-h-[600px] overflow-hidden relative rounded-2xl">
        {/* Banner Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div 
              key={index}
              className={`w-full flex-shrink-0 h-full ${banner.bgColor}`}
            >
              <div className="max-w-6xl mx-auto h-full flex items-center relative z-10 px-4">
                <div className="w-full md:w-1/2 space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                    {banner.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-700">
                    {banner.description}
                  </p>
                  <div className="flex gap-4">
                    <Link
                      to="/shop"
                      className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition duration-300"
                    >
                      Shop Now
                    </Link>
                    <Link
                      to="/sale"
                      className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition duration-300 border border-black"
                    >
                      View Sale
                    </Link>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2 h-full relative">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[80%] w-[80%] rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={banner.image}
                      alt="Fashion Model"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;