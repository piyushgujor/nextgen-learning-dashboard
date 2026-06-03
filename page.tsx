import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import ActivityCard from "@/components/ActivityCard";
import CourseCard from "@/components/CourseCard";

const courses = [
  {
    id: 1,
    title: "Advanced React Patterns",
    progress: 75,
    icon: "Code",
  },
  {
    id: 2,
    title: "Next.js Mastery",
    progress: 60,
    icon: "Monitor",
  },
  {
    id: 3,
    title: "Database Systems",
    progress: 45,
    icon: "Database",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <section className="grid gap-6 lg:grid-cols-4 auto-rows-[180px]">

          {/* Hero Tile */}
          <div className="lg:col-span-2 lg:row-span-2">
            <HeroCard />
          </div>

          {/* Activity Tile */}
          <div className="lg:col-span-2">
            <ActivityCard />
          </div>

          {/* Course Tiles */}
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
              icon={course.icon}
            />
          ))}

        </section>
      </main>
    </div>
  );
}
