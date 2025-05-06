import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="w-full my-10 md:flex text-black bg-[#FF501E] rounded-xl space-x-3 py-5">
      <Image
        src="/assets/images/trileft.png"
        alt="trident Illustration"
        width={300}
        height={150}
        className="mx-auto hidden lg:block"
      />
      <div className="text-center my-auto">
        <h2 className="md:text-4xl text-[28px] font-semibold pt-8 pb-4">
          Connecting Brands with Africa&#39;s Top Creators
          <br />
        </h2>
        <p className="p-4 lg:text-[20px]">
          Tribe Find is home to the most diverse network of creators across
          Africa. We&#39;re dedicated to helping brands and influencers connect
          and create meaningful partnerships that make an impact.
        </p>
      </div>
      <Image
        src="/assets/images/triright.png"
        alt="trident Illustration"
        width={300}
        height={150}
        className="mx-auto hidden lg:block"
      />
    </div>
  );
};

export default Newsletter;
