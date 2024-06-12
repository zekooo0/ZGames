"use client";

import Image from "next/image";
import { useState } from "react";

const GameImages = ({ images, trailers }: { images: any; trailers: any }) => {
  let media;
  if (trailers) {
    media = [trailers[0], ...images];
  } else {
    media = [...images];
  }
  console.log(media);
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-[600px] h-[333px]">
        {index === 0 && trailers ? (
          <video controls autoPlay muted>
            <source src={media[0]?.data?.max} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={media[index]?.image}
            alt=""
            objectFit="contain"
            layout="fill"
          />
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {media?.map((item, i) => {
          return (
            <Image
              key={i}
              className="cursor-pointer"
              src={i === 0 && trailers ? item?.preview : item?.image}
              alt=""
              width={100}
              height={100}
              onClick={() => setIndex(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameImages;
