
import Banner from './Banner';
import FeaturedProducts from './FeaturedProducts';
import AboutPreview from './AboutPreview';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import DiscountBanner from './DiscountBanner';
import NewArrivals from './NewArrivals';

const Home = () => {
 return (
  <div>
   <Banner></Banner>
   <DiscountBanner></DiscountBanner>
   <FeaturedProducts></FeaturedProducts>
   <NewArrivals></NewArrivals>
   <CallToAction></CallToAction>
   <AboutPreview></AboutPreview>
   <Testimonials></Testimonials>
  </div>
 );
};

export default Home;