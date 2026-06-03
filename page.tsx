import Sidebar from "@/components/Sidebar";
import BentoGrid from "@/components/BentoGrid";
import MobileNavbar from "@/components/MobileNavbar";
import { getCourses } from "@/lib/getCourses";

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <BentoGrid courses={courses} />
      </main>

      <MobileNavbar />
    </div>
  );
}
