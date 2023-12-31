import { tajweedCourses } from '@/data/tajweed';
import CourseCard from '../components/CourseCard';

type Props = {};

function Tajweed({}: Props) {
  return (
    <main>
      <div
        className="relative z-10 flex items-end justify-between pb-10 px-10 bg-page-pattern bg-center bg-cover h-52
            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-t
            before:from-primary/70
            before:to-gray-700
            before:opacity-75
            before:z-[-5]"
      >
        <h1 className="text-white text-6xl">علم التجويد</h1>
        <p className="text-white">
          دورات وشروحات لمنظومات في علم التجويد لفضيلة الشيخ الدكتور: صفوت محمود
          سالم
        </p>
      </div>

      <section className="max-w-5xl mx-auto py-10">
        <h2 className="font-bold text-xl">اكتشف الدروس</h2>
        <div className="grid grid-cols-3 gap-5 mt-8">
          {tajweedCourses.courses.map(({ description, id, title }, key) => (
            <CourseCard
              title={title}
              description={description}
              href={`/tajweed/${id}`}
              key={key}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Tajweed;
