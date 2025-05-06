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
          href="https://form.typeform.com/to/LV3PybD4"
        >
          Brands
        </Link>
        <Link
          className="bg-[#FF501E] py-3 px-6 font-semibold rounded-lg border-2 border-r-4 border-b-4 border-black"
          href="https://form.typeform.com/to/LV3PybD4"
        >
          Influencers
        </Link>
      </div>
      <div className="mt-10 px-10 text-center md:text-left md:flex justify-between">
        <div className="md:w-1/2">
          <h2 className="md:text-3xl text-xl my-8">Targeted Matches</h2>
          <p>
            Our smart matching system connects you with influencers whose
            audience and content align with your brand, ensuring authentic
            engagement and higher conversion rates.
          </p>
        </div>
        <Image
          src="/assets/images/targeted.jpg"
          alt="influencer marketing targeted matches"
          width={500}
          height={200}
          className="mx-auto my-8 rounded-lg"
        />
      </div>
      <div className="mt-10 px-10 text-center md:text-right md:flex md:justify-between md:flex-row-reverse">
        <div className="md:w-1/2">
          <h2 className="md:text-3xl text-xl my-8">Seamless Collaboration</h2>
          <p>
            From discovering influencers to managing deals and tracking
            performance, our all-in-one platform simplifies the process, saving
            you time and maximizing efficiency.
          </p>
        </div>
        <Image
          src="/assets/images/afri1.jpg"
          alt="influencer marketing in africa"
          width={500}
          height={200}
          className="mx-auto my-8 rounded-lg"
        />
      </div>
      <div className="mt-10 px-10 text-center md:text-left md:flex justify-between">
        <div className="md:w-1/2">
          <h2 className="md:text-3xl text-xl my-8">Results-Driven Growth</h2>
          <p>
            Whether you're looking to increase brand awareness, drive traffic,
            or boost sales, TribeFind helps you achieve measurable success with
            the right influencer partnerships.
          </p>
        </div>
        <Image
          src="/assets/images/analytics.jpg"
          alt="influencer marketing saas analytics"
          width={400}
          height={200}
          className="mx-auto my-8 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Why;
