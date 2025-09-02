"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Warranty from "@/components/Warranty"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Wood() {
  const router = useRouter()
  const [nextBtn, setNextBtn] = useState(false)
  const [prevBtn, setPrevBtn] = useState(false)
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col text-center items-center w-full px-[50px] mx-auto">
        <div className="flex flex-col items-center pt-[85px] mb-[75px] border-t border-[#707070] w-full">
          <span className="text-[30px] avenir-roman ">AURALUX PREMIUM BLIND</span>
          <h2 className="text-[60px] avenir-light">WOOD BLIND</h2>
        </div>
        <div className="relative w-full">
          <Image src="/images/img_slide_02.png" alt="line" width={1820} height={0} className="h-auto" />
          <button
            className="absolute top-[50%] left-[20px] translate-y-[-50%] cursor-pointer"
            onMouseOver={() => setPrevBtn(true)}
            onMouseLeave={() => setPrevBtn(false)}
            onClick={() => router.push("/product/combi")}
          >
            {!prevBtn ? (
              <Image src="/images/btn_prev.png" alt="prev" width={36} height={70} />
            ) : (
              <Image src="/images/btn_prev_black.png" alt="prev" width={36} height={70} />
            )}
          </button>
          <button
            className="absolute top-[50%] right-[20px] translate-y-[-50%] cursor-pointer"
            onMouseOver={() => setNextBtn(true)}
            onMouseLeave={() => setNextBtn(false)}
            onClick={() => router.push("/product/screen")}
          >
            {!nextBtn ? (
              <Image src="/images/btn_next.png" alt="next" width={36} height={70} />
            ) : (
              <Image src="/images/btn_next_black.png" alt="next" width={36} height={70} />
            )}
          </button>
          <div className="flex gap-[8px] items-center absolute bottom-[20px] left-[50%] translate-x-[-50%] text-[16px] font-light">
            <span className="flex w-[18px] h-[18px] bg-transparent rounded-full border-[2px] border-[#fff]"></span>
            <span className="flex w-[18px] h-[18px] bg-transparent rounded-full border-[2px] border-[#fff]"></span>
            <span className="flex w-[18px] h-[18px] bg-[#fff] rounded-full"></span>
            <span className="flex w-[18px] h-[18px] bg-transparent rounded-full border-[2px] border-[#fff]"></span>
            <span className="flex w-[18px] h-[18px] bg-transparent rounded-full border-[2px] border-[#fff]"></span>
          </div>
        </div>
        <section className="flex flex-col mt-[110px] mb-[62px] ">
          <div className="flex flex-col items-center w-full gap-[50px]">
            <h3 className="text-[32px] font-bold">우드 블라인드</h3>
            <div className="flex flex-col items-center gap-[15px]">
              <span className="text-[24px] font-normal">천연 목재의 고급스러움을 살린 블라인드</span>
              <p className="text-[24px] font-light whitespace-pre-wrap text-center">
                {`천연목재 우드 블라인드는 고급 원목을 정교하게 가공해 만든 블라인드로,\n나무의 온기와 질감을 그대로 느낄 수 있습니다.\n내구성이 뛰어나 오랜 시간 변형 없이 사용 가능하며, 공간에 따뜻함과 고급스러움을 더합니다. `}
              </p>
            </div>
          </div>
        </section>
        <div className="h-[214px] w-[1px] bg-[#a7a7a7] mb-[62px]"></div>
        <section className="flex flex-col items-center border-b border-[#707070] mb-[200px] ">
          <div className="flex gap-5 mb-[85px]">
            <Image src="/images/img_wood_01.png" alt="home_1" width={642} height={547} />
            <Image src="/images/img_wood_02.png" alt="home_2" width={1158} height={547} />
          </div>
          <span className="flex justify-center text-[184px] avenir-light text-[#e0e0e0]">WOOD BLIND</span>
        </section>
        <section className="flex flex-col items-center mb-[170px]">
          <div className="flex flex-col items-center gap-[20px] mb-[128px]">
            <strong className="text-[60px] avenir-light">PRODUCT FEATURES</strong>
            <span className="text-[32px] font-bold">오라럭스의 특별함</span>
          </div>
          <div>
            <ul className="flex gap-[16px] mb-[230px] ">
              <li className="flex flex-col gap-[94px] pb-[58px]  border-b border-[#707070]">
                <Image src="/images/img_smart_01.png" alt="local" width={537} height={443} />
                <div className="flex flex-col">
                  <span className="text-[31px] font-light text-[#919191]">01</span>
                  <strong className="text-[26px] font-bold">국내 생산</strong>
                </div>
                <p className="text-[24px] font-light whitespace-pre-wrap">
                  {`Auralux의 전 제품은 100% 국내 생산으로, 
엄격한 품질 관리 아래 제작됩니다.
높은 완성도와 안정적인 공급으로 프리미엄의
기준을 지켜갑니다.`}
                </p>
              </li>
              <li className="flex flex-col gap-[94px] pb-[58px]  border-b border-[#707070]">
                <Image src="/images/img_smart_02.png" alt="premium" width={537} height={443} />
                <div className="flex flex-col">
                  <span className="text-[31px] font-light text-[#919191]">02</span>
                  <strong className="text-[26px] font-bold">프리미엄 소재</strong>
                </div>
                <p className="text-[24px] font-light whitespace-pre-wrap">
                  {`천연 목재로 만든 고급 우드 블라인드,  FSC등 친환경 
인증 목재, 항균, ATB UV차단 원단을 사용하여
품격있고 자연 친화적인 제품을 제공합니다.
`}
                </p>
              </li>
              <li className="flex flex-col gap-[94px] pb-[58px]  border-b border-[#707070]">
                <Image src="/images/img_smart_03.png" alt="motor" width={537} height={443} />
                <div className="flex flex-col">
                  <span className="text-[31px] font-light text-[#919191]">03</span>
                  <strong className="text-[26px] font-bold">초저소음 모터</strong>
                </div>
                <p className="text-[24px] font-light whitespace-pre-wrap">
                  {`세계적인 명품 블라인드 전동 브랜드 “Somfy” 제품을 
탑재하여 도서관 보다 조용한 27db 수준의
정숙함을 느끼실 수 있습니다.`}
                </p>
              </li>
            </ul>
            <ul className="flex gap-[16px] ">
              <li className="flex flex-col gap-[94px] pb-[58px]  border-b border-[#707070]">
                <Image src="/images/img_smart_04.png" alt="custom" width={813} height={443} />
                <div className="flex flex-col">
                  <span className="text-[31px] font-light text-[#919191]">04</span>
                  <strong className="text-[26px] font-bold">맞춤 제작</strong>
                </div>
                <p className="text-[24px] font-light whitespace-pre-wrap">
                  {`고객의 니즈에 맞게 1mm 단위까지 제작되며, 
색상, 패턴 등 디자인 커스터마이징도 가능합니다.`}
                </p>
              </li>
              <li className="flex flex-col gap-[94px] pb-[58px]  border-b border-[#707070]">
                <Image src="/images/img_smart_05.png" alt="specialty" width={813} height={443} />
                <div className="flex flex-col">
                  <span className="text-[31px] font-light text-[#919191]">05</span>
                  <strong className="text-[26px] font-bold">전문 실측 및 시공</strong>
                </div>
                <p className="text-[24px] font-light whitespace-pre-wrap">
                  {`전문가 실측 후, 맞춤 제작과 숙련된 시공기술로 빈틈없는 설치를 약속합니다.`}
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col items-center gap-[40px] mb-[148px]">
          <strong className="text-[60px] avenir-light">SMART LIFE SYSTEM</strong>
          <span className="text-[32px] font-bold">스마트 시스템</span>
          <video autoPlay muted loop playsInline webkit-playsinline="true">
            <source src="/video1.mp4" type="video/mp4" />
          </video>
          <div>
            <ul className="flex gap-[16px] mb-[230px] ">
              <li className="flex flex-col gap-[94px] pb-[58px]  border-b border-[#707070]">
                <Image src="/images/img_system_1.png" alt="iot" width={537} height={443} />
                <div className="flex flex-col">
                  <span className="text-[31px] font-light text-[#919191]">01</span>
                  <strong className="text-[26px] font-bold">IOT 홈 연동</strong>
                </div>
                <p className="text-[24px] font-light whitespace-pre-wrap">
                  {`삼성 SmartThings, 애플 HomeKit, 
구글 Home 등 주요 스마트 홈 시스템과 연동되어
더욱 편리한 홈 자동화를 경험하실 수 있습니다.
센서로 햇빛에 따라 자동 조절 등을 구현할 수 있습니다.`}
                </p>
              </li>
              <li className="flex flex-col gap-[94px] pb-[58px]  border-b border-[#707070]">
                <Image src="/images/img_system_2.png" alt="remote" width={537} height={443} />
                <div className="flex flex-col">
                  <span className="text-[31px] font-light text-[#919191]">02</span>
                  <strong className="text-[26px] font-bold">리모콘 원격제어 및 스마트 폰 앱 연동</strong>
                </div>
                <p className="text-[24px] font-light whitespace-pre-wrap">
                  {`리모콘 한 대로 여러 개의 블라인드를 동시에 제어합니다.
전용 앱(iOS/Android)를 통해 집안이나 
외부 어디에서나 블라인드를 제어할 수 있습니다.

`}
                </p>
              </li>
              <li className="flex flex-col gap-[94px] pb-[58px]  border-b border-[#707070]">
                <Image src="/images/img_system_3.png" alt="timer" width={537} height={443} />
                <div className="flex flex-col">
                  <span className="text-[31px] font-light text-[#919191]">03</span>
                  <strong className="text-[26px] font-bold">자동 타이머 기능</strong>
                </div>
                <p className="text-[24px] font-light whitespace-pre-wrap">
                  {`스케줄을 설정하여 지정된 시간에 자동으로 
개폐되어 아침 햇살로 수면을 방해받지 않고, 
저녁 시간에는 프라이버시를 확보할 수 있습니다.
`}
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Warranty />
      <Footer />
    </div>
  )
}
