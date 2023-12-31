'use client';

import Image from 'next/image';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function RecommendationSection(): JSX.Element {
  const recommendationList = [
    {
      title: 'لمقرئ د. أيمن سويد من أعلام القرآن والقراءات',
      body: 'ماذا أقول عن الشيخ صفوت؟ ماذا أقول له؟ ألا يكفي 42 سنه للحكم على رجل؟ أخي وحبيبي الغالي على قلبي، هنيئا لك! هنيئا لك! هنيئا لك! صبرت على المرض وربنا يقول {وبشر الصابرين} وصبرت على التعلم والنبي صلى الله عليه وسلم يقول "من سلك طريقا يلتمس به علما سهل الله له به طريقا إلى الجنة" وصبرت على التعليم والنبي صلى الله عليه وسلم يقول "خيركم من تعلم القرآن وعلمه" وبنيت أسرة إسلامية قرآنية كل افرادها مجازون ذكورا واناثا، حتى الزوجة الكريمة، ما شاء الله.',
      avatar: '/person.jpg',
    },
    {
      title: 'المقرئ د. معاذ ابن الشيخ صفوت',
      avatar: '/person2.jpg',
      body: 'على يديه نشأت وتربيت، وتعلمت وعلَّمت، حفَّظني كتاب الله تعالى، وعُني بي وبإخوتي منذ الصِّغر مبكِّرًا، وقد جودت على يديه القرآن الكريم، رواية ودرايةً، وهو مَن علَّمني القراءات وأقرأني العشر الصغرى، وكان بفضل الله سببًا في ثباتي على المسار الصحيح دون انحراف يمنةً ويسرة.',
    },
  ];
  const settings: Settings = {
    infinite: true,
    autoplay: true,
    arrows: true,
  };
  return (
    <section className="max-w-5xl mx-auto mb-16">
      <div className="p-4 my-4">
        <h2 className="block mb-10 font-bold text-center text-primary text-4xl ">
          قالوا عن الشيخ
        </h2>
        <div className="mt-1 relative">
          <Slider {...settings}>
            {recommendationList.map((item, i) => (
              <div className="flex flex-col items-center text-center" key={i}>
                <div className="flex mb-3 justify-center">
                  <div className="h-28 w-28 relative rounded-full">
                    <Image
                      src={item.avatar}
                      alt="avatar"
                      fill
                      className="rounded-full"
                    />
                  </div>
                  {/* <button>hj</button> */}
                </div>
                <h5 className="text-dark font-bold fs-4">{item.title}</h5>
                <blockquote className="w-3/4 mx-auto text-sm mt-3">
                  {item.body}
                </blockquote>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
