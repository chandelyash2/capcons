"use client";
import Image from "next/image";
import ScrollSlider from "../ui/scroll-slider";
import { Section } from "../ui/section";

const teamMembers = [
  {
    img: "https://assets.capcons.com/images/Team.png",
    name: "Vipin Bharti",
    role: "Backend Developer",
  },
  {
    img: "https://assets.capcons.com/images/Team1.png",
    name: "Natali Craig",
    role: "Product Designer",
  },
  {
    img: "https://assets.capcons.com/images/Team2.png",
    name: "Drew Cano",
    role: "UX Researcher",
  },
  {
    img: "https://assets.capcons.com/images/Team.png",
    name: "Orlando Diaz",
    role: "Customer Success",
  },
  {
    img: "https://assets.capcons.com/images/Team1.png",
    name: "Natali Craig",
    role: "Product Designer",
  },
  {
    img: "https://assets.capcons.com/images/Team2.png",
    name: "Drew Cano",
    role: "UX Researcher",
  },
  {
    img: "https://assets.capcons.com/images/Team.png",
    name: "Orlando Diaz",
    role: "Customer Success",
  },
];

export default function TeamMember() {
  return (
    <Section>
      <ScrollSlider
        items={teamMembers}
        speed={0.8}
        direction="left"
        className="pt-6"
        renderItem={(item) => (
          <div className="flex flex-col items-center">
            <Image src={item.img} width={100} height={100} alt={item.name} />

            <p className="mt-2 font-semibold">{item.name}</p>
            <p className="text-purple-600 text-sm">{item.role}</p>
          </div>
        )}
      />
      <ScrollSlider
        items={teamMembers}
        speed={0.8}
        direction="right"
        className="pt-6"
        renderItem={(item) => (
          <div className="flex flex-col items-center">
            <Image src={item.img} width={120} height={120} alt={item.name} />

            <p className="mt-2 font-semibold">{item.name}</p>
            <p className="text-purple-600 text-sm">{item.role}</p>
          </div>
        )}
      />
    </Section>
  );
}
