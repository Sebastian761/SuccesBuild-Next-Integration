"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { Logo } from "./Logo";
import { Calculator } from "./Calculator";

export default function NavbarApp() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Services", "About Us", "Contact", "Projects"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="p-2 bg-[#1b263b]">
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4 " justify="center">
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" className="text-white ">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {/* <Button>
            <span className="pr-1">
              <ion-icon id="calc" name="calculator-outline"></ion-icon>
            </span>
            <p className="inline-block mt-[3px] text-sm xl:text-base"></p>
          </Button> */}
          <Button
            as={Link}
            color=""
            endContent={<Calculator />}
            href="#"
            variant="ghost"
            className="hidden min-[960px]:flex mt-[3px] text-sm xl:text-base border-white text-white hover:bg-slate-50/5"
          >
            GET A FARE RATE
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="py-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden text-white font-bold"
      />
    </Navbar>
  );
}
