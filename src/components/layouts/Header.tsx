"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <header className="w-full px-3 py-5 flex items-center justify-center font-poppins border-b">
      <div className="w-full max-w-7xl flex items-center justify-between gap-5">
        {/* Logo & Links */}
        <div className="flex items-center gap-7">
          <span className="text-4xl">Alfred</span>
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href={"/beranda"}
              className="px-5 py-3 rounded-full hover:bg-slate-100"
            >
              Beranda
            </Link>
            <Link
              href={"/explore"}
              className="px-5 py-3 rounded-full hover:bg-slate-100"
            >
              Explore
            </Link>
          </div>
        </div>

        {/* Search Bar & Log in/Sign Up - Desktop */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="relative flex items-center">
            <div className="absolute w-8 h-8 rounded-full right-3 bg-slate-600"></div>
            <input
              type="text"
              name="quickJobSearch"
              placeholder="Cari lowongan..."
              className="w-[300px] pl-5 pr-12 py-3 rounded-full border text-sm border-gray-300"
            />
          </div>

          <button className="px-5 py-3 rounded-full bg-[#F0EEFF]">
            Log In
          </button>

          <button className="px-5 py-3 rounded-full bg-[#5F4BDB] text-white">
            Sign Up
          </button>
        </div>

        {/* Search Bar & Log in/Sign Up - Mobile */}
        <div className="relative flex flex-col gap-5 md:hidden">
          <div
            onClick={() => setDisplayMenu((prev) => !prev)}
            className="w-12 h-12 rounded-full bg-slate-600"
          ></div>

          {displayMenu && (
            <div className="absolute right-0 top-20 flex flex-col gap-3 p-5 border border-gray-300 rounded-lg bg-white md:hidden">
              <div className="relative flex items-center border-b pb-5">
                <div className="absolute w-8 h-8 rounded-full right-3 bg-slate-600"></div>
                <input
                  type="text"
                  name="quickJobSearch"
                  placeholder="Cari lowongan..."
                  className="w-[280px] pl-5 pr-12 py-3 rounded-full border text-sm border-gray-300 sm:w-[370px]"
                />
              </div>

              <div className="flex flex-col items-end gap-2 border-b pb-3 text-right sm:hidden">
                <Link
                  href={"/beranda"}
                  className="w-full px-5 py-3 rounded-full hover:bg-slate-100"
                >
                  Beranda
                </Link>
                <Link
                  href={"/explore"}
                  className="w-full px-5 py-3 rounded-full hover:bg-slate-100"
                >
                  Explore
                </Link>
              </div>

              <div className="flex items-center justify-end gap-4">
                <button className="w-fit px-6 py-3 rounded-full bg-[#F0EEFF]">
                  Log In
                </button>
                <button className="w-fit px-6 py-3 rounded-full bg-[#5F4BDB] text-white">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
