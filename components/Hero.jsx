import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <h1 className="text-center lg:text-6xl md:text-5xl text-[28px] leading-[1.8] md:leading-[1.8] lg:leading-[1.8] font-semibold p-5 whitespace-nowrap">
        Where{" "}
        <span className="bg-[#FF501E] text-white px-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_black]">
          Brands
        </span>{" "}
        Meet <br />{" "}
        <span className="bg-[#1EBDEA] text-white px-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_black]">
          Influencers
        </span>{" "}
        the Right Way
      </h1>
      <p className="text-center text-[12px] md:text-[22px]">
        Get started, join the waitlist
        <br />
      </p>
      <Link href="https://form.typeform.com/to/LV3PybD4" passHref>
        <button className="bg-black text-white md:flex px-4 py-2  mx-auto mt-3 rounded hover:bg-red-600 hidden ">
          Get Started
          <Image
            src="/assets/icons/right arrow.svg"
            alt="logo"
            width={20}
            height={20}
            className="object-contain ml-3 mt-1"
          />
        </button>
      </Link>
      <Image
        src="/assets/images/iPhone.svg"
        alt="iPhone Illustration"
        width={300}
        height={150}
        className="mx-auto mt-10"
      />
    </section>
  );
};

export default Hero;
