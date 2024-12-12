import React from "react";
import Link from "next/link";
import Image from "next/image";
const Inspo = () => {
  return (
    <div className="w-full text-left text-[12px] md:text-[18px] ">
      <h2 className="md:text-4xl text-[28px] md:my-10 my-4">
        Inspiration that Ignites Your Creativity
      </h2>
      <div className=" rounded-xl  text-black mx-auto  justify-center items-center py-4 space-x-2 md:space-x-5">
        <Link
          className=" py-3 px-2 font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
          href="/get-started"
        >
          Newsletter
        </Link>
        <Link
          className=" py-3 px-2 font-semibold bg-[#DCDCDC] whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
          href="/get-started"
        >
          Blog
        </Link>
      </div>
      <div className="md:flex items-center justify-between md:space-x-10">
        <div className="bg-[#1EBDEA] py-5 px-5  rounded-xl md:w-1/3 mt-5 text-black">
          <Image
            src="/assets/images/iPhone.svg"
            alt="iPhone Illustration"
            width={200}
            height={200}
            className="mx-auto mt-8"
          />
          <p className="text-[16px] mt-7 whitespace-nowrap ">
            August 13th, 2024
          </p>
          <h3 className="whitespace-nowrap">Track Performance</h3>
        </div>
        <div className="bg-[#FF501E] py-5 px-5  rounded-xl md:w-1/3 mt-5 text-black">
          <Image
            src="/assets/images/iPhone.svg"
            alt="iPhone Illustration"
            width={200}
            height={200}
            className="mx-auto mt-8"
          />
          <p className="text-[16px] mt-7 whitespace-nowrap">
            August 13th, 2024
          </p>
          <h3 className="whitespace-nowrap">Track Performance</h3>
        </div>
        <div className="bg-[#1C1D1E] py-5 px-5 rounded-xl md:w-1/3 mt-5 text-white">
          <Image
            src="/assets/images/iPhone.svg"
            alt="iPhone Illustration"
            width={200}
            height={200}
            className="mx-auto mt-8"
          />
          <p className="text-[16px] mt-7 whitespace-nowrap">
            August 13th, 2024
          </p>
          <h3 className="whitespace-nowrap"> Track Performance</h3>
        </div>
      </div>
      <div className="text-center mt-7">
        <h2 className="md:text-4xl text-[28px] md:my-10 my-4 leading-[]">
          Ready to Level Up Your <br /> Influencer Game or Brand?
        </h2>
        <Link
          className="p-2 bg-black text-white font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
          href="/get-started"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Inspo;
