import Benefits from "@/components/pages/id/beranda/Benefits";
import CallToAction from "@/components/pages/id/beranda/CallToAction";
import HeroContent from "@/components/pages/id/beranda/HeroContent";
import JobCategoryList from "@/components/pages/id/beranda/JobCategoryList";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-3 font-poppins">
      <HeroContent />
      <JobCategoryList />
      <Benefits />
      <CallToAction />
    </main>
  );
}
