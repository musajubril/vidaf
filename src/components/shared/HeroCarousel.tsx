"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { text } from "stream/consumers"

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false })
  )
  const carouselSections = [
    {
      img: `/img/hero2.jpg`,
      text: "We have valuable integrated Energy portfolio"
    },
    {
      img: `/img/hero1.jpg`,
      text: "We provide excellent business advisory services"
    },
    {
      img: `/img/hero3.jpg`,
      text: "We are a global infreastructure company"
    },
    {
      img: `/img/hero4.jpg`,
      text: "We have complete lifecycle expertise for jet fuel, ATK handling / systems and aviation lubricants"
    },
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full !h-[80vh]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-full w-full">
        {carouselSections.map((_, index) => (
          <CarouselItem key={index}>
            <div  className="!h-[80vh] w-full" style={{
            backgroundImage: `url(${_.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // height: "80vh"
          }}>
            <div className="flex flex-col items-start justify-center w-full h-full px-4 py-24 mx-auto bg-gray-900/40 sm:py-32 sm:px-6 lg:px-8">
              <div className="mb-6 max-mobile:text-4xl font-extrabold tracking-tight text-white capitalize md:text-5xl lg:text-7xl text-center max-w-[80%] max-mobile:max-w-[100%] mx-auto">
               {_.text}
              </div>
            </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
