import React from "react";
import { Ripple, initTWE } from "tw-elements";



export default function CarouselButton() {
    initTWE({ Ripple });
  return (
    <button
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className="inline-block rounded px-6 pb-2 pt-2.5 font-medium leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0  motion-reduce:transition-none  mt-4 mx-auto text-base hover:bg-slate-200/15 underline underline-offset text-white w-auto"
    >
      Transform your home with precision and lasting quality
    </button>
  );
}
