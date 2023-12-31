const Footer = () => (
  <footer className="bg-[#1ab999] w-full">
    <div className="w-full max-w-[85rem] pt-6  lg:pt-10 mx-auto">
      {/* Grid */}
      <div className="grid px-4 sm:px-6 lg:px-8 grid-cols-4 gap-14">
        <div className="col-span-1">
          <a
            className="flex-none text-xl font-semibold text-white dark:focus:outline-none dark:focus:ring-1 "
            href="#"
            aria-label="Brand"
          >
            صفوت سالم
          </a>
        </div>
        {/* End Col */}
        <div className="col-span-2">
          <h4 className="font-semibold text-gray-100">عن منصة صفوت سالم</h4>
          <div className="mt-3 grid space-y-3">
            <p className="text-white text-xs leading-6 font-normal">
              عن منصة صفوت سالم هذه منصة خاصة بدروس ومحاضرات الشيخ المقرئ د.
              صفوت محمود سالم -رحمه الله- والذي انتقل إلى جوار ربه في يوم الأحد
              17 شعبان 1443 بعد مسيرة قرآنية مباركة استمرت على مدى أكثر من 4
              عقود قضاها في خدمة القرآن الكريم وتعليمه وإقرائه، وقد كتب الله
              -تعالى- له القبول في الأرض وانتفع به أهل القرآن من كل مكان وامتد
              أثر جهوده في حياته ونسأل الله -تعالى- أن يجعلها ذخراً له في الدنيا
              والآخرة.
            </p>
          </div>
        </div>
        {/* End Col */}
        {/* End Col */}
        <div className="col-span-1">
          <h4 className="font-semibold text-gray-100">روابط مهمة</h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-white dark:focus:outline-none dark:focus:ring-1"
                href="#"
              >
                عن المنصة
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-white dark:focus:outline-none dark:focus:ring-1"
                href="#"
              >
                شرط المنصة
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* End Grid */}
      <div className="mt-5 px-4 sm:px-6 lg:px-8 py-2 bg-[#294058] sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
        <div className="flex justify-between items-center">
          <p className="text-sm text-white">جميع الحقوق محفوظة © 2023</p>
        </div>
        {/* End Col */}
        {/* Social Brands */}
        <div>
          <a
            className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
            href="#"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
          <a
            className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
            href="#"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
        {/* End Social Brands */}
      </div>
    </div>
  </footer>
);

export default Footer;
