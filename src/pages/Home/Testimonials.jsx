import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: "Rahim Uddin",
    quote: "Amazing quality and super fast delivery. My go-to store for men’s fashion!",
    rating: 5,
  },
  {
    name: "Tanvir Hasan",
    quote: "The joggers fit perfectly. Excellent material and affordable price.",
    rating: 5,
  },
  {
    name: "Alif Chowdhury",
    quote: "Very professional service. Loved the packaging and overall experience.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Customers Say</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          loop={true}
          modules={[Autoplay]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                <p className="text-gray-700 text-lg mb-4 italic">“{testimonial.quote}”</p>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-800">{testimonial.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
