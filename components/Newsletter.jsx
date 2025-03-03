import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="w-full my-10 md:flex text-black bg-[#FF501E] rounded-xl space-x-3 py-5">
      <Image
        src="/assets/images/iPhone.svg"
        alt="iPhone Illustration"
        width={300}
        height={150}
        className="mx-auto mt-10 hidden md:block"
      />
      <div className="text-center">
        <h2 className="md:text-4xl text-[28px] pt-8 pb-4">
          Connecting Brands with Africa&#39;s Top Creators
          <br />
        </h2>
        <p className="p-4">
          Tribe Find is home to the most diverse network of creators across
          Africa. We&#39;re dedicated to helping brands and influencers connect
          and create meaningful partnerships that make an impact.
        </p>
      </div>
      <Image
        src="/assets/images/iPhone.svg"
        alt="iPhone Illustration"
        width={300}
        height={150}
        className="mx-auto mt-10 hidden lg:block"
      />
    </div>
  );
};

export default Newsletter;
