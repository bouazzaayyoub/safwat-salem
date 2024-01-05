'use client';

import ShareButton from '@/app/components/ShareButton';
import VideoCard from '@/app/components/VideoCard';
import { readingCourses } from '@/data/reading';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

type Props = { params: { id: string } };

function SingleCourse({ params }: Props) {
  const selectedCourse = readingCourses.courses.find(
    ({ id }) => id === parseInt(params.id, 10),
  );

  const [videoId, setvideoId] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ left: 0, top: 500, behavior: 'smooth' });
  }, [videoId]);

  if (!selectedCourse) {
    return;
  }

  const isLastCourse = !(selectedCourse?.videos?.length > videoId + 1);
  const isFirstCourse = videoId === 0;

  const courses = selectedCourse.videos.filter((_, index) => index !== videoId);

  const handleNext = () => {
    setvideoId((prev) => prev + 1);
  };

  const handlePrev = () => {
    setvideoId((prev) => prev - 1);
  };

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
      </div>
      <section className="max-w-5xl mx-auto py-10">
        <div className="container">
          <div className="shadow bg-white p-4 rounded-lg mb-5">
            <h3 className="text-primary font-bold text-lg mb-2">
              {selectedCourse?.title}
            </h3>
            <p className="text-sm">{selectedCourse?.description}</p>
          </div>
          {selectedCourse?.videos.length && (
            <>
              <div className="mb-5 max-w-2xl mx-auto">
                <div className="flex justify-center">
                  <ReactPlayer
                    url={
                      selectedCourse?.videos.length
                        ? selectedCourse?.videos[videoId].url
                        : ''
                    }
                    light={true}
                    style={{ boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 15%)' }}
                  />
                </div>
                <div className="">
                  <div className="mt-3 flex flex-col align-items-center justify-content-between">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5">
                      <h4 className="my-5 text-center md:text-start ">
                        {selectedCourse?.videos[videoId].title}
                      </h4>
                      <div className="text-center md:text-end">
                        <ShareButton />
                      </div>
                    </div>
                    {!!courses.length && (
                      <div className="flex justify-around w-full mt-8">
                        <button
                          className="bg-primary/80 disabled:opacity-75 disabled:cursor-not-allowed text-white rounded-full px-10 py-2 hover:opacity-80"
                          onClick={handleNext}
                          disabled={isLastCourse}
                        >
                          التالي
                        </button>
                        <button
                          className="border border-gray-300 rounded-full px-10 py-2 hover:bg-primary/70 hover:text-white transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                          disabled={isFirstCourse}
                          onClick={handlePrev}
                        >
                          السابق
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {!!courses.length && (
                <>
                  <h3 className="text-primary fw-bold mb-3">فهرس المحتويات</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {courses.map(({ title }, i) => (
                      <VideoCard
                        key={i}
                        handleClick={() => setvideoId(i)}
                        title={title}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default SingleCourse;
