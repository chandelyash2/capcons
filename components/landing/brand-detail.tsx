import Image from "next/image";
import React from "react";
import { Container } from "../ui/container";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { ArrowUpLeft } from "lucide-react";
import Button from "../ui/button";
import { Slider } from "../ui/slider";

const BrandDetail = () => {
  return (
    <section className="space-y-6">
      <div className="flex gap-4 items-start">
        <Image
          src="https://assets.capcons.com/images/Question.png"
          alt="Ellipse Small"
          width={280}
          height={700}
          className="w-[80px] h-[90px] lg:w-[120px] lg:h-[140px]"
        />
        <div className="flex flex-col justify-between gap-2">
          <Heading as="h1" className="font-normal">
            What is <br />
            <span className="bg-secondary-soft">Capcons?</span>
          </Heading>
          <Text>A new kind of Social Platform — One you own</Text>
        </div>
      </div>

      {/* Main 3-Column Section */}
      <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[650px] lg:min-h-[750px]">
        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <Image
            src="https://assets.capcons.com/images/BrandDetail.png"
            alt="Ellipse Large"
            width={400}
            height={400}
            className="w-full max-w-[450px] h-[300px] lg:h-[350px] mt-30 mx-auto"
          />

          <div className="text-right text-2xl lg:text-3xl font-semibold relative">
            Monetize Through
            <br />
            Your Community.
            <br />
            Turn engagement
            <br />
            <span className="absolute -left-4 lg:left-20 -bottom-2 bg-secondary-soft w-12 h-12 rounded-full flex items-center justify-center">
              <ArrowUpLeft color="white" size={28} />
            </span>
            into earning power
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col justify-between items-center">
          <div className="bg-white rounded-2xl p-6 shadow-xl space-y-4 w-[350px]">
            <div className="flex justify-between">
              <Image
                src="https://assets.capcons.com/images/Discussion.png"
                alt="Discusiion Large"
                width={120}
                height={400}
                className="lg:w-[120px] lg:h-[200px] mx-auto"
              />{" "}
              <Image
                src="https://assets.capcons.com/images/Discuuson1.png"
                alt="Discussion Large"
                width={120}
                height={400}
                className="lg:w-[120px] lg:h-[200px] mx-auto"
              />
            </div>
            <div className="flex items-center justify-between">
              {" "}
              <p className="text-sm mt-3">
                Private
                <br /> Discussion
              </p>
              <Button size="sm">End</Button>
            </div>
          </div>

          {/* Gamify Badge */}
          <Image
            src="https://assets.capcons.com/images/BrandDetail4.png"
            alt="Ellipse Large"
            width={400}
            height={400}
            className="lg:w-[350px] lg:h-[400px] mx-auto"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between">
          <Image
            src="https://assets.capcons.com/images/BrandDetail3.png"
            alt="Ellipse Large"
            width={400}
            height={400}
            className="w-full max-w-[450px] h-[300px] lg:h-[350px] mx-auto"
          />

          <Image
            src="https://assets.capcons.com/images/BrandDetail2.png"
            alt="Ellipse Large"
            width={400}
            height={400}
            className="w-full max-w-[450px] h-[300px] lg:h-[350px] mx-auto"
          />
        </div>
      </div>

      <div className="lg:hidden">
        {" "}
        <Slider
          className="l w-full max-w-md mx-auto" // centers + fixes width
          items={[
            <Image
              src="https://assets.capcons.com/images/BrandDetail.png"
              alt="Brand Detail"
              width={350}
              height={350}
              className="w-full"
            />,

            <Image
              src="https://assets.capcons.com/images/BrandDetail3.png"
              alt="Brand Detail"
              width={350}
              height={350}
              className="w-full"
            />,
            <Image
              src="https://assets.capcons.com/images/BrandDetail2.png"
              alt="Brand Detail"
              width={350}
              height={350}
              className="w-full"
            />,
          ]}
        />
      </div>
    </section>
  );
};

export default BrandDetail;
