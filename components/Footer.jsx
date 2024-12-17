import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-black rounded-xl mt-6  ">
      <div className="text-center lg:flex text-white ">
        <div className="p-8 lg:w-3/5">
          <Image
            src="/assets/images/logowhite.svg"
            alt="iPhone Illustration"
            width={200}
            height={200}
            className="mx-auto lg:mx-0"
          />
          <p className="lg:text-left">
            Where Brands Meet Influencers the Right Way
          </p>
        </div>
        <div className=" w-full justify-center   my-6 gap-9 text-left flex">
          <ul className="text-[14px] md:text-[13px] list-none text-white">
            <li className=" mb-1 whitespace-nowrap text-slate-400">Company</li>
            <li className=" mb-1 whitespace-nowrap">Product</li>
            <li className=" mb-1 whitespace-nowrap">How it works</li>
            <li className=" mb-1 whitespace-nowrap">About</li>
          </ul>
          <ul className="text-[14px] md:text-[13px] list-none text-white">
            <li className=" mb-1 whitespace-nowrap text-slate-400">
              Resources
            </li>
            <li className=" mb-1 whitespace-nowrap">Blog</li>
            <li className=" mb-1 whitespace-nowrap">Newsletter</li>
            <li className=" mb-1 whitespace-nowrap">Guides</li>
          </ul>
        </div>
        <div className="lg:w-1/3 md:mx-auto lg:my-auto mt-5 p-5 lg:text-right whitespace-nowrap">
          <h3 className=" whitespace-nowrap text-[18px]">
            SUBSCRIBE TO FOR MORE UPDATES
          </h3>
          <div className="my-2">
            <input className="my-3 mr-3 rounded-xl" />
            <button className=" border border-white rounded-xl py-1 px-2">
              Join Us
            </button>
          </div>
          <div className="flex justify-end gap-3">
            <Image
              src="/assets/icons/Instagram.svg"
              alt="iPhone Illustration"
              width={20}
              height={20}
              className="mx-auto lg:mx-0"
            />
            <Image
              src="/assets/icons/Linkedin.svg"
              alt="iPhone Illustration"
              width={20}
              height={20}
              className="mx-auto lg:mx-0"
            />
            <Image
              src="/assets/icons/Youtube.svg"
              alt="iPhone Illustration"
              width={20}
              height={20}
              className="mx-auto lg:mx-0"
            />
          </div>
        </div>
        {/* add a horizontal  line here */}
      </div>
      <div>
        <hr className="border-1  mx-auto border-white w-[90%]" />
      </div>
      <div className="md:flex text-center text-white justify-between p-4 text-[14px]">
        <div className="">
          <p>Copyright© Tribefind</p>
        </div>
        <div className="md:flex gap-3 text-center">
          <p>All Rights Reserved</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
