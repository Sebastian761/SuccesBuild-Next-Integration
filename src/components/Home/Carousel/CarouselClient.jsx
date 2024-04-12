"use client";

import React, { useEffect } from "react";
import { Button } from "@nextui-org/react";
import { Input, initTWE } from "tw-elements";
import CarouselButton from "./CarouselButton";

export default function CarouselClient() {
  initTWE({ Input }, { allowReinits: true });
  initTWE({ CarouselClient });

  useEffect(() => {
    const init = async () => {
      const { Carousel } = await import("tw-elements");

      const myCarousel = new Carousel(
        document.getElementById("carouselExampleCaptions")
      );
    };
    init();
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      <div
        className="absolute bottom-8 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="0"
          data-twe-carousel-active
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="1"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="2"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="3"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 4"
        ></button>
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src="https://images.unsplash.com/photo-1611646586402-86f9a3fc582b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="block w-full h-[565px] object-cover brightness-50"
            alt="..."
          />
          <div className="absolute inset-x-[1%] sm:inset-x-[15%] md:inset-x-[22%] w-5/6 md:w-auto m-auto bottom-48 py-5 text-center text-white flex justify-center align-center flex-col">
            <h5 className="text-2xl md:text-4xl pb-6">Drywall Installation</h5>
            <p className="text-md md:text-lg">
              We specialize in providing top-quality drywall installation
              services for residential clients, ensuring impeccable and
              long-lasting results crafted with precision.
            </p>
            <CarouselButton />
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80&quot"
            className="block w-full h-[565px] object-cover brightness-50"
            alt="..."
          />
          <div className="absolute inset-x-[1%] sm:inset-x-[15%] md:inset-x-[22%] w-5/6 md:w-auto m-auto bottom-36 py-5 text-center text-white flex justify-center align-center flex-col">
            <h5 className="text-2xl md:text-4xl pb-6">Taping, Finishing and Texture</h5>
            <p className="text-md md:text-lg">
              The company offers drywall taping and finishing services to create
              a smooth surface. They also provide texture application services
              for clients who desire a specific texture on their drywall
              surfaces.
            </p>
            <CarouselButton />
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80&quot"
            className="block w-full h-[565px] object-cover brightness-50"
            alt="..."
          />
          <div className="absolute inset-x-[1%] sm:inset-x-[15%] md:inset-x-[22%] w-5/6 md:w-auto m-auto bottom-48 py-5 text-center text-white flex justify-center align-center flex-col">
            <h5 className="text-2xl md:text-4xl pb-6">Interior & Exterior Painting</h5>
            <p className="text-md md:text-lg">
              Professional hause painter, Contractor providing interior and
              exterior painting for Residential and Comercial.
            </p>
            <CarouselButton />
          </div>
        </div>

        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80&quot"
            className="block w-full h-[620px] md:h-[565px] object-cover brightness-50"
            alt="..."
          />
          <div className="absolute inset-x-[1%] sm:inset-x-[15%] md:inset-x-[22%] w-5/6 md:w-auto m-auto bottom-48 py-5 text-center text-white flex justify-center align-center flex-col">
            <h5 className="text-2xl md:text-4xl pb-6">
              Flooring Installation & Restoration Services
            </h5>
            <p className="text-base md:text-lg">
              Expert installation of laminate flooring and meticulous
              restoration of hardwood surfaces. Trust us to transform your
              floors into reflections of your unique style.
            </p>
            <CarouselButton />
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
}
