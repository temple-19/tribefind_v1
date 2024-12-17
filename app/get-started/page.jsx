import React from "react";

const page = () => {
  return (
    <div className="bg-white rounded-xl p-4 mx-auto w-60% ">
      <h2 className="text-[36px] mb-5">
        Sign up to connect with the right brands
      </h2>
      <div className="flex-col">
        <button className="p-2 w-full mt-3 bg-[#F4F9F5] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black">
          Continue with Apple
        </button>
        <button className="p-2 w-full mt-3 bg-[#1EBDEA] text-black font-semibold whitespace-nowrap rounded-lg border-2 border-r-4 border-b-4 border-black">
          Continue with Google
        </button>
      </div>
      <div className="flex items-center gap-2 justify-center">
        <hr className="border border-[#E9ECE9] w-[30%]" />
        <p className="text-center text-black">or</p>
        <hr className="border border-[#E9ECE9] w-[30%]" />
      </div>
      <div className="">
        <div className="space-x-6 flex justify-between">
          <input className=" border w-[40%] my-2 rounded-xl border-[#E9ECE9]" />
          <input className=" border w-[40%] my-2 rounded-xl border-[#E9ECE9]" />
        </div>
        <input className=" w-full border  my-2 rounded-xl border-[#E9ECE9] " />
        <input className=" w-full border  my-2 rounded-xl border-[#E9ECE9] " />
        <input className=" w-full border  my-2 rounded-xl border-[#E9ECE9] " />
        <p>Send me helpful emails to find rewarding work and job leads.</p>
        <p>
          Yes, I understand and agree to the TribeFind Terms of Service,
          including the User Agreement and Privacy policy
        </p>
        <input className=" w-full border   my-2 rounded-xl border-[#E9ECE9]" />
      </div>
    </div>
  );
};

export default page;
