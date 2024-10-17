import CTA from "@/components/cta/page";
import Header from "@/components/header/page";
import Hero from "@/components/hero/page";
import Service from "@/app/(site)/services/page";
import Footer from "@/components/footer/page";
import ImageGallery from "@/app/(site)/projects/page";
import Contact from "@/app/(site)/contact/page";
import Announcement from "@/components/announcement/page";

export default function Home() {
  return (
    <main >
      <Hero />
      <CTA />
      <Service />
      <ImageGallery />
      <Contact />
    </main>
  );
}
