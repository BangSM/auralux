"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const Header = () => {
  const optionRef = useRef<HTMLDivElement>(null)
  const [isProduct, setIsProduct] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // 드롭다운이 열려 있고, 클릭한 곳이 드롭다운 내부가 아닐 때
      if (isProduct && optionRef.current && !optionRef.current.contains(e.target as Node)) {
        setIsProduct(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isProduct])

  return (
    <nav className="flex sticky top-0 h-[140px] w-full justify-center bg-white px-[50px]  pt-[50px] z-9999 min-w-[1024px]">
      <div className="flex w-full justify-between items-start ">
        <button className="flex items-center gap-[10px] cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/images/img_logo.png" alt="logo" width={134} height={36} className="h-auto" />
        </button>
        <div className="flex items-center gap-[57px] h-[45px]">
          <Link href="/about" className="text-[20px] cursor-pointer link-hover avenir-bold">
            ABOUT
          </Link>
          <div className="relative">
            <button
              className="avenir-bold text-[20px] cursor-pointer link-hover"
              onClick={() => setIsProduct(!isProduct)}
            >
              PRODUCT
            </button>
            {isProduct && (
              <div
                ref={optionRef}
                className="flex flex-col justify-center items-center absolute top-[82px] w-[195px] h-[190px] bg-white border border-[#707070]"
              >
                <Link href="/product/honeycomb" className="text-[#7d7d7d] text-[19px] hover:text-[#3b3b3b]">
                  허니콤 블라인드
                </Link>
                <Link href="/product/combi" className="text-[#7d7d7d] text-[19px] hover:text-[#3b3b3b]">
                  콤비 블라인드
                </Link>
                <Link href="/product/wood" className="text-[#7d7d7d] text-[19px] hover:text-[#3b3b3b]">
                  우드 블라인드
                </Link>
                <Link href="/product/screen" className="text-[#7d7d7d] text-[19px] hover:text-[#3b3b3b]">
                  롤스크린/썬스크린
                </Link>
                <Link href="/product/curtains" className="text-[#7d7d7d] text-[19px] hover:text-[#3b3b3b]">
                  스마트 커튼
                </Link>
              </div>
            )}
          </div>

          <Link href={"/contact"} className="avenir-bold text-[20px]  cursor-pointer link-hover">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
