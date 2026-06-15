"use client";

import Image from "next/image";
import React from "react";
import logo from "@/assets/imgs/logo-lg.svg";
import logoSm from "@/assets/imgs/logo-sm.svg";

export default function GNB() {
  return (
    <header className="bg-white w-full h-[60px] ">
      <div className="w-full max-w-[1200px] h-full mx-auto flex justify-between">
        <Image
          src={logo}
          alt="logo"
          width={151}
          height={40}
          className="hidden md:block"
        />
        <Image
          src={logoSm}
          alt="logo"
          width={151}
          height={40}
          className="block md:hidden"
        />
      </div>
    </header>
  );
}
