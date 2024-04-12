import React from "react";

export default function Banner() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-0 mt-16 w-3/4 lg:w-2/3  m-auto bg-[#415a77] rounded-lg shadow-2xl p-4 relative bottom-20 lg:h-36">
      <div class="h-28 rounded-lg">
        <div className="w-full text-center flex justify-center items-center flex-col">
          <p className="ml-3 font-semibold tracking-wide text-white">Contact Services</p>
          <div className="flex flex-row pt-3">
            <h4 className="text-3xl text-white">
              <a href="https://api.whatsapp.com/send?phone=13213307462">
                +1 (321) 330 7462
              </a>
            </h4>
          </div>
        </div>
      </div>
      <div class="h-28 rounded-lg">
        <div className="w-full text-center flex justify-center items-center flex-col">
          <h5 className="ml-2 pb-3 font-semibold tracking-wide text-white">
            WORKING HOURS
          </h5>
          <div className="flex flex-row">
            <div className="flex flex-col text-white">
              <p>Mon - Sat 8:00am - 5:00pm</p>
              <div className="font-semibold text-zinc-800">
                <p>Sunday CLOSED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-28 rounded-lg">
        <div className="w-full text-center flex items-center justify-center flex-col">
          <h5 className="mr-2 pb-3 font-semibold tracking-wide text-white">LOCATION</h5>
          <div className="flex flex-row">
            <p className="text-white">
            2863 Berkshire Cir, <br /> Kissimmee FL 34743 US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
