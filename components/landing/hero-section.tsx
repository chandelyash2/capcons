import React from "react";
import { Heading } from "../ui/heading";
import SearchInput from "../ui/search";

const dotStyle: React.CSSProperties = {
  width: "22px",
  height: "22px",
  borderRadius: "50%",
  background: "radial-gradient(50% 50% at 50% 50%, #39089D1A 0%, #D6D2FC 100%)",
  filter: "blur(6px)",
};

const HeroSection = () => {
  return (
    <section
      className="
    absolute lg:max-h-[900px]
    flex items-center justify-center
    bg-cover
    bg-center
    md:bg-contain
    top-20 md:top-0
    overflow-hidden
    w-full
    max-w-screen       /* ⭐ prevents section from expanding beyond viewport */
    overflow-x-hidden  /* ⭐ hides any orbit/ellipse overflow */
  "
      style={{
        backgroundImage: `url("https://assets.capcons.com/images/MainBg.png")`,
      }}
    >
      <div
        className="
          relative flex items-center justify-center

          /* mobile (must be set!) */
            w-[450px] h-[450px] 

          /* tablet */
          md:w-[650px] md:h-[650px]

          /* desktop */
          lg:w-[820px] lg:h-[820px]

          overflow-hidden 
         
        "
      >
        <div className="text-center space-y-2">
          <Heading as="h2">
            Built for the <span className="text-primary-900">creators</span>{" "}
            <br />
            of <span className="text-primary-900">tomorrow</span>.
          </Heading>
          <SearchInput />
        </div>

        {/* OUTER ELLIPSE */}
        <div className="absolute rounded-full border border-[#C9C1F7]/40 w-[95%] h-[95%]"></div>

        {/* INNER ELLIPSE */}
        <div className="absolute rounded-full border border-[#C9C1F7]/30 w-[75%] h-[75%]"></div>

        {/* OUTER DOT */}
        <div className="absolute lg:animate-[orbitOuter-desktop_14s_linear_infinite] md:animate-[orbitOuter-tablet_18s_linear_infinite] animate-[orbitOuter-mobile_22s_linear_infinite]">
          <div style={dotStyle}></div>
        </div>

        {/* INNER DOT */}
        <div className="absolute lg:animate-[orbitInner-desktop_10s_linear_infinite_reverse] md:animate-[orbitInner-tablet_14s_linear_infinite_reverse] animate-[orbitInner-mobile_18s_linear_infinite_reverse]">
          <div style={dotStyle}></div>
        </div>

        {/* AVATARS */}
        <img
          src="https://assets.capcons.com/images/MainAvatar.png"
          className="absolute w-20 h-20  rounded-full left-[3%]  md:left-[8%] top-[75%]"
          style={{
            filter: "drop-shadow(0 1.75px 25.204px rgba(255, 255, 255, 0.25))",
          }}
        />

        <img
          src="https://assets.capcons.com/images/MainAvatar1.png"
          className="absolute w-20 h-20 rounded-full left-[11%] md:left-[24%] top-[15%]"
          style={{
            filter: "drop-shadow(0 1.75px 25.204px rgba(255, 255, 255, 0.25))",
          }}
        />

        <img
          src="https://assets.capcons.com/images/MainAvatar2.png"
          className="absolute w-20 h-20 rounded-full right-[3%] md:right-[8%] top-[75%]"
          style={{
            filter: "drop-shadow(0 1.75px 25.204px rgba(255, 255, 255, 0.25))",
          }}
        />

        <div
          className="
    hidden lg:flex absolute left-[0%] top-[30%]
    bg-white px-5 py-3 items-center gap-4 
    rounded-[20px] text-lg text-[#595959] leading-6
  "
        >
          <span className="bg-[#23BDEE] px-3 py-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="25"
              viewBox="0 0 18 25"
              fill="none"
            >
              <path
                d="M14.9392 18.305H14.8241L15.6704 17.0455C15.7667 16.9022 15.818 16.7339 15.818 16.5617V8.71668C15.818 0.100242 8.85817 0 8.78787 0C8.5548 0 8.33128 0.0918361 8.16648 0.255306C8.00168 0.418775 7.9091 0.640487 7.9091 0.871668V2.615H7.03033C6.84718 2.61523 6.66867 2.67222 6.51977 2.77801L0.368397 7.13635C0.21538 7.24463 0.101398 7.39873 0.0431928 7.57602C-0.0150129 7.7533 -0.0143756 7.94443 0.045011 8.12133L0.923778 10.7363C0.988972 10.9299 1.12054 11.0946 1.29557 11.2018C1.4706 11.309 1.678 11.3518 1.88163 11.323L6.16123 10.7163L2.76919 16.0997C2.67965 16.2421 2.63343 16.407 2.63608 16.5748C2.63873 16.7425 2.69014 16.906 2.78413 17.0455L3.63126 18.305H3.51526C2.81629 18.3057 2.14614 18.5814 1.65189 19.0717C1.15764 19.562 0.879659 20.2267 0.878961 20.92V24.4067H17.5755V20.92C17.5748 20.2267 17.2969 19.562 16.8026 19.0717C16.3084 18.5814 15.6382 18.3057 14.9392 18.305ZM8.65429 10.0503C8.7431 9.90944 8.78946 9.7463 8.78791 9.58014C8.78636 9.41399 8.73696 9.25173 8.64553 9.1125C8.55411 8.97326 8.42447 8.86284 8.27188 8.79426C8.1193 8.72568 7.95013 8.70179 7.78431 8.7254L2.3588 9.49421L1.91766 8.17973L7.31154 4.35834H8.78699C9.0199 4.35834 9.24328 4.26662 9.40806 4.10334C9.57283 3.94006 9.66552 3.71857 9.66575 3.48754L9.66663 1.85578C10.9857 2.14779 13.3724 3.19902 13.9374 6.97334H11.4242V8.71668H14.0605V10.46H11.4242V12.2034H14.0605V13.9467H11.4242V15.69H14.0605V16.2976L12.7116 18.305H5.74294L4.561 16.546L8.65429 10.0503ZM15.818 22.6634H2.6365V20.92C2.6365 20.6888 2.72908 20.4671 2.89388 20.3037C3.05868 20.1402 3.2822 20.0484 3.51526 20.0484H14.9392C15.1723 20.0484 15.3958 20.1402 15.5606 20.3037C15.7254 20.4671 15.818 20.6888 15.818 20.92V22.6634Z"
                fill="white"
              />
            </svg>
          </span>
          Gamify your <br />
          journey 🎖️
        </div>
        <div
          className="
    hidden lg:flex absolute right-[0%] top-[25%]
    bg-white px-5 py-3 items-center gap-3 
    rounded-[20px] text-lg text-[#595959]
  "
        >
          <span className="bg-[#F88C3D] px-2 py-1 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M9.94837 15.1611L15.4967 11.4407L9.94837 7.72034V15.1611ZM8.95351 20.8014V18.7212H4.59206C4.13377 18.7212 3.75141 18.5611 3.44499 18.2407C3.13858 17.9204 2.98504 17.5203 2.98438 17.0405V5.84092C2.98438 5.36179 3.13791 4.96206 3.44499 4.64171C3.75207 4.32137 4.1341 4.16085 4.59107 4.16016H19.2851C19.7427 4.16016 20.1248 4.32067 20.4312 4.64171C20.7376 4.96275 20.8911 5.36249 20.8918 5.84092V17.0415C20.8918 17.5199 20.7383 17.9197 20.4312 18.2407C20.1241 18.5618 19.7421 18.7219 19.2851 18.7212H14.9227V20.8014H8.95351ZM4.59206 17.6812H19.2851C19.4376 17.6812 19.5779 17.6146 19.7059 17.4815C19.8339 17.3483 19.8976 17.2013 19.8969 17.0405V5.84092C19.8969 5.68075 19.8333 5.53375 19.7059 5.39993C19.5786 5.2661 19.4383 5.19954 19.2851 5.20023H4.59107C4.43852 5.20023 4.29825 5.2668 4.17024 5.39993C4.04224 5.53306 3.97857 5.68006 3.97923 5.84092V17.0415C3.97923 17.201 4.0429 17.3476 4.17024 17.4815C4.29759 17.6153 4.43786 17.6819 4.59107 17.6812"
                fill="white"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-0">
            <h3 className="font-bold text-[#545567]">Go Live</h3>
            <span className="text-sm text-[#545567]">Connect in real-time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
