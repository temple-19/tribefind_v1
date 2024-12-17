"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [checkboxOneChecked, setCheckboxOneChecked] = useState(false);
  const [checkboxTwoChecked, setCheckboxTwoChecked] = useState(false);

  const handleCheckboxChange = (event, setState) => {
    setState(event.target.checked);
  };

  return (
    <div className="bg-white rounded-xl p-10 mx-auto w-[55%]">
      <h2 className="text-[36px] mb-5 text-center">Log in to Tribefind</h2>
      <div className="flex flex-col items-center">
        <input className="p-2 w-full mt-3 text-black font-semibold whitespace-nowrap rounded-lg border border-[#E9ECE9] " />
      </div>
      <div className="flex flex-col items-center">
        <button className="p-2 w-full mt-3 bg-[#FF501E] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black">
          Continue
        </button>
      </div>
      <div className="flex items-center gap-2 my-2 justify-center">
        <hr className="border border-[#E9ECE9] w-[30%]" />
        <p className="text-center text-black">or</p>
        <hr className="border border-[#E9ECE9] w-[30%]" />
      </div>
      <div className="flex flex-col items-center">
        <button className="p-2 w-full mt-3 bg-[#F4F9F5] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black">
          Continue with Apple
        </button>
        <button className="p-2 w-full mt-3 bg-[#1EBDEA] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black">
          Continue with Google
        </button>
      </div>

      <div className="flex flex-col items-center mt-32">
        <div className="flex items-center gap-2 my-2 w-full justify-center">
          <hr className="border border-[#E9ECE9] w-[15%]" />
          <p className="text-center text-black  text-[12px] ">
            Don't have a Tribefind Account
          </p>
          <hr className="border border-[#E9ECE9] w-[15%]" />
        </div>
        <button className="p-2 w-[50%] mt-3 bg-[#FF501E] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black">
          Signup
        </button>
      </div>
    </div>
  );
};

export default page;
