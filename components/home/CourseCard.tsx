import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = { title: string; description: string; href: string };

function CourseCard({ description, title, href }: Props) {
  return (
    <div className="bg-white shadow-lg rounded-xl flex flex-col justify-between">
      <div className="">
        <div className="w-full min-h-[12rem] relative">
          <Image
            className="object-cover rounded-lg"
            src="/quran.png"
            alt="Image Description"
            fill
          />
        </div>
        <div className="px-4 py-3">
          <h3 className="mb-3 text-primary text-base font-bold">{title}</h3>
          <p className="text-xs">{description}</p>
        </div>
      </div>

      <div className="text-center border-t hover:bg-gray-50">
        <Link
          href={href}
          className="w-full text-sm text-gray-500 inline-flex justify-center py-4"
        >
          لمعرفة المزيد ...
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
