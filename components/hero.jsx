import React, { useRef } from "react";
import "../app/globals.css";
import Image from "next/image";
import aiImage from "../public/Richardkortey.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".richard", {
        y: "100vh",
        duration: 2,
      });
      tl.from(".firstText", {
        y: "100vh",
        duration: 1.3,
      });
      tl.from(".secontText", {
        opacity: 0,
        duration: 1,
      });

      tl.from(".thirdText", {
        opacity: 0,
        duration: 0.5,
      });
      tl.from(".lastText", {
        x: "-100vw",
        duration: 1,
      });
    },
    { scope: heroRef }
  );

  return (
    <div
      ref={heroRef}
      className=" w-full flex flex-col items-center mt-10 pb-50 "
    >
      <h2 className="text-5xl font-bold mb-5 ga firstText">HI THERE</h2>
      <h2 className="text-3xl secontText">my name is RICHARD and I am a </h2>
      <h1 className="text-[80px] md:text-[100px] lg:text-[100px] text-slate-200 md:text-black text-center font-bold mb-0 z-20 relative thirdText">
        Full Stack
      </h1>

      <Image
        src={aiImage}
        alt="Richard Kortey"
        width="auto"
        height="auto"
        className="richard w-[350px] h-[350px] top-[200px] lg:w-[430px] lg:h-[430px] 2xl:h-[550px] 2xl:w-[550px]  absolute z-0  "
      />

      <h1 className="lastText text-[80px] md:text-[150px] lg:text-[250px] font-bold  md:mt-[-120px]  text-outline  ">
        Developer
      </h1>
    </div>
  );
}

export default Hero;
