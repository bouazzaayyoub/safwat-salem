import React from 'react';
import bgImage from '../../public/quran-2.jpg';

type Props = { handleClick: any; title: string; image?: string };

function VideoCard({ handleClick, title, image }: Props) {
  return (
    <div
      onClick={handleClick}
      className="text-white cursor-pointer flex flex-col justify-between  relative z-10 rounded-lg h-44 hover:-translate-y-1 hover:scale-[1.05] transition-all
    before:content-['']
    before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-t
  before:from-black
    before:opacity-75
    before:z-[-5] before:rounded-lg"
      style={{
        backgroundImage: `url(${image || bgImage.src})`,
        backgroundPosition: 'center left',
        backgroundSize: 'cover',
      }}
    >
      <div className="px-3 pt-2 flex justify-end">
        <span className="bg-primary/80 text-white px-2 py-1 rounded-full text-sm">
          درس
        </span>
      </div>
      <div className="card-img-overlay d-flex align-items-center p-3 p-sm-2">
        <div className="w-100 mt-auto line-clamp-3">
          <h3 className="font-bold text-base">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
