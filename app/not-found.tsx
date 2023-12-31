import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="my-10 max-w-5xl mx-auto">
      <div className="flex items-center">
        <div className="mx-auto">
          <h1 className="text-7xl font-bold text-red-700">خطأ 404</h1>
          <h2 className="mt-3 text-4xl">الصفحة غير موجودة</h2>
          <p className="text-sm mb-8 mt-3">
            نقترح عليك الانتقال إلى الصفحة الرئيسية .
          </p>
          <Link
            href="/"
            className="bg-primary px-6 py-2 rounded-full mt-10 text-white hover:opacity-90"
          >
            الانتقال إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
