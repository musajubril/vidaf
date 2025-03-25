"use client"
import React from 'react'
import { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { DialogTrigger } from '../ui/dialog'
import { Copy } from 'lucide-react'
// import { Input } from 'postcss'
import { FaBars } from "react-icons/fa6";
import { Button } from '../ui/button'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { WhatWeDo } from '../../../wwd'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services and Products", href: "/" },
];
const subMenu = [
  { name: "Integrated Energy", href: `/services/` },
  { name: "Infrastructure", href: `/services/` },
  { name: "Investment / Business Advisory", href: `/services/` },
];
  const logo = "/logo.png"
  return (
    <div className='py-4 px-[120px] max-mobile:px-6 flex justify-between'>
        <div className="">
        <div className='text-start flex gap-2 items-center'>
          <img src={logo} className='h-16' alt="" />
            </div>
        </div>
        <div className="max-mobile:hidden flex gap-12 items-center">
    <div className="flex gap-6">
    {navigation.map((item) => (
            <div key={item.name}>
              {item.name !== "Services and Products" ? (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-900 hover:text-primary hover:border-b hover:border-primary transition-all duration-300 hover:font-semibold"
                >
                  {item.name}
                </Link>
              ) : (
                <div className="relative">
                  <ServicesAndProducts subMenu={subMenu} item={item} />
                </div>
              )}
            </div>
          ))}
    
    </div>
    <div className="">
        <Button>Contact Us</Button>
    </div>
        </div>
        <div className="hidden max-mobile:flex">
        <MobileMenu navigation={navigation} logo={logo} />
        </div>
    </div>
  )
}

const MobileMenu = ({ navigation, logo, subMenu }: any) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaBars />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-dvw p-3">
        {navigation.map(
          (
            nav: {
              href: string;
              name:
                | string
                | number
                | bigint
                | boolean
                | React.ReactElement<
                    unknown,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactPortal
                    | React.ReactElement<
                        unknown,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined;
            },
            i: React.Key | null | undefined
          ) => (
            <DropdownMenuItem key={i}>
              <div className="p-2">
                {nav.name !== "Services and Products" ? (
                  <Link href={nav.href} key={i}>
                    {nav.name}
                  </Link>
                ) : (
                  <div className='flex flex-col gap-2'>
                  {WhatWeDo.map((menu, i: React.Key | null | undefined) => (
                   <Link href={`/services/${menu.slug}`} key={i} className="text-sm font-medium text-gray-900 hover:text-primary hover:border-b hover:border-primary transition-all duration-300 hover:font-semibold">
                    {menu.title}
                  </Link>
                    ))}
                  </div>
                  // <div
                  //   className="relative"
                  //   onClick={(e) => e.stopPropagation()}
                  // >
                  //   <ServicesAndProducts subMenu={subMenu} item={nav} />
                  // </div>
                )}
              </div>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ServicesAndProducts = ({
  subMenu,
  item,
}: {
  subMenu: any;
  item: any;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="text-sm font-medium text-gray-900 hover:text-primary hover:border-b hover:border-primary transition-all duration-300 hover:font-semibold">
          {item.name}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        {WhatWeDo.map((menu, i: React.Key | null | undefined) => (
          <DropdownMenuItem key={i}>
            <Link
              href={`/services/${menu.slug}`}
              className="text-sm font-medium text-gray-900 hover:text-primary hover:border-b hover:border-primary transition-all duration-300 hover:font-semibold"
            >
              {menu.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};