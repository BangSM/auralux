"use client"

import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import Image from "next/image"

export default function Slide() {
  return (
    <div className="flex justify-start w-full  px-[50px] h-full">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <Image src="/images/img_slide_01.png" alt="line" width={1820} height={0} className="h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/img_slide_02.png" alt="line" width={1820} height={0} className="h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/img_slide_03.png" alt="line" width={1820} height={0} className="h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/img_slide_04.png" alt="line" width={1820} height={0} className="h-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/img_slide_05.png" alt="line" width={1820} height={0} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
