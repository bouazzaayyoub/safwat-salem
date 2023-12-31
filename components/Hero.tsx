import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-[#e5f2f0]">
      <div className="px-4 py-14 text-center relative ">
        <Image
          className="mx-auto mb-4"
          src="/hero.svg"
          alt=""
          height="240"
          width="200"
        />
        <h1 className="text-5xl font-bold text-primary">صفوت سالم</h1>
        <p className="text-xl my-4">
          من تراث فضيلة الشيخ الدكتور صفوت سالم - رحمه الله -
        </p>
        <div className="flex gap-x-3 mx-auto items-center justify-center">
          <button
            type="button"
            className="text-sm bg-primary hover:bg-primary/90 px-5 py-1 rounded-full"
          >
            عن المنصة
          </button>
          <a
            href="#contact"
            className="text-sm bg-secondary hover:bg-secondary/90 px-5 py-1 rounded-full text-white"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
}
