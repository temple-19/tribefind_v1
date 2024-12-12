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
      <p className="text-center text-[12px] md:text-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br />
        tempor. sed do eiusmod tempor.
      </p>
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
