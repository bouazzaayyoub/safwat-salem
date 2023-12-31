import React from 'react';

type Props = {};

function About({}: Props) {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
            من هو <br />
            <span className="bg-clip-text bg-gradient-to-tl from-primary to-primary/80 text-transparent">
              صفوت سالم؟
            </span>
          </h1>
        </div>
        {/* End Title */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            مقرئ مصري، ولد بالقاهرة سنة ١٣٨٠ ه = ١٩٦٠ م، ونشأ بها. زاوج بين
            التلقي العلمي المشيخيِّ، والدراسة الأكادمية، فتلقى القرآن بقراءاته
            العشر الصغرى والكبرى، على مشايخ أجلاء، مع الدراسة في معهد القراءات،
            وحصل على مجموعة من الشواهد الجامعية في القرآن وعلومه. تنوعت وسائل
            نفعه، فكان أستاذا للقراءات العشر بمعهد الإمام الشاطبي بجدة، وشيخا
            لمقارئ المعهد، وكان مدرسة إقرائية ضخمة مثمرة، إذ صدر عنه ٢٨٧ إجازة
            بمختلف القراءات إفرادا وجمعا، للرجال والنساء، لما يزيد على ٢٥ جنسية
            حول العالم.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
