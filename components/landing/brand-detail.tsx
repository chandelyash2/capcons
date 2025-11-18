import Image from "next/image";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { ArrowUpLeft } from "lucide-react";
import Button from "../ui/button";
import { Slider } from "../ui/slider";
import { Section } from "../ui/section";

const BrandDetail = () => {
  return (
    <Section>
      <div className="flex gap-4 items-start">
        <Image
          src="https://assets.capcons.com/images/Question.png"
          alt="Ellipse Small"
          width={280}
          height={700}
          className="w-[80px] h-[90px] lg:w-[120px] lg:h-[140px]"
        />
        <div className="flex flex-col justify-between gap-2">
          <Heading as="h2" className="font-normal">
            What is <br />
            <span className="bg-secondary-soft">Capcons?</span>
          </Heading>
          <Text>A new kind of Social Platform — One you own</Text>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-16 min-h-[750px]">
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between gap-12">
          <Image
            src="https://assets.capcons.com/images/BrandDetail.png"
            alt="Brand Detail"
            width={470}
            height={350}
            className="w-full h-[340px] object-contain mt-45"
          />

          <div className="text-right text-3xl font-normal leading-snug relative pr-4">
            Monetize Through
            <br />
            Your Community.
            <br />
            Turn engagement
            <br />
            <span
              className="absolute -left-10 lg:left-4 -bottom-1 bg-secondary-soft 
      w-12 h-12 rounded-full flex items-center justify-center shadow-md"
            >
              <ArrowUpLeft color="white" size={26} />
            </span>
            into earning power.
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="flex flex-col justify-between items-center gap-16">
          {/* Private discussion card */}
          <div className="bg-white rounded-2xl p-6 shadow-xl w-[250px] space-y-4">
            <div className="flex justify-between gap-4">
              <Image
                src="https://assets.capcons.com/images/Discussion.png"
                alt="Discussion"
                width={120}
                height={170}
                className="w-[120px] h-[160px] object-cover rounded-lg"
              />
              <Image
                src="https://assets.capcons.com/images/Discuuson1.png"
                alt="Discussion"
                width={120}
                height={170}
                className="w-[120px] h-[160px] object-cover rounded-lg"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-sm leading-tight text-gray-600">
                Private
                <br />
                Discussion
              </p>
              <Button size="sm">End</Button>
            </div>
          </div>

          {/* Gamification badge */}
          <img
            src="https://assets.capcons.com/images/BrandDetail4.png"
            alt="Gamify"
            className="w-[300px] h-[430px] object-contain"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-between gap-12">
          <Image
            src="https://assets.capcons.com/images/BrandDetail3.png"
            alt="Customization"
            width={430}
            height={350}
            className="w-full h-[340px] object-contain mx-auto"
          />

          <Image
            src="https://assets.capcons.com/images/BrandDetail2.png"
            alt="Go Live"
            width={430}
            height={350}
            className="w-full h-[340px] object-contain mx-auto"
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
    </Section>
  );
};

export default BrandDetail;
