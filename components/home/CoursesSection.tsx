'use client';

import { tajweedCourses } from '@/data/tajweed';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CourseCard from './CourseCard';
import { readingCourses } from '@/data/reading';
import { encounterCourses } from '@/data/encounter';

type Props = {};

function CoursesSection({}: Props) {
  return (
    <div className="my-3 py-14 bg-[#f5f6f7]" id="content">
      <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
        <h2 className="text-2xl text-primary text-bold mb-4">
          من تراث فضيلة الشيخ المقرئ د./ صفوت سالم
        </h2>
      </div>
      <div className="mx-5">
        <Tabs forceRenderTabPanel className="mt-10">
          <TabList className="mx-auto grid grid-cols-3 w-full md:max-w-2xl">
            <Tab
              className="font-bold border-t-0 border-x-0 pb-3 text-lg text-center bg-transparent cursor-pointer outline-none"
              selectedClassName="border-b-primary border-t-0 border border-[3px]"
            >
              التجويد
            </Tab>
            <Tab
              className="font-bold border-t-0 border-x-0 pb-3 text-lg text-center bg-transparent cursor-pointer outline-none"
              selectedClassName="border-b-primary border-t-0 border border-[3px]"
            >
              القراءات
            </Tab>
            <Tab
              className="font-bold border-t-0 border-x-0 pb-3 text-lg text-center bg-transparent cursor-pointer outline-none"
              selectedClassName="border-b-primary border-t-0 border border-[3px]"
            >
              المنوعات واللقاءات
            </Tab>
          </TabList>
          <div className="mt-10 max-w-5xl mx-auto">
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-0">
                {tajweedCourses.courses
                  .slice(0, 3)
                  .map(({ title, description, id }, key) => (
                    <CourseCard
                      key={key}
                      description={description}
                      title={title}
                      href={`/tajweed/${id}`}
                    />
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-0">
                {readingCourses.courses
                  .slice(0, 3)
                  .map(({ title, description, id }, key) => (
                    <CourseCard
                      key={key}
                      description={description}
                      title={title}
                      href={`/reading/${id}`}
                    />
                  ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-0">
                {encounterCourses.courses
                  .slice(0, 3)
                  .map(({ title, description, id }, key) => (
                    <CourseCard
                      key={key}
                      description={description}
                      title={title}
                      href={`/encounter/${id}`}
                    />
                  ))}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default CoursesSection;
