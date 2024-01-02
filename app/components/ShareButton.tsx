'use client';

import { siteMetadata } from '@/data/siteMetadata';
import { shareLink } from '@/utils/navigator';
import { usePathname } from 'next/navigation';
import React from 'react';

type Props = {
  title?: string;
  text?: string;
};

function ShareButton({ text, title }: Props) {
  const pathname = usePathname();

  const shareData = {
    title: title || siteMetadata.title,
    text: text || siteMetadata.description,
    url: `${siteMetadata.siteUrl}${pathname}`,
  };
  return (
    <button
      onClick={() => {
        shareLink({ shareData });
      }}
      className="text-sm inline-flex bg-primary text-white hover:bg-primary/90 px-5 py-2 rounded-full"
    >
      شارك هذا المحتوى
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 256 256"
        className="ms-1 fill-white"
      >
        <path d="M176,160a39.89,39.89,0,0,0-28.62,12.09l-46.1-29.63a39.8,39.8,0,0,0,0-28.92l46.1-29.63a40,40,0,1,0-8.66-13.45l-46.1,29.63a40,40,0,1,0,0,55.82l46.1,29.63A40,40,0,1,0,176,160Zm0-128a24,24,0,1,1-24,24A24,24,0,0,1,176,32ZM64,152a24,24,0,1,1,24-24A24,24,0,0,1,64,152Zm112,72a24,24,0,1,1,24-24A24,24,0,0,1,176,224Z"></path>
      </svg>
    </button>
  );
}

export default ShareButton;
