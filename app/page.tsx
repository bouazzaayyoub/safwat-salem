import Hero from '@/components/Hero';
import About from '@/components/home/About';
import CoursesSection from '@/components/home/CoursesSection';
import Features from '@/components/home/Features';
import RecommendationSection from '@/components/home/RecommendationSection';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <CoursesSection />
      <RecommendationSection />
    </>
  );
}
