import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Newsletter from "@/components/Newsletter";
import Works from "@/components/Works";
import Inspo from "@/components/Inspo";

const Home = () => {
  return (
    <div>
      <Hero />
      <Why />
      <Newsletter />
      <Works />
      <Inspo />
    </div>
  );
};

export default Home;
