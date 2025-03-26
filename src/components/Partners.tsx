import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"

export default function Partners() {
    const images =  [
        "/img/clients/Picture1.png",
        "/img/clients/Picture2.png",
        "/img/clients/Picture3.png",
        "/img/clients/Picture4.png",
        "/img/clients/Picture5.png",
        "/img/clients/Picture6.png",
        "/img/clients/Picture7.png",
    ]
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
      )
  return (
    <div className='px-[120px] max-mobile:px-6 py-24'>
        <div className="uppercase text-center font-extrabold tracking-wider text-gray-600 mb-5">
        Trusted by businesses across the continent
        </div>
         <Carousel
              opts={{
                align: "start",
              }}
              plugins={[plugin.current]}
              className="w-full max-mobile:px-6 "
            >
              <CarouselContent>
                {images.map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                      <img src={_} alt="" className='rounded-[20px]' />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        {/* <div className="grid grid-cols-4 max-mobile:grid-cols-2 gap-2">
            {
                images.map((img, index) => (
                    <div key={index} className="relative h-[160px] w-[160px] rounded-md overflow-hidden">
                        <img src={img} alt="Client logo" className="w-full h-full object-center" />
                    </div>
                ))
            }
        </div> */}
    </div>
  )
}
