import HeroCard from "./HeroCard";
import ActivityCard from "./ActivityCard";
import CourseCard from "./CourseCard";

interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

export default function BentoGrid({
  courses,
}: {
  courses: Course[];
}) {
  return (
    <section className="grid gap-6 lg:grid-cols-4 auto-rows-[200px]">
      <div className="lg:col-span-2 lg:row-span-2">
        <HeroCard />
      </div>

      <div className="lg:col-span-2">
        <ActivityCard />
      </div>

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          progress={course.progress}
          icon={course.icon_name}
        />
      ))}
    </section>
  );
}
