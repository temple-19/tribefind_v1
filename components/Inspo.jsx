import React from "react";
import Link from "next/link";
import Image from "next/image";
const Inspo = () => {
  return (
    <div className="w-full text-left text-[12px] md:text-[18px] ">
      <h2 className="md:text-4xl text-[28px] md:my-10 my-4">
        Stay Ahead with Expert Insights
      </h2>
      <div className=" rounded-xl  text-black mx-auto  justify-center items-center py-4 space-x-2 md:space-x-5">
        <Link
          className=" py-3 px-2 font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
          href="https://form.typeform.com/to/LV3PybD4"
        >
          Newsletter
        </Link>
        <Link
          className=" py-3 px-2 font-semibold bg-[#DCDCDC] whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
          href="https://form.typeform.com/to/LV3PybD4"
        >
          Blog
        </Link>
      </div>
      <div className="md:flex items-center justify-between md:space-x-10">
        <div className="bg-[#1EBDEA] py-5 px-5  rounded-xl md:w-1/3 mt-5 text-black">
          <Image
            src="/assets/images/blog1.png"
            alt="iPhone Illustration"
            width={300}
            height={200}
            className="mx-auto "
          />
          {/* <p className="text-[16px] mt-7 whitespace-nowrap ">
            Coming Soon, 2025
          </p>
          <h3 className="">
            Beyond Likes: How to Land High-Paying Brand Deals and Build a
            Sustainable Career
          </h3> */}
        </div>
        <div className="bg-[#FF501E] py-5 px-5  rounded-xl md:w-1/3 mt-5 text-black">
          <Image
            src="/assets/images/blog3.png"
            alt="iPhone Illustration"
            width={300}
            height={200}
            className="mx-auto "
          />
          {/* <p className="text-[16px] mt-7 whitespace-nowrap">
            Coming Soon, 2025
          </p>
          <h3 className="">
            Why Traditional Ads Are Failing – And How Influencer Marketing Can
            10x Your ROI
          </h3> */}
        </div>
        <div className="bg-[#1C1D1E] py-5 px-5 rounded-xl md:w-1/3 mt-5 text-white">
          <Image
            src="/assets/images/blog2.png"
            alt="iPhone Illustration"
            width={300}
            height={200}
            className="mx-auto"
          />
          {/* <p className="text-[16px] mt-7 whitespace-nowrap">
            Coming Soon, 2025
          </p>
          <h3 className="">
            From Awareness to Sales: How the Right Influencer Can Transform Your
            Business
          </h3> */}
        </div>
      </div>
      <div className="text-center mt-7">
        <div className="flex justify-center">
          <Image
            src="/assets/images/sleft.png"
            alt="trident Illustration"
            width={50}
            height={20}
            className=" "
          />
          <h2 className="md:text-4xl text-[28px] md:my-10 my-4 leading-[]">
            Ready to Level Up <br /> Your Influencer Game or Brand?
          </h2>
          <Image
            src="/assets/images/sright.png"
            alt="trident Illustration"
            width={50}
            height={20}
          />
        </div>
        <Link
          className="p-2 bg-black text-white font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
          href="https://form.typeform.com/to/LV3PybD4"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Inspo;
