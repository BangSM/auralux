"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

export default function ScaleWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const baseWidth = 1440

    const adjustScale = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const screenWidth = window.innerWidth
      const scale = screenWidth < baseWidth ? screenWidth / baseWidth : 1

      wrapper.style.transform = `scale(${scale})`
      wrapper.style.transformOrigin = "top left"
      wrapper.style.width = `${baseWidth}px`

      const contentHeight = wrapper.clientHeight
      if (pathname === "/contact") {
        wrapper.style.height = `${contentHeight}px`
      } else {
        wrapper.style.height = `${contentHeight * scale}px`
      }
    }

    window.addEventListener("resize", adjustScale)
    adjustScale() // ✅ children 바뀔 때 실행

    return () => {
      // window.removeEventListener("resize", adjustScale)
    }
  }, [children, pathname]) // ✅ 페이지 전환 시 리렌더링 트리거

  return (
    <div ref={wrapperRef} style={{ margin: "0 auto" }}>
      {children}
    </div>
  )
}
