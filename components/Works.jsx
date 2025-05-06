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
          href="https://form.typeform.com/to/LV3PybD4"
        >
          Create An Account
        </Link>
        <Link
          className=" py-3 px-2 font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
          href="https://form.typeform.com/to/LV3PybD4"
        >
          Collaborate
        </Link>
        <Link
          className="bg-[#FF501E] whitespace-nowrap py-3 px-2 font-semibold rounded-lg border-2 border-r-4 border-b-4 border-black"
          href="https://form.typeform.com/to/LV3PybD4"
        >
          Track Performance
        </Link>
      </div>
      <div className="space-y-4 md:space-y-10">
        <div className=" bg-[#1EBDEA] px-4 py-4 text-white rounded-xl mt-6 ">
          <div className="mt-10 px-10 text-center md:text-left md:flex justify-between">
            <div className="md:w-1/2">
              <h2 className="md:text-3xl text-xl mb-8">Create an Account</h2>
              <p className="mb-5">
                Join our exclusive waitlist and be among the first to access
                Africa&#39;s top brand-influencer marketplace. Secure your spot
                today and get early access when we launch.
              </p>
              <Link
                className="p-2 bg-[#F4F9F5] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
                href="https://form.typeform.com/to/LV3PybD4"
              >
                Collaborate
              </Link>
            </div>
            <Image
              src="/assets/images/create.png"
              alt="iPhone Illustration"
              width={450}
              height={250}
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
        <div className=" bg-[#FF501E] px-4 py-10 mt-6 text-white rounded-xl ">
          <div className="mt-10 px-10 text-center md:text-left md:flex justify-between">
            <div className="md:w-1/2">
              <h2 className="md:text-3xl text-xl mb-8">Collaborate</h2>
              <p className="mb-5">
                Find and connect with the perfect match for your campaign.
                Whether you're a brand looking for authentic voices or a creator
                seeking premium partnerships, TribeFind makes collaboration
                seamless with secure payments and clear communication tools.
              </p>
              <Link
                className="p-2 bg-[#F4F9F5] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
                href="https://form.typeform.com/to/LV3PybD4"
              >
                Collaborate
              </Link>
            </div>
            <Image
              src="/assets/images/iPhone.svg"
              alt="iPhone Illustration"
              width={200}
              height={200}
              className="mx-auto "
            />
          </div>
        </div>
        <div className=" bg-[#1C1D1E] px-4 py-10 mt-6 text-white rounded-xl ">
          <div className="mt-10 px-10 text-center md:text-left md:flex justify-between">
            <div className="md:w-1/2">
              <h2 className="md:text-3xl text-xl mb-8">Track Performance</h2>
              <p className="mb-5">
                Get real-time insights on campaign success. Monitor engagement,
                reach, conversions, and ROI through our intuitive dashboard,
                helping you optimize future partnerships and maximize impact.
              </p>
              <Link
                className="p-2 bg-[#F4F9F5] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
                href="https://form.typeform.com/to/LV3PybD4"
              >
                Collaborate
              </Link>
            </div>
            <Image
              src="/assets/images/kpi.png"
              alt="iPhone Illustration"
              width={550}
              height={250}
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
        <div className=" bg-[#ffffff] px-4 py-10 mt-6 text-black rounded-xl border border-black ">
          <div className="mt-10 px-10 text-center md:text-left md:flex justify-between">
            <div className="md:w-1/2">
              <h2 className="md:text-3xl text-xl mb-8">
                For Creators: Turn Your Influence Into Income
              </h2>
              <p className="mb-5">
                TribeFind gives you access to premium brand partnerships
                tailored to your niche and audience. No more chasing gigs or
                waiting to be discovered — we bring opportunities to you.
                Collaborate with trusted brands, grow your portfolio, and get
                paid to do what you love.
              </p>
              <Link
                className="p-2 bg-[#F4F9F5] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black"
                href="https://form.typeform.com/to/LV3PybD4"
              >
                Collaborate
              </Link>
            </div>
            <Image
              src="/assets/images/creator.jpg"
              alt="iPhone Illustration"
              width={450}
              height={300}
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
