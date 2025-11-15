import SearchInput from "../ui/search";
import Image from "next/image";
import { Heading } from "../ui/heading";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden m-0">
      <div className="hidden md:block relative w-full h-[550px] sm:h-[650px] lg:h-[1000px]">
        <Image
          src="https://assets.capcons.com/images/HeroDesk1.png"
          alt="Landing banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bottom-20 flex flex-col items-center justify-center gap-6 sm:gap-6 z-30 px-4">
          <Heading as="h1" className="text-center">
            Built for the <span className="text-primary-900">creators</span>{" "}
            <br />
            of <span className="text-primary-900">tomorrow.</span>
          </Heading>

          <SearchInput placeholder="Enter your Email" />
        </div>
      </div>{" "}
      <div className="md:hidden relative w-full h-[550px] sm:h-[650px] lg:h-[1000px]">
        <Image
          src="https://assets.capcons.com/images/Hero Section.png"
          alt="Landing banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bottom-20 flex flex-col items-center justify-center gap-6 sm:gap-6 z-30 px-4">
          <Heading as="h1" className="text-center">
            Built for the <span className="text-primary-900">creators</span>{" "}
            <br />
            of <span className="text-primary-900">tomorrow.</span>
          </Heading>

          <SearchInput placeholder="Enter your Email" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
