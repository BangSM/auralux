"use client"

import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

export default function ScaleWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  useEffect(() => {
    const baseWidth = 1440

    const adjustScale = () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const screenWidth = window.innerWidth
      const scale = screenWidth < baseWidth ? screenWidth / baseWidth : 1

      // transform으로 가로 축소
      wrapper.style.transform = `scale(${scale})`
      wrapper.style.transformOrigin = "top left"

      // wrapper 폭은 고정
      wrapper.style.width = `${baseWidth}px`

      // 세로 높이를 스케일 보정
      const contentHeight = wrapper.scrollHeight
      wrapper.style.height = `${contentHeight * scale}px`
    }

    window.addEventListener("resize", adjustScale)
    adjustScale()

    return () => window.removeEventListener("resize", adjustScale)
  }, [router])

  return (
    <div
      ref={wrapperRef}
      style={{
        margin: "0 auto", // 중앙 정렬
      }}
    >
      {children}
    </div>
  )
}
