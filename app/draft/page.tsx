import Bio from "@/components/custom/bio";
import Brands from "@/components/custom/brands";
import Contact from "@/components/custom/contact";
import Footer from "@/components/custom/footer";
import NavigationBar from "@/components/custom/navigationBar";
import WorkTabs from "@/components/custom/workTabs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <main>
        <div className="min-h-90vh bg-fuchsia-900 relative">
          <div className="animating-container top relative bg-gray-900 ">
            <h3 className="text-6xl text-yellow-600 opening-text">
              Opening Animation
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
            {/* <Link href="#work">
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
          </Link> */}
          </div>
        </div>
        <div id="work" className="bg-gray-900">
          <WorkTabs />
        </div>
        <Brands />
        <Bio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
