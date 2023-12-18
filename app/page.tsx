import Bio from "@/components/custom/bio";
import Contact from "@/components/custom/contact";
import WorkTabs from "@/components/custom/workTabs";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-slate-200"></div>
      <div className="bg-slate-900">
        <WorkTabs />
      </div>
      <Bio />
      <Contact />
    </main>
  );
}
