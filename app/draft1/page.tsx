import Bio from "@/components/custom/bio";
import Brands from "@/components/custom/brands";
import Contact from "@/components/custom/contact";
import Footer from "@/components/custom/footer";
import NavigationBar from "@/components/custom/navigationBar";
import OpeningAnimationContainer from "@/components/custom/openingAnimationContainer";
import Press from "@/components/custom/press";
import ScrollTop from "@/components/custom/scrollTop";
import WorkTabs from "@/components/custom/workTabs";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <OpeningAnimationContainer />
      <div id="work" className="bg-gray-900">
        <WorkTabs />
      </div>
      <Brands />
      <Bio />
      <Press />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}
