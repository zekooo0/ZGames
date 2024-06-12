"use client";

import { Menu as MenuIcon, X } from "lucide-react";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <MenuIcon onClick={() => setIsOpen((prev) => !prev)} />
      {isOpen && (
        <div className="top-4 right-0 z-20 absolute bg-white p-4 rounded-tl-3xl rounded-bl-3xl w-1/2 h-[calc(100vh-2rem)]">
          {/* <div className="flex justify-end">
            <ModeToggle />
          </div> */}
          <div className="flex flex-col space-y-10 text-black">
            <div className="flex justify-between items-center">
              <Link href={"/"} className="font-semibold text-2xl">
                Home
              </Link>
              <X onClick={() => setIsOpen((prev) => !prev)} />
            </div>
            <div>
              <Link href={"/"} className="font-semibold text-2xl">
                Browse
              </Link>
              <div className="flex flex-col space-y-4 mt-4 pl-2">
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
        </div>
      )}
    </div>
  );
};

export default Menu;
