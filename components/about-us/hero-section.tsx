"use client";
import Image from "next/image";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { Slider } from "../ui/slider";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
      {/* LEFT SECTION */}
      <div className="space-y-6 rounded-[20px] p-6 shadow-sm border border-gray-100">
        {/* Big Office Image */}
        <div className="w-full">
          <Image
            src="https://assets.capcons.com/images/AboutUs.png"
            alt="CapCons Office"
            width={800}
            height={600}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>

        {/* Heading */}
        <Heading as="h2">
          Where <span className="bg-secondary-soft">Creators</span>, <br />
          Innovators & Builders Belong.
        </Heading>
      </div>

      {/* RIGHT SECTION */}
      <div className="hidden md:flex flex-col gap-12">
        {/* CARD 1 */}
        <div className="flex gap-5 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
          <Image
            src="https://assets.capcons.com/images/About1.png"
            alt="Team Image"
            width={300}
            height={200}
            className="rounded-[20px] w-full md:w-60 md:h-50 object-cover"
          />

          <div className="space-y-2">
            <Heading as="h3">The Start of Things</Heading>
            <Text>
              CapCons began with a belief that meaningful conversations spark
              real change. We built a platform where creators, innovators, and
              brands connect, collaborate, and grow through authentic
              interactions that inspire progress.
            </Text>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex gap-5 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
          <Image
            src="https://assets.capcons.com/images/About2.png"
            alt="Workplace"
            width={300}
            height={200}
            className="rounded-[20px] w-full md:w-60 md:h-50 object-cover"
          />

          <div className="space-y-2">
            <Heading as="h3">What’s Important to us?</Heading>
            <Text>
              We value trust, inclusivity, and authenticity. By prioritizing
              privacy, collaboration, and genuine connection, we’re building a
              community where real conversations drive lasting impact.
            </Text>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Slider
          items={[
            <div className="flex flex-col gap-5 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
              <Image
                src="https://assets.capcons.com/images/About1.png"
                alt="Team Image"
                width={300}
                height={200}
                className="rounded-[20px] w-full md:w-60 md:h-50 object-cover"
              />

              <div className="space-y-2">
                <Heading as="h3">The Start of Things</Heading>
                <Text>
                  CapCons began with a belief that meaningful conversations
                  spark real change. We built a platform where creators,
                  innovators, and brands connect, collaborate, and grow through
                  authentic interactions that inspire progress.
                </Text>
              </div>
            </div>,
            <div className="flex flex-col gap-5 bg-white rounded-[20px] p-6 shadow-sm border border-gray-100">
              <Image
                src="https://assets.capcons.com/images/About2.png"
                alt="Workplace"
                width={300}
                height={200}
                className="rounded-[20px] w-full md:w-60 md:h-50 object-cover"
              />

              <div className="space-y-2">
                <Heading as="h3">What’s Important to us?</Heading>
                <Text>
                  We value trust, inclusivity, and authenticity. By prioritizing
                  privacy, collaboration, and genuine connection, we’re building
                  a community where real conversations drive lasting impact.
                </Text>
              </div>
            </div>,
          ]}
        />
      </div>
    </section>
  );
};

export default HeroSection;
