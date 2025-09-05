"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Warranty from "@/components/Warranty"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const PRODUCT_DATA = {
  screen: {
    tag: "AURALUX PREMIUM BLIND",
    title: "ROLLER & SUN SCREEMS",
    image_1: "/images/img_slide_01.png",
    nextLink: "/product/curtains",
    prevLink: "/product/wood",
    subTitle: "롤스크린 & 썬스크린",
    subLabel: "실용적이고 모던한 스타일의 롤러형 차양",
    description:
      "차분한 분위기와 완벽한 차단이 필요한 곳엔 롤스크린을,\n개방감과 자연광이 어우러진 공간엔 썬스크린을 선택하세요.\n주거,오피스,상겁공간까지 각기 다른 공간에 최적화된 빛의 솔루션을 제공합니다.",
    image_2: "/images/img_screen_1.png",
    image_3: "/images/img_screen_2.png",
    mainText: "ROLLER & SUN SCREEMS",
  },
  wood: {
    tag: "AURALUX PREMIUM BLIND",
    title: "WOOD BLIND",
    image_1: "/images/img_slide_02.png",
    nextLink: "/product/screen",
    prevLink: "/product/combi",
    subTitle: "우드 블라인드",
    subLabel: "천연 목재의 고급스러움을 살린 블라인드",
    description:
      "천연목재 우드 블라인드는 고급 원목을 정교하게 가공해 만든 블라인드로,\n나무의 온기와 질감을 그대로 느낄 수 있습니다.\n내구성이 뛰어나 오랜 시간 변형 없이 사용 가능하며, 공간에 따뜻함과 고급스러움을 더합니다.",
    image_2: "/images/img_wood_01.png",
    image_3: "/images/img_wood_02.png",
    mainText: "WOOD BLIND",
  },
  honeycomb: {
    tag: "AURALUX PREMIUM BLIND",
    title: "HONEYCOMB BLIND",
    image_1: "/images/img_slide_04.png",
    nextLink: "/product/combi",
    prevLink: "/product/curtains",
    subTitle: "허니콤 블라인드",
    subLabel: "벌집 구조로 만든 프리미엄 단열 블라인드",
    description:
      "허니콤 블라인드는 육각형 셀 구조 속 공기층이 뛰어난 단열 · 방음 성능을 제공하는 고급 블라인드입니다.\n은은한 채광과 세련된 디자인으로 어떤 공간에도 어울립니다.",
    image_2: "/images/img_honey_01.png",
    image_3: "/images/img_honey_02.png",
    mainText: "HONEYCOMB BLIND",
  },
  curtains: {
    tag: "AURALUX PREMIUM BLIND",
    title: "SMART CURTAINS",
    image_1: "/images/img_slide_03.png",
    nextLink: "/product/honeycomb",
    prevLink: "/product/screen",
    subTitle: "스마트 커튼",
    subLabel: "전동 레일로 이동되는 첨단 기능의 커튼 시스템",
    description:
      "스마트 커튼은 전동 모터와 IoT 기술을 접목한 차세대 커튼 시스템입니다.\n스마트폰 앱, 리모컨, 음성 명령으로 커튼을 열고 닫을 수 있으며,\n 시간 예약 기능으로 하루의 채광을 자동으로 조절합니다.\n고급 원단과 정교한 주름 가공이 만들어내는 인테리어 완성도 또한 탁월합니다.",
    image_2: "/images/img_curtains_1.png",
    image_3: "/images/img_curtains_2.png",
    mainText: "SMART CURTAINS",
  },
  combi: {
    tag: "AURALUX PREMIUM BLIND",
    title: "COMBI BLIND",
    image_1: "/images/img_slide_05.png",
    nextLink: "/product/wood",
    prevLink: "/product/honeycomb",
    subTitle: "콤비 블라인드",
    subLabel: "빛조절 가능이 용이한 이중 레이어 블라인드",
    description:
      "콤비블라인드는 빛을 투과하는 시스루 원단과 차단 원단이 번갈아 배열된 이중 구조의 롤스크린입니다.\n두 겹의 원단을 겹치거나 어긋나게 하여, 빛과 시야를 자유롭게 조절할 수 있고\n커튼의 부드러움과 블라인드의 실용성을 하나로 결합한 제품입니다.",
    image_2: "/images/img_combi_01.png",
    image_3: "/images/img_combi_02.png",
    mainText: "COMBI BLIND",
  },
}

export default function Product({ product }: { product: keyof typeof PRODUCT_DATA }) {
  const router = useRouter()
  const [nextBtn, setNextBtn] = useState(false)
  const [prevBtn, setPrevBtn] = useState(false)
  return (
    <div className="flex flex-col">
      <div className="product-header">
        <Header />
      </div>
      <main className="flex flex-col text-center items-center w-full mx-auto min-w-[1440px] px-[30px]">
        <div className="flex flex-col items-center pt-[85px] mb-[65px] border-t border-[#707070] w-full">
          <span className="text-[24px] avenir-roman ">AURALUX PREMIUM BLIND</span>
          <h2 className="text-[48px] avenir-light">{PRODUCT_DATA[product].title}</h2>
        </div>
        <div className="relative w-full ">
          <Image src={PRODUCT_DATA[product].image_1} alt="line" width={1820} height={0} className="h-auto" />
          <button
            className="absolute top-[50%] left-[20px] translate-y-[-50%] cursor-pointer"
            onMouseOver={() => setPrevBtn(true)}
            onMouseLeave={() => setPrevBtn(false)}
            onClick={() => router.push(PRODUCT_DATA[product].prevLink)}
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
            onClick={() => router.push(PRODUCT_DATA[product].nextLink)}
          >
            {!nextBtn ? (
              <Image src="/images/btn_next.png" alt="next" width={36} height={70} />
            ) : (
              <Image src="/images/btn_next_black.png" alt="next" width={36} height={70} />
            )}
          </button>
          <div className="flex gap-[9px] items-center absolute bottom-[17px] left-[50%] translate-x-[-50%] text-[16px] font-light">
            <span className="flex w-[12px] h-[12px] bg-transparent rounded-full border-[2px] border-[#fff]"></span>
            <span className="flex w-[12px] h-[12px] bg-transparent rounded-full border-[2px] border-[#fff]"></span>
            <span className="flex w-[12px] h-[12px] bg-transparent rounded-full border-[2px] border-[#fff]"></span>
            <span className="flex w-[12px] h-[12px] bg-[#fff] rounded-full"></span>
            <span className="flex w-[12px] h-[12px] bg-transparent rounded-full border-[2px] border-[#fff]"></span>
          </div>
        </div>
        <section className="flex flex-col mt-[98px] mb-[70px]">
          <div className="flex flex-col items-center w-full gap-[50px]">
            <h3 className="text-[25px] font-bold">{PRODUCT_DATA[product].subTitle}</h3>
            <div className="flex flex-col items-center gap-[15px]">
              <span className="text-[19px] font-normal text-[#000] tracking-[-0.01em]">
                {PRODUCT_DATA[product].subLabel}
              </span>
              <p className="w-[588px] text-[19px] font-light whitespace-pre-wrap text-center text-[#000] tracking-[-0.01em]">
                {PRODUCT_DATA[product].description}
              </p>
            </div>
          </div>
        </section>
        <div className="h-[170px] w-[1px] bg-[#a7a7a7] mb-[70px]"></div>
        <section className="flex flex-col items-center border-b border-[#707070] mb-[160px] max-w-[1440px] w-full ">
          <div className="flex gap-5 mb-[82px] ">
            <Image src={PRODUCT_DATA[product].image_2} alt="balcony_1" width={507} height={432} />
            <Image src={PRODUCT_DATA[product].image_3} alt="office_2" width={915} height={432} />
          </div>
          <p className="flex w-full justify-center text-[122px] font-light text-[#e0e0e0]">
            {PRODUCT_DATA[product].mainText}
          </p>
        </section>
        <section className="flex flex-col items-center mb-[136px]">
          <div className="flex flex-col items-center gap-[20px] mb-[96px]">
            <strong className="text-[48px] avenir-light">PRODUCT FEATURES</strong>
            <span className="text-[25px] font-bold">오라럭스의 특별함</span>
          </div>
          <div className="w-full px-[71px]">
            <ul className="flex gap-[13px] mb-[230px] justify-center w-full">
              <li className="flex flex-col gap-[76px] pb-[58px] border-b border-[#707070]">
                <Image src="/images/img_smart_01.png" alt="local" width={424} height={350} />
                <div className="flex flex-col items-start gap-[82px]">
                  <div className="flex flex-col items-start gap-[22px]">
                    <span className="text-[25px] font-light text-[#919191] tracking-[-0.01em]">01</span>
                    <strong className="text-[26px] font-bold">국내 생산</strong>
                  </div>

                  <p className="text-left text-[19px] font-light whitespace-pre-wrap text-[#000] tracking-[-0.01em] leading-[28px]">
                    {`Auralux의 전 제품은 100% 국내 생산으로, 
엄격한 품질 관리 아래 제작됩니다.
높은 완성도와 안정적인 공급으로 프리미엄의
기준을 지켜갑니다.`}
                  </p>
                </div>
              </li>
              <li className="flex flex-col gap-[76px] pb-[58px]  border-b border-[#707070]">
                <Image src="/images/img_smart_02.png" alt="premium" width={424} height={350} />
                <div className="flex flex-col items-start gap-[22px]">
                  <span className="text-[31px] font-light text-[#919191]">02</span>
                  <strong className="text-[26px] font-bold">프리미엄 소재</strong>
                </div>
                <p className="text-left text-[19px] font-light whitespace-pre-wrap text-[#000] tracking-[-0.01em] leading-[28px]">
                  {`천연 목재로 만든 고급 우드 블라인드,  FSC등 친환경 
인증 목재, 항균, ATB UV차단 원단을 사용하여
품격있고 자연 친화적인 제품을 제공합니다.
`}
                </p>
              </li>
              <li className="flex flex-col gap-[76px] pb-[58px]  border-b border-[#707070]">
                <Image src="/images/img_smart_03.png" alt="motor" width={424} height={350} />
                <div className="flex flex-col items-start gap-[22px]">
                  <span className="text-[31px] font-light text-[#919191]">03</span>
                  <strong className="text-[26px] font-bold">초저소음 모터</strong>
                </div>
                <p className="text-left text-[19px] font-light whitespace-pre-wrap text-[#000] tracking-[-0.01em] leading-[28px]">
                  {`세계적인 명품 블라인드 전동 브랜드 “Somfy” 제품을 
탑재하여 도서관 보다 조용한 27db 수준의
정숙함을 느끼실 수 있습니다.`}
                </p>
              </li>
            </ul>
            <ul className="flex gap-[13px] justify-center w-full">
              <li className="flex flex-col gap-[85px] pb-[36px] w-1/2  border-b border-[#707070]">
                <Image src="/images/img_smart_04.png" alt="custom" width={643} height={350} />
                <div className="flex flex-col items-start gap-[83px]">
                  <div className="flex flex-col items-start gap-[22px]">
                    <span className="text-[25px] font-light text-[#919191]">04</span>
                    <strong className="text-[21px] font-bold">맞춤 제작</strong>
                  </div>
                  <p className="text-left text-[19px] text-[#000] tracking-[-0.01em] leading-[28px] font-light whitespace-pre-wrap">
                    {`고객의 니즈에 맞게 1mm 단위까지 제작되며, 
색상, 패턴 등 디자인 커스터마이징도 가능합니다.`}
                  </p>
                </div>
              </li>
              <li className="flex flex-col gap-[85px] pb-[36px] w-1/2  border-b border-[#707070]">
                <Image src="/images/img_smart_05.png" alt="specialty" width={643} height={350} />
                <div className="flex flex-col items-start gap-[83px]">
                  <div className="flex flex-col items-start gap-[22px]">
                    <span className="text-[25px] font-light text-[#919191]">05</span>
                    <strong className="text-[21px] font-bold">전문 실측 및 시공</strong>
                  </div>
                  <p className="text-left text-[19px] text-[#000] tracking-[-0.01em] leading-[28px] font-light whitespace-pre-wrap">
                    {`전문가 실측 후, 맞춤 제작과 숙련된 시공기술로 빈틈없는 설치를 약속합니다.`}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col items-center gap-[71px] mb-[117px]">
          <div className="flex flex-col items-center gap-[31px]">
            <strong className="text-[48px] avenir-light tracking-[-0.01em]">SMART LIFE SYSTEM</strong>
            <span className="text-[32px] font-bold">스마트 시스템</span>
          </div>
          <div className="flex flex-col items-center gap-[86px]">
            <div className="relative overflow-hidden w-full h-[600px]">
              <video
                autoPlay
                muted
                loop
                controls
                playsInline
                webkit-playsinline="true"
                className="w-auto h-full object-cover mx-auto"
              >
                <source src="/video1.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="w-full px-[71px]">
              <ul className="flex gap-[13px] ">
                <li className="flex flex-col gap-[94px] pb-[56px]  border-b border-[#707070]">
                  <Image src="/images/img_system_1.png" alt="iot" width={424} height={350} />
                  <div className="flex flex-col items-start gap-[83px]">
                    <div className="flex flex-col items-start gap-[22px]">
                      <span className="text-[25px] font-light text-[#919191]">01</span>
                      <strong className="text-[21px] font-bold">IOT 홈 연동</strong>
                    </div>
                    <p className="text-left text-[19px] text-[#000] tracking-[-0.01em] leading-[28px] font-light whitespace-pre-wrap">
                      {`삼성 SmartThings, 애플 HomeKit, 
구글 Home 등 주요 스마트 홈 시스템과 연동되어
더욱 편리한 홈 자동화를 경험하실 수 있습니다.
센서로 햇빛에 따라 자동 조절 등을 구현할 수 있습니다.`}
                    </p>
                  </div>
                </li>
                <li className="flex flex-col gap-[94px] pb-[56px]  border-b border-[#707070]">
                  <Image src="/images/img_system_2.png" alt="remote" width={424} height={350} />
                  <div className="flex flex-col items-start gap-[22px]">
                    <span className="text-[25px] font-light text-[#919191]">02</span>
                    <strong className="text-[21px] font-bold">리모콘 원격제어 및 스마트 폰 앱 연동</strong>
                  </div>
                  <p className="text-left text-[19px] text-[#000] tracking-[-0.01em] leading-[28px] font-light whitespace-pre-wrap">
                    {`리모콘 한 대로 여러 개의 블라인드를 동시에 제어합니다.
전용 앱(iOS/Android)를 통해 집안이나 
외부 어디에서나 블라인드를 제어할 수 있습니다.

`}
                  </p>
                </li>
                <li className="flex flex-col gap-[94px] pb-[56px]  border-b border-[#707070]">
                  <Image src="/images/img_system_3.png" alt="timer" width={424} height={350} />
                  <div className="flex flex-col items-start gap-[22px]">
                    <span className="text-[25px] font-light text-[#919191]">03</span>
                    <strong className="text-[21px] font-bold">자동 타이머 기능</strong>
                  </div>
                  <p className="text-left text-[19px] text-[#000] tracking-[-0.01em] leading-[28px] font-light whitespace-pre-wrap">
                    {`스케줄을 설정하여 지정된 시간에 자동으로 
개폐되어 아침 햇살로 수면을 방해받지 않고, 
저녁 시간에는 프라이버시를 확보할 수 있습니다.
`}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Warranty />
      <Footer />
    </div>
  )
}
