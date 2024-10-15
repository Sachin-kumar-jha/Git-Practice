"use client"
import logo from "../public/logo.jpg"
import React from "react";

import {Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";


export default function Nave() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const menuItems = [
    "About Us",
    "Benefits",
    "Our Story"
  ];

  return (
 <div className="nav flex justify-center items-center md:mt-5 sm:mt-5 lg:mt-5"> 
<div className=" fixed w-full  z-20 md:w-3/5  sm:w-1/2">
<Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#f5c000] bg-opacity-75  md:rounded-[12rem] sm:rounded-[12rem]">
<NavbarContent> 
  <NavbarItem>
   <Image className="w-10 h-10  object-cover hover:object-contain  rounded-full shadow-md " src={logo} width={500}
      height={500} alt="Brand icon"/>
  </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-black sm:hidden"
        />
      </NavbarContent> 
      <NavbarContent className="hidden sm:flex gap-4 " justify="between">
        <NavbarItem className="text-black font-semibold">
          <Link color="foreground" href="#">
           About me
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
           Benefits
          </Link>
        </NavbarItem>
        <NavbarItem className="text-black font-semibold">
          <Link color="foreground" href="#">
            Our Story
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="text-black font-semibold">
        <Link color="black" href="#">
        Home
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="sm:w-1/4 px-10 h-[40px] ">
        {menuItems.map((item, index) =>(
          <NavbarMenuItem  key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full rounded-md font-light border border-1 border-black-900"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </div>
    </div>
  );
}
