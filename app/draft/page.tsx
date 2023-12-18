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
        <div className="min-h-screen bg-slate-200"></div>
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
