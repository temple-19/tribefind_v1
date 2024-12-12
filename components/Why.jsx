import Link from "next/link";
import React from "react";
import Image from "next/image";

const Why = () => {
  return (
    <div className=" bg-[#1C1D1E] p-4 text-white rounded-xl ">
      <div className="text-center">
        <h2 className="md:text-4xl text-[28px] my-6">
          See Why Tribe Find is the Right Choice for You
        </h2>
      </div>
      <div className="bg-[#F4F9F5]  rounded-xl text-black md:max-w-[400px] max-w-[300px] mx-auto flex justify-center items-center py-4 space-x-5">
        <Link
          className="bg-[#1EBDEA] py-3 px-10 font-semibold rounded-lg border-2 border-black"
          href="/get-started"
        >
          Brands
        </Link>
        <Link
          className="bg-[#FF501E] py-3 px-6 font-semibold rounded-lg border-2 border-r-4 border-b-4 border-black"
          href="/get-started"
        >
          Influencers
        </Link>
      </div>
      <div className="mt-10 px-10 text-center md:text-left md:flex justify-between">
        <div className="md:w-1/2">
          <h2 className="md:text-3xl text-xl my-8">
            Maximize Brand Awareness Globally
          </h2>
          <p>
            Expand your brand's presence worldwide by partnering with
            influencers from our extensive database. Tribefind offers a unique
            advantage with our large selection of influencers from Africa,
            helping you make a global impact.
          </p>
        </div>
        <Image
          src="/assets/images/iPhone.svg"
          alt="iPhone Illustration"
          width={200}
          height={200}
          className="mx-auto my-8"
        />
      </div>
      <div className="mt-10 px-10 text-center md:text-left md:flex md:justify-between md:flex-row-reverse">
        <div className="md:w-1/2">
          <h2 className="md:text-3xl text-xl my-8">
            Maximize Brand Awareness Globally
          </h2>
          <p>
            Expand your brand's presence worldwide by partnering with
            influencers from our extensive database. Tribefind offers a unique
            advantage with our large selection of influencers from Africa,
            helping you make a global impact.
          </p>
        </div>
        <Image
          src="/assets/images/iPhone.svg"
          alt="iPhone Illustration"
          width={200}
          height={200}
          className="mx-auto my-8"
        />
      </div>
      <div className="mt-10 px-10 text-center md:text-left md:flex justify-between">
        <div className="md:w-1/2">
          <h2 className="md:text-3xl text-xl my-8">
            Maximize Brand Awareness Globally
          </h2>
          <p>
            Expand your brand's presence worldwide by partnering with
            influencers from our extensive database. Tribefind offers a unique
            advantage with our large selection of influencers from Africa,
            helping you make a global impact.
          </p>
        </div>
        <Image
          src="/assets/images/iPhone.svg"
          alt="iPhone Illustration"
          width={200}
          height={200}
          className="mx-auto my-8"
        />
      </div>
    </div>
  );
};

export default Why;
