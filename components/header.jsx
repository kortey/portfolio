import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../public/logo.png";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".logo", {
        y: "100vh",
        width: "300px",
        duration: 2,
      });
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="flex items-center justify-center px-4 py-5"
    >
      <Link href="/">
        {/* Wrap the Image in a div and apply the ref to the div */}

        <Image
          alt="logo"
          src={logo}
          width={100}
          height={100}
          className="logo"
        />
      </Link>
    </header>
  );
}
