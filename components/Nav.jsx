"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-3">
      {/* Left Section: Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Center Section: Navigation Buttons */}
      <div className="hidden md:flex gap-8">
        <Link
          href="/creator"
          className="text-gray-700 hover:text-black font-medium"
        >
          For Creators
        </Link>
        <Link
          href="/brand"
          className="text-gray-700 hover:text-black font-medium"
        >
          For Brands
        </Link>
        {/* <Link
          href="/about-us"
          className="text-gray-700 hover:text-black font-medium"
        >
          About Us
        </Link> */}
      </div>

      {/* Right Section: Sign In / Hamburger Menu */}
      <div className="flex items-center relative">
        {session?.user ? (
          <div className="flex gap-4 items-center">
            <button
              type="button"
              onClick={signOut}
              className="border border-gray-700 text-gray-700 px-4 py-1 rounded hover:bg-gray-100 hidden sm:block"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          // <button
          //   type="button"
          //   onClick={() => providers && signIn(Object.values(providers)[0].id)}
          //   className="bg-black text-white md:flex px-4 py-2 rounded hover:bg-red-600 hidden "
          //   href="https://form.typeform.com/to/LV3PybD4"
          // >
          //   Get Started
          //   <Image
          //     src="/assets/icons/right arrow.svg"
          //     alt="logo"
          //     width={20}
          //     height={20}
          //     className="object-contain ml-3 mt-1"
          //   />
          // </button>
          <Link href="https://form.typeform.com/to/LV3PybD4" passHref>
            <button className="bg-black text-white md:flex px-4 py-2 rounded hover:bg-red-600 hidden ">
              Get Started
              <Image
                src="/assets/icons/right arrow.svg"
                alt="logo"
                width={20}
                height={20}
                className="object-contain ml-3 mt-1"
              />
            </button>
          </Link>
        )}

        {/* Hamburger Menu for Mobile */}
        <button
          type="button"
          className="md:hidden flex items-center"
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={45}
            height={45}
          />
        </button>

        {toggleDropdown && (
          <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 z-50">
            <Link
              href="https://form.typeform.com/to/LV3PybD4"
              className="text-gray-700 whitespace-nowrap  hover:text-black font-medium"
              onClick={() => setToggleDropdown(false)}
            >
              For Creators
            </Link>
            <Link
              href="https://form.typeform.com/to/LV3PybD4"
              className="text-gray-700 whitespace-nowrap  hover:text-black font-medium"
              onClick={() => setToggleDropdown(false)}
            >
              For Brands
            </Link>
            {/* <Link
              href="/about-us"
              className="text-gray-700 hover:text-black whitespace-nowrap  font-medium"
              onClick={() => setToggleDropdown(false)}
            >
              About Us
            </Link> */}
            {session?.user ? (
              <button
                type="button"
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
                className="text-red-500 whitespace-nowrap font-medium"
              >
                Sign Out
              </button>
            ) : (
              <Link href="https://form.typeform.com/to/LV3PybD4" passHref>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    providers && signIn(Object.values(providers)[0].id);
                  }}
                  className=" whitespace-nowrap font-medium"
                >
                  <span className="mr-1 text-[#FF501E]">Get</span>
                  <span className="text-[#1EBDEA]">Started</span>
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
