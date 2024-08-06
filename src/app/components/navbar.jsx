"use client"

import React from "react";

import {Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";


export default function Nave() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const menuItems = [
    "About Us",
    "Benefits",
    "Our Story"
  ];

  return (
 <div className="nav flex justify-center items-center mt-5"> 
<div className=" fixed z-20  md:w-3/5 sm:w-1/2">
<Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#f5c000] bg-opacity-75 rounded-[12rem]">

<NavbarContent> 
  <NavbarItem>
   <img className="w-10 h-10 cover rounded-full shadow-md " src="https://images.unsplash.com/photo-1476209446441-5ad72f223207?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Brand icon"/>
  </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-black sm:hidden "
        />
      </NavbarContent> 
      <NavbarContent className="hidden sm:flex gap-4 " justify="between">
        <NavbarItem className="text-black font-semibold">
          <Link color="foreground" href="#">
           About Us
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
      <NavbarMenu className="  sm:w-1/4 px-10 ">
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
