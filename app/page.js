import FAQs from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import NumberOfPeopleUse from "@/components/NumberOfPeopleUse";
import OurProcess from "@/components/OurProcess";
import { OurServices } from "@/components/OurService";
import { SubFooter } from "@/components/SubFooter";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <LandingPage />
      <OurProcess />
      <OurServices />
      <AboutSection />
      <NumberOfPeopleUse />
      <Testimonials />
      <FAQs />
      <SubFooter />
      <Footer />
    </div>
  );
}
