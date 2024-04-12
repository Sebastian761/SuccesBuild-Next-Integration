import React from "react";
import { Button } from "@nextui-org/react";

export default function Info() {
  return (
    <section className=" md:mt-0 bg-offWhite text-gray-800">
      <div className="mx-auto  px-4 sm:px-6  lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Your Comfort Is Our #1 Priority{" "}
          </h2>
          <p className="mt-4 text-gray-500">
            At our company, we take pride in offering fast and reliable
            professional painting services. Our team is made up of skilled and
            experienced painters who are dedicated to providing high-quality
            workmanship
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:gap-8 md:grid-cols-2 xl:grid-cols-4 w-full">
          <div className="group relative block bg-black shadow-xl h-4/5">
            <img
              alt="tools"
              loading="lazy"
              src="https://images.unsplash.com/photo-1606676539940-12768ce0e762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Necessary to transform
              </p>
              <p className="text-xl font-bold sm:text-3xl pt-2 text-white">
                Interior Demolition
              </p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-28 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Interior demolition becomes necessary to transform the space
                    into something better. These project should be performed
                    carefully. Our team works with their hands and the
                    appropriate machinery to ensure projects are done safely yet
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative block bg-black shadow-xl h-4/5">
            <img
              alt="roller"
              loading="lazy"
              src="https://images.unsplash.com/photo-1599619585752-c3edb42a414c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                High-quality Service
              </p>
              <p className="text-xl font-bold  sm:text-2xl text-white">
                Interior & Exterior Painting
              </p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-28  group-hover:opacity-100">
                  <p className="text-sm text-white">
                    When it comes to painting your houses and exterior, you need
                    professional results. Your home deserves a high-quality
                    service and impeccable finish. Our interior and exterior
                    house painting service provide a seamless efficient and
                    meticulous painting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative block bg-black shadow-xl h-4/5">
            <img
              alt="drywall"
              loading="lazy"
              src="https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=659&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Excellent Work
              </p>
              <p className="text-xl font-bold  sm:text-2xl text-white">
                Drywall Installation
              </p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-28 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    We offer a broad array of services to fulfill all your
                    remodeling and repair needs. No matter the project size,
                    entrust us with your drywall installation during
                    renovations. We deliver top-notch work at competitive rates
                    and consistently achieve outstanding results on schedule.
                    Our expertise lies in drywall installation, taping, and
                    finishing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative block bg-black shadow-xl h-4/5">
            <img
              alt="taping_finishing"
              loading="lazy"
              src="https://images.unsplash.com/photo-1543525324-26e03b510586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Drywall finishing
              </p>
              <p className="text-xl font-bold  sm:text-2xl text-white">
                Taping and Finishing
              </p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-28 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Drywall finishing is the process of creating a smooth
                    surface on drywall or plasterboard. This enhances the
                    appearance of the wall, makes it more durable, and improves
                    its resistance to fire and moisture. It is a popular and
                    affordable choice for homeowners and businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button
            color=""
            className="inline-block rounded bg-[#1b263b] px-12 py-3 text-sm font-medium  transition hover:bg-darkBlue text-white shadow-xl focus:outline-none focus:rin"
          >
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}
