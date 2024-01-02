import { tajweedCourses } from '@/data/tajweed';
import CourseCard from '../components/CourseCard';
import ShareButton from '../components/ShareButton';

type Props = {};

function Tajweed({}: Props) {
  return (
    <main>
      <div
        className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between pb-10 pt-5 md:pt-0 px-10 bg-page-pattern bg-center bg-cover h-52
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
        <p className="text-white text-center">
          دورات وشروحات لمنظومات في علم التجويد لفضيلة الشيخ الدكتور: صفوت محمود
          سالم
        </p>
      </div>

      <section className="max-w-5xl mx-auto md:mx-5 lg:mx-auto py-10 px-6 md:px-0">
        <div className="flex justify-between">
          <h2 className="font-bold text-xl">اكتشف الدروس</h2>
          <ShareButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {tajweedCourses.courses.map(({ description, id, title }, key) => (
            <CourseCard
              title={title}
              description={description}
              href={`/tajweed/${id}`}
              image="/quran.png"
              key={key}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Tajweed;
