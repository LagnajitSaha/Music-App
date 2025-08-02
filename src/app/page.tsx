import { main } from "motion/react-client"
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebniars from "@/components/UpcomingWebniars";
import AnimatedTooltipPreview from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] dark:text-white ">
  
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebniars />
      <AnimatedTooltipPreview />
      <Footer/>
    </main>

  );
}
