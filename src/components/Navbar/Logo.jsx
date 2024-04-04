import Image from "next/image";
import React from "react";
export const Logo = () => (
  <div className="w-48 sm:w-60 md:mr-8">
    <Image src="/logo.png" alt="Success Logo" width={290} height={290} />
  </div>
);
