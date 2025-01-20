"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const page = () => {
  const [checkboxOneChecked, setCheckboxOneChecked] = useState(false);
  const [checkboxTwoChecked, setCheckboxTwoChecked] = useState(false);

  const handleCheckboxChange = (event, setState) => {
    setState(event.target.checked);
  };

  return (
    <div className="bg-white rounded-xl p-4 mx-auto max-w-[650px] ">
      <h2 className="text-[27px] md:text-[32px] md:text-center mb-5 md:w-3/4 md:mx-auto">
        Sign up to connect with the right Creators & Influencers.
      </h2>
      <div className="flex-col">
        <button className="p-2 w-full mt-3 bg-[#F4F9F5] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black flex items-center justify-center gap-2">
          <Image
            src="/assets/icons/google.svg"
            alt="iPhone Illustration"
            width={20}
            height={20}
            className=""
          />
          <span>Continue with Apple</span>
        </button>

        <button className="p-2 w-full mt-3 bg-[#1EBDEA] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black flex justify-center items-center gap-2">
          <Image
            src="/assets/icons/apple.svg"
            alt="iPhone Illustration"
            width={20}
            height={20}
            className=""
          />
          <span>Continue with Apple</span>
        </button>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <hr className="border border-[#E9ECE9] w-[30%]" />
        <p className="text-center text-black">or</p>
        <hr className="border border-[#E9ECE9] w-[30%]" />
      </div>
      <div className="">
        <div className="space-x-6 flex justify-between">
          <input
            type="text"
            placeholder="First name"
            className=" border w-[50%] my-2  rounded-xl p-2 border-[#E9ECE9]"
          />
          <input
            type="text"
            placeholder="Last name"
            className=" border w-[50%] my-2 rounded-xl p-2 border-[#E9ECE9]"
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className=" w-full border  my-2 rounded-xl p-2 border-[#E9ECE9] "
        />
        <input
          type="password"
          placeholder="Password (8 or more characters)"
          className=" w-full border  my-2 rounded-xl p-2 border-[#E9ECE9] "
        />
        <input
          type="text"
          placeholder="Enter your name"
          className=" w-full border  my-2 rounded-xl p-2 border-[#E9ECE9] "
        />
        {/* Checkbox 1 */}
        <div className="flex items-start my-2">
          <input
            type="checkbox"
            className="mt-1 mr-2"
            onChange={(e) => handleCheckboxChange(e, setCheckboxOneChecked)}
          />
          <p>Send me helpful emails to find rewarding work and job leads.</p>
        </div>

        {/* Checkbox 2 */}
        <div className="flex items-start my-2">
          <input
            type="checkbox"
            className="mt-1 mr-2"
            onChange={(e) => handleCheckboxChange(e, setCheckboxTwoChecked)}
          />
          <p>
            Yes, I understand and agree to the TribeFind Terms of Service,
            including the User Agreement and Privacy policy.
          </p>
        </div>
        {/* <input className=" w-full border  my-2 rounded-xl p-2 border-[#E9ECE9] " />
        <input className=" w-full border  my-2 rounded-xl p-2 border-[#E9ECE9] " />
        <div className="space-x-6 flex justify-between">
          <input className=" border w-[50%] my-2 rounded-xl p-2 border-[#E9ECE9]" />
          <input className=" border w-[50%] my-2 rounded-xl p-2 border-[#E9ECE9]" />
        </div> */}
        <button className="p-2 w-full mt-3 bg-[#FF501E] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black">
          Create An Account
        </button>
        <button className="p-2 w-full mt-3 text-[14px] text-black font-semibold whitespace-nowrap rounded-lg ">
          Already have an account?{" "}
          <span className="text-[#ff501e]"> Log In</span>
        </button>
      </div>
    </div>
  );
};

export default page;
