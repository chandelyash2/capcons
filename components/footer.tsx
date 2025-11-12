import React from "react";
import Image from "next/image";
import Button from "./ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#FFF9F0] text-black border-t border-gray-200 px-10 md:px-16 py-4">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center text-center  space-y-6">
        <h2 className="text-2xl md:text-4xl font-light leading-snug max-w-3xl">
          Uniting{" "}
          <span className="text-primary-900 font-semibold">Creators</span>,{" "}
          <span className="text-primary-900 font-semibold">Communities</span>,
          and <span className="text-primary-900 font-semibold">Culture</span> to
          build what’s next.
        </h2>

        {/* Book a Demo button — mobile only */}
        <div className="md:hidden">
          <Button variant="primary" size="md">
            Book a Demo
          </Button>
        </div>
        <div className="md:hidden flex flex-wrap justify-between gap-12 w-full md:w-auto">
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>About</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>Blogs</li>
              <li>Events</li>
              <li>Features</li>
            </ul>
          </div>
        </div>
        {/* App Store buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-8">
          <Image
            src="https://assets.capcons.com/images/Play Store.png"
            alt="Get it on Google Play"
            width={180}
            height={60}
            className="h-[50px] w-auto"
            
          />
          <Image
            src="https://assets.capcons.com/images/App Store.png"
            alt="Download on the App Store"
            width={180}
            height={60}
            className="h-[50px] w-auto"
            
          />
        </div>
        <div className="flex gap-3 mb-3">
          <Link
            href=""
            className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
          >
            <Image
              src="https://assets.capcons.com/images/LinkedIn.png"
              alt="LinkedIn"
              width={15}
              height={15}
              
            />
          </Link>
          <Link
            href=""
            className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
          >
            <Image
              src="https://assets.capcons.com/images/Instagram.png"
              alt="Instagram"
              width={15}
              height={15}
              
            />
          </Link>{" "}
          <Link
            href=""
            className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
          >
            <Image
              src="https://assets.capcons.com/images/Share.png"
              alt="Share"
              width={15}
              height={15}
              
            />
          </Link>
        </div>
      </div>

      {/* Middle Section */}
      <div className="hidden px-6 lg:px-16 py-10 md:flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Logo + description */}
        <div className="flex flex-col items-center md:items-start space-y-3 md:max-w-[280px]">
          <div className="flex items-center gap-2">
            <Image
              src="https://assets.capcons.com/images/Logo.png"
              alt="CapCons logo"
              width={266}
              height={100}
              
            />
          </div>
          <p className="text-sm text-gray-700 text-center md:text-left">
            Strengthen connections, drive engagement, and grow a thriving
            community. Reach your audience, foster loyalty, and monetize — free
            from ads and algorithms.
          </p>
          {/* Social icons */}
          <div className="flex gap-3 mt-3">
            <Link
              href=""
              className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
            >
              <Image
                src="https://assets.capcons.com/images/LinkedIn.png"
                alt="LinkedIn"
                width={15}
                height={15}
                
              />
            </Link>
            <Link
              href=""
              className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
            >
              <Image
                src="https://assets.capcons.com/images/Instagram.png"
                alt="Instagram"
                width={15}
                height={15}
                
              />
            </Link>{" "}
            <Link
              href=""
              className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
            >
              <Image
                src="https://assets.capcons.com/images/Share.png"
                alt="Share"
                width={15}
                height={15}
                
              />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-between gap-12 w-full md:w-auto">
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>About</li>
              <li>Career</li>
              <li>Contact Us</li>
              <li className="md:hidden">Reviews</li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>Blogs</li>
              <li>Events</li>
              <li>Features</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 px-6 md:px-16 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-2 md:space-y-0">
        <div className="flex justify-center w-full md:w-auto">
          <p className="md:hidden">@Copyright 2025, Capcons</p>
        </div>
        <p className="hidden md:block">
          © Copyright 2025, All Rights Reserved by Capcons
        </p>
        <p className="hidden md:block">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
