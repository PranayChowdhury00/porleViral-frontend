const CallToAction = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          Join Our Clothing Family!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the best in men's fashion — stylish, affordable, and built for comfort. Join hundreds of satisfied customers.
        </p>
        
        <a
          href="https://m.me/yourpageusername" // Replace with your Messenger or order form link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
