"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa6'
import TeamData from '../../team_data'
import Autoplay from "embla-carousel-autoplay"

export default function Team() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  )
  return (
    <div className='py-24 px-[180px] max-mobile:px-6   w-full'>
         <Carousel
      opts={{
        align: "start",
      }}
      plugins={[plugin.current]}
      className="w-full px-[120px] max-mobile:px-6 "
    >
      <CarouselContent>
        {TeamData.map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <div className="p-1 flex flex-col">
                <div className="pb-5">
              <img src="https://placehold.co/386x385" alt="" className='rounded-[20px]' />
                </div>
                <div className="font-semibold text-h4">{_.name}</div>
                <div className="font-normal text-sm pb-4 lowercase">{_.name}@vidafdev.com</div>
                <hr className=''/>
                <div className="pt-5 flex items-center gap-3">
                        <FaLinkedinIn className='h-6 w-6'/>
                        <FaInstagram className='h-6 w-6'/>
                        <FaFacebookF className='h-6 w-6'/>
                        <FaTwitter className='h-6 w-6'/>
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
