import BrandsSlider from "@/Components/Home/BrandsSlider";
import Hero from "@/Components/Home/Hero";
import Testimonials from "@/Components/Home/Testimonials";
import CarTypes_Section_3 from "@/Components/Home/CarTypes";
import RentalPackages from "@/Components/Home/RentalPackages";
import WhyChooseUs from "@/Components/Home/WhyChooseUs";
import FAQSection from "@/Components/Home/FAQSection";
import Products from "@/Components/Home/RentalCar";
import Contact from "@/Components/Home/Contact";
export default async function Home() {
  return (
 <div >
<Hero/>
  
<BrandsSlider/>
<CarTypes_Section_3/>
<RentalPackages/>
<Products/>
<WhyChooseUs/>
<Testimonials/>
<FAQSection/>
<Contact/>
 </div>
  );
}
