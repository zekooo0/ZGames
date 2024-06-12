import Link from "next/link";
import React from "react";

const Aside = () => {
  return (
    <div className="top-0 sticky lg:flex flex-col flex-1 space-y-10 hidden pt-10 h-fit">
      <div className="flex justify-between items-center">
        <Link href={"/"} className="font-semibold text-2xl">
          Home
        </Link>
      </div>
      <div>
        <Link href={"/"} className="font-semibold text-2xl">
          Browse
        </Link>
        <div className="flex flex-col space-y-4 mt-4">
          <Link href={"/collection"}>Collections</Link>
          <Link href={"/"}>Platforms</Link>
          <Link href={"/"}>Stores</Link>
          <Link href={"/"}>Genres</Link>
          <Link href={"/"}>Creators</Link>
          <Link href={"/"}>Tags</Link>
          <Link href={"/"}>Developers</Link>
          <Link href={"/"}>Publishers</Link>
        </div>
      </div>
    </div>
  );
};

export default Aside;
