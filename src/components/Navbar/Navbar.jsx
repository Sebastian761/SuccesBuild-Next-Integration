"use client"

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { Logo } from "./Logo";

export default function NavbarApp() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Services",
    "About Us",
    "Contact",
    "Projects",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="p-2 bg-[#1b263b]">
      <NavbarContent>
 
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4 " justify="center">
        <NavbarItem>
          <Link color="foreground" className="text-white lg:text-lg" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" className="text-white lg:text-lg">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white lg:text-lg">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white lg:text-lg" href="#">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white lg:text-lg" href="#">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" className="hidden min-[960px]:flex">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="py-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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
