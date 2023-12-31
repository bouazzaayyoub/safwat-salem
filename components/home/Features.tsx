import React from 'react';
import QuranIcon from '../icons/QuranIcon';
import ReadingIcon from '../icons/ReadingIcon';
import OldBookIcon from '../icons/OldBookIcon';

type Props = {};

function Features({}: Props) {
  const featuresList = [
    {
      title: (
        <>
          <span className="text-bold text-primary">٧١</span> درسا{' '}
          <strong>في علم التجويد</strong>
        </>
      ),
      icon: QuranIcon,
      description:
        'دورات وشروحات لمنظومات في علم التجويد لفضيلة الشيخ الدكتور: صفوت محمود سالم   ',
    },
    {
      title: (
        <>
          <span className="text-bold text-primary">٢٥٦</span> درسا{' '}
          <strong>في علم القراءات</strong>
        </>
      ),

      icon: ReadingIcon,
      description:
        'دورات وشروحات لمنظومات في علم القراءات لفضيلة الشيخ الدكتور: صفوت محمود سالم   ',
    },
    {
      title: (
        <>
          <span className="text-bold text-primary">٣٢</span> من{' '}
          <strong>المنوعات واللقاءات</strong>
        </>
      ),

      icon: OldBookIcon,
      description:
        'تلاوات عطرة، لقاءات، خطب ومجالس ختم للقرآن على الشيخ الدكتور: صفوت محمود سالم',
    },
  ];
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 text-center mx-auto bg-white">
      <h1 className="block mb-10 font-bold text-gray-800 text-4xl ">
        محتوى{` `}
        <span className="bg-clip-text bg-gradient-to-tl from-primary to-primary/80 text-transparent">
          الموقع
        </span>
      </h1>
      <div
        className="max-w-6xl mx-auto grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4"
        aria-label="Tabs"
        role="tablist"
      >
        {featuresList.map(({ title, description, icon: Icon }, key) => (
          <div
            key={key}
            className="group transition-all hs-tab-active:hover:border-transparent w-full flex flex-col items-center text-center hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05]"
            role="tab"
          >
            <div className="group-hover:-translate-y-1 group-hover:scale-[1.2] transition-all">
              <Icon scale={0.4} />
            </div>
            <span className="">
              <span className="text-xl block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                {title}
              </span>
              <span className="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                {description}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
