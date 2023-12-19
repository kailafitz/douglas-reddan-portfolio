import Bio from "@/components/custom/bio";
import Contact from "@/components/custom/contact";
import Footer from "@/components/custom/footer";
import Navigation from "@/components/custom/navigation";
import WorkTabs from "@/components/custom/workTabs";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* <div className="min-h-screen relative bg-slate-200"> */}
        <div className="top relative bg-slate-200">
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
        </div>
        <div className="bg-slate-900">
          <WorkTabs />
        </div>
        <Bio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
