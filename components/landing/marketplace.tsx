"use client";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import Image from "next/image";
import {
  CircleCheck,
  MessageCircle,
  ShoppingCart,
} from "lucide-react";

const features = [
  {
    icon: <ShoppingCart color="#39089d" />,
    title: "Full Hosted E - Commerce",
    desc: "Sell products directly to your community with zero hassle.",
  },
  {
    img: "https://assets.capcons.com/images/Gokwik.png",
    title: "Integrated with GoKwik",
    desc: "Smooth, fast transactions for a seamless shopping experience.",
  },
  {
    icon: <CircleCheck color="#39089d" />,
    title: "Proven Success",
    desc: "Capcons creators have achieved ₹100 Cr in sales, proving the power of social commerce.",
  },
  {
    icon: <MessageCircle color="#39089d" />,
    title: "Whatsapp via Quickengage",
    desc: "Reach your audience instantly with automated messages and campaigns.",
  },
];

const MarketPlace = () => {
  return (
  
      <section className="rounded-[20px] lg:p-6 lg:bg-[#FEFCF9]">
        {/* ==================== MOBILE VIEW ==================== */}
        <div className="lg:hidden space-y-8">
          <Heading as="h1" className="leading-snug">
            Turn your Community
            <br />
            into a <span className="bg-secondary-soft">Marketplace.</span>
          </Heading>

          <Text className="text-gray-600">
            Social Commerce and Seamless Engagement
          </Text>

          {/* Beige Cards */}
          <div className="space-y-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-[#FFF8EC] p-5 rounded-[20px] flex items-start gap-4"
              >
                <div className="w-12 h-12 relative shrink-0 bg-white p-2 rounded-full border border-[#E9EBF1] flex items-center justify-center">
                  {item.img ? (
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      objectFit="contain"
                    />
                  ) : (
                    item.icon
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== DESKTOP VIEW ==================== */}
        <div className="hidden lg:block space-y-10 relative">
          <Heading as="h1">
            Turn your <span className="bg-secondary-soft">Community</span>
            into a <br />
            Marketplace and Connect like <br /> never before.
          </Heading>

          <Text className="text-gray-600">
            Social Commerce and Seamless Engagement
          </Text>

          <div className="grid grid-cols-2 gap-6 w-[60%]">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 relative shrink-0 bg-white p-2 rounded-full border border-[#E9EBF1] flex items-center justify-center">
                  {item.img ? (
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      objectFit="contain"
                    />
                  ) : (
                    item.icon
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Image
            src="https://assets.capcons.com/images/WoodlandScreen.png"
            alt="Phone Mockup"
            width={500}
            height={500}
            className="object-contain absolute right-10 top-0"
          />
        </div>
      </section>

  );
};

export default MarketPlace;
