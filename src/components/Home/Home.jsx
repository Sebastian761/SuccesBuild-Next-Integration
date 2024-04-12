import React from "react";
import Info from "./Info/Info";
import Banner from "@/components/Home/Banner/Banner";
import Carousel from "@/components/Home/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <Banner />
      <Info />
    </>
  );
}
