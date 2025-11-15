"use client";

import { Heading } from "../ui/heading";

const list = [
  "https://assets.capcons.com/images/Woodland1.png",
  "https://assets.capcons.com/images/Aws.png",
  "https://assets.capcons.com/images/Moengage.png",
  "https://assets.capcons.com/images/Gokwik.png",
  "https://assets.capcons.com/images/Teddyboy.png",
  "https://assets.capcons.com/images/Google.png",
  "https://assets.capcons.com/images/Razorpay.png",
  "https://assets.capcons.com/images/Mongodb.png",
];

const TrustedCompanies = () => {
  return (
    <section className="space-y-8 m-0">
      <Heading as="h3" className="text-center">The world's best companies trust Capcons.</Heading>
      <div className="w-full overflow-hidden">
        <div className="relative flex overflow-hidden">
          {/* Track */}
          <div className="animate-scroll flex gap-16 whitespace-nowrap">
            {/* Duplicate list for seamless looping */}
            {[...list, ...list].map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                className="h-8 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
