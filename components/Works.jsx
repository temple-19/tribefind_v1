import React from "react";
import Link from "next/link";
import Image from "next/image";

const Works = () => {
  return (
    <div className="w-full text-center text-[12px] md:text-[18px] ">
      <div className="">
        <h2 className="md:text-4xl text-[28px] md:my-10 my-4">How it works</h2>
      </div>
      <div className=" rounded-xl  text-black mx-auto  justify-center items-center py-4 space-x-2 md:space-x-5">
        <Link
          className="bg-[#1EBDEA] py-3 whitespace-nowrap px-2 font-semibold rounded-lg border-2 border-black"
          href="/get-started"
        >
          Create An Account
        </Link>
        <Link
          className=" py-3 px-2 font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
          href="/get-started"
        >
          Collaborate
        </Link>
        <Link
          className="bg-[#FF501E] whitespace-nowrap py-3 px-2 font-semibold rounded-lg border-2 border-r-4 border-b-4 border-black"
          href="/get-started"
        >
          Track Performance
        </Link>
      </div>
      <div className="space-y-4 md:space-y-10">
        <div className=" bg-[#1EBDEA] px-4 py-10 text-white rounded-xl mt-6 ">
          <div className="mt-10 px-10 text-center md:text-left md:flex justify-between">
            <div className="md:w-1/2">
              <h2 className="md:text-3xl text-xl mb-8">
                Maximize Brand Awareness Globally
              </h2>
              <p className="mb-5">
                Expand your brand's presence worldwide by partnering with
                influencers from our extensive database. Tribefind offers a
                unique advantage with our large selection of influencers from
                Africa, helping you make a global impact.
              </p>
              <Link
                className="p-2 bg-[#F4F9F5] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
                href="/get-started"
              >
                Collaborate
              </Link>
            </div>
            <Image
              src="/assets/images/iPhone.svg"
              alt="iPhone Illustration"
              width={200}
              height={200}
              className="mx-auto mt-8"
            />
          </div>
        </div>
        <div className=" bg-[#FF501E] px-4 py-10 mt-6 text-white rounded-xl ">
          <div className="mt-10 px-10 text-center md:text-left md:flex justify-between">
            <div className="md:w-1/2">
              <h2 className="md:text-3xl text-xl mb-8">
                Maximize Brand Awareness Globally
              </h2>
              <p className="mb-5">
                Expand your brand's presence worldwide by partnering with
                influencers from our extensive database. Tribefind offers a
                unique advantage with our large selection of influencers from
                Africa, helping you make a global impact.
              </p>
              <Link
                className="p-2 bg-[#F4F9F5] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
                href="/get-started"
              >
                Collaborate
              </Link>
            </div>
            <Image
              src="/assets/images/iPhone.svg"
              alt="iPhone Illustration"
              width={200}
              height={200}
              className="mx-auto mt-8"
            />
          </div>
        </div>
        <div className=" bg-[#1C1D1E] px-4 py-10 mt-6 text-white rounded-xl ">
          <div className="mt-10 px-10 text-center md:text-left md:flex justify-between">
            <div className="md:w-1/2">
              <h2 className="md:text-3xl text-xl mb-8">
                Maximize Brand Awareness Globally
              </h2>
              <p className="mb-5">
                Expand your brand's presence worldwide by partnering with
                influencers from our extensive database. Tribefind offers a
                unique advantage with our large selection of influencers from
                Africa, helping you make a global impact.
              </p>
              <Link
                className="p-2 bg-[#F4F9F5] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
                href="/get-started"
              >
                Collaborate
              </Link>
            </div>
            <Image
              src="/assets/images/iPhone.svg"
              alt="iPhone Illustration"
              width={200}
              height={200}
              className="mx-auto mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
