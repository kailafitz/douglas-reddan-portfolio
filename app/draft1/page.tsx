import Bio from "@/components/custom/bio";
import Brands from "@/components/custom/brands";
import Contact from "@/components/custom/contact";
import Footer from "@/components/custom/footer";
import NavigationBar from "@/components/custom/navigationBar";
import Press from "@/components/custom/press";
import ScrollTop from "@/components/custom/scrollTop";
import WorkTabs from "@/components/custom/workTabs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="min-h-60vh bg-slate-900 relative">
        <div className="animating-container-1 top relative bg-gray-900 ">
          <h3 className="text-6xl opening-text">
            Logo Animation
            {/* <div className="word1 text-5xl text-gray-900">Director</div>
            <div className="word2 text-5xl text-gray-900">Choreographer</div> */}
            {/* <div className="word3 text-5xl text-gray-900">Douglas Reddan</div> */}
          </h3>

          <video
            className="w-full h-full object-cover opening-montage"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src="/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Link href="#work">
            <svg
              className="arrows -mb-12"
              width="123"
              height="182"
              viewBox="0 0 123 182"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="a1"
                d="M3 2.5L61.5 61L120 2.5"
                stroke="black"
                strokeWidth="8"
              />
              <path
                className="a3"
                d="M3 119L61.5 177.5L120 119"
                stroke="black"
                strokeWidth="8"
              />
              <path
                className="a2"
                d="M3 61L61.5 119.5L120 61"
                stroke="black"
                strokeWidth="8"
              />
            </svg>
          </Link>
        </div>
      </div>
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
