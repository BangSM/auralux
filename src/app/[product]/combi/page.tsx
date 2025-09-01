"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Combi() {
  const router = useRouter()
  const [nextBtn, setNextBtn] = useState(false)
  const [prevBtn, setPrevBtn] = useState(false)
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col items-center w-full px-[50px] min-w-[1024px]">
        <div className="flex flex-col items-center pt-[85px] mb-[75px] border-t border-[#707070] w-full">
          <span className="text-[30px] avenir-roman ">AURALUX PREMIUM BLIND</span>
          <h2 className="text-[60px] avenir-light">COMBI BLIND</h2>
        </div>
        <div className="relative w-full">
          <Image src="/images/img_slide_05.png" alt="line" width={1820} height={0} className="h-auto" />
          <button
            className="absolute top-[50%] left-[20px] translate-y-[-50%] cursor-pointer"
            onMouseOver={() => setPrevBtn(true)}
            onMouseLeave={() => setPrevBtn(false)}
            onClick={() => router.push("/product/honeycomb")}
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
            onClick={() => router.push("/product/wood")}
          >
            {!nextBtn ? (
              <Image src="/images/btn_next.png" alt="next" width={36} height={70} />
            ) : (
              <Image src="/images/btn_next_black.png" alt="next" width={36} height={70} />
            )}
          </button>
          <div className="flex gap-[8px] items-center absolute bottom-[20px] left-[50%] translate-x-[-50%] text-[16px] font-light">
            <span className="flex w-[18px] h-[18px] bg-transparent rounded-full border-[2px] border-[#fff]"></span>
            <span className="flex w-[18px] h-[18px] bg-[#fff] rounded-full"></span>
            <span className="flex w-[18px] h-[18px] bg-transparent rounded-full border-[2px] border-[#fff]"></span>
            <span className="flex w-[18px] h-[18px] bg-transparent rounded-full border-[2px] border-[#fff]"></span>
            <span className="flex w-[18px] h-[18px] bg-transparent rounded-full border-[2px] border-[#fff]"></span>
          </div>
        </div>
        <section className="flex flex-col mt-[110px] mb-[62px]">
          <div className="flex flex-col items-center w-full gap-[50px]">
            <h3 className="text-[32px] font-bold">콤비 블라인드</h3>
            <div className="flex flex-col items-center gap-[15px]">
              <span className="text-[24px] font-normal">빛조절 가능이 용이한 이중 레이어 블라인드</span>
              <p className="text-[24px] font-light whitespace-pre text-center">
                {`콤비블라인드는 빛을 투과하는 시스루 원단과 차단 원단이 번갈아 배열된 이중 구조의 롤스크린입니다.\n두 겹의 원단을 겹치거나 어긋나게 하여, 빛과 시야를 자유롭게 조절할 수 있고\n커튼의 부드러움과 블라인드의 실용성을 하나로 결합한 제품입니다.`}
              </p>
            </div>
          </div>
        </section>
        <div className="h-[214px] w-[1px] bg-[#a7a7a7] mb-[62px]"></div>
        <section className="flex flex-col items-center border-b border-[#707070] mb-[200px] ">
          <div className="flex gap-5 mb-[85px]">
            <Image src="/images/img_combi_01.png" alt="blind" width={642} height={547} />
            <Image src="/images/img_combi_02.png" alt="office" width={1158} height={547} />
          </div>
          <span className="flex justify-center text-[184px] font-light text-[#e0e0e0]">COMBI BLIND</span>
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
                <p className="text-[24px] font-light whitespace-pre">
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
                <p className="text-[24px] font-light whitespace-pre">
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
                <p className="text-[24px] font-light whitespace-pre">
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
                <p className="text-[24px] font-light whitespace-pre">
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
                <p className="text-[24px] font-light whitespace-pre">
                  {`전문가 실측 후, 맞춤 제작과 숙련된 시공기술로 빈틈없는 설치를 약속합니다.`}
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col items-center gap-[40px] mb-[148px]">
          <strong className="text-[60px] avenir-light">SMART LIFE SYSTEM</strong>
          <span className="text-[32px] font-bold">스마트 시스템</span>
          <div>
            <ul className="flex gap-[16px] mb-[230px]">
              <li className="flex flex-col gap-[94px] pb-[58px]  border-b border-[#707070] w-1/3 ">
                <Image src="/images/img_system_1.png" alt="iot" width={537} height={443} />
                <div className="flex flex-col">
                  <span className="text-[31px] font-light text-[#919191]">01</span>
                  <strong className="text-[26px] font-bold">IOT 홈 연동</strong>
                </div>
                <p className="text-[24px] font-light whitespace-pre">
                  {`Auralux의 전 제품은 100% 국내 생산으로,\n엄격한 품질 관리 아래 제작됩니다.\n높은 완성도와 안정적인 공급으로 프리미엄의\n기준을 지켜갑니다.`}
                </p>
              </li>
              <li className="flex flex-col gap-[94px] pb-[58px]  border-b border-[#707070] w-1/3">
                <Image src="/images/img_system_2.png" alt="remote" width={537} height={443} />
                <div className="flex flex-col">
                  <span className="text-[31px] font-light text-[#919191]">02</span>
                  <strong className="text-[26px] font-bold">리모콘 원격제어 및 스마트 폰 앱 연동</strong>
                </div>
                <p className="text-[24px] font-light whitespace-pre">
                  {`리모콘 한 대로 여러 개의 블라인드를 동시에 제어합니다.\n전용 앱(iOS/Android)를 통해 집안이나\n외부 어디에서나 블라인드를 제어할 수 있습니다.`}
                </p>
              </li>
              <li className="flex flex-col gap-[94px] pb-[58px]  border-b border-[#707070] w-1/3">
                <Image src="/images/img_system_3.png" alt="timer" width={537} height={443} />
                <div className="flex flex-col">
                  <span className="text-[31px] font-light text-[#919191]">03</span>
                  <strong className="text-[26px] font-bold">자동 타이머 기능</strong>
                </div>
                <p className="text-[24px] font-light whitespace-pre">
                  {`스케줄을 설정하여 지정된 시간에 자동으로\n개폐되어 아침 햇살로 수면을 방해받지 않고,\n저녁 시간에는 프라이버시를 확보할 수 있습니다.`}
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <div className="flex flex-col items-center bg-[#efeeee] w-full pb-[247px] pt-[142px] m-w-[1024px]">
        <div className="flex flex-col w-[856px] items-center mb-[70px]">
          <strong className="text-[60px] avenir-light mb-[50px]">Warranty & Quality Assurance</strong>
          <span className="text-[32px] font-bold mb-[64px]">품질보증 A/S서비스</span>
          <p className="text-[24px] font-light text-center whitespace-pre">
            {`Auralux는 품질과 내구성에 대한 자신감으로 업계 최고 수준의 보증을 약속합니다.\n모든 제품은 평생 제한 무상 보증, 전동 블라인드의 핵심 부품인 모터는 5년 보증을 제공합니다.\n이는 뛰어난 품질과 고객에 대한 책임을 증명하는\nAuralux의 신뢰의 표현입니다.`}
          </p>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex gap-[16px]">
            <div className="relative flex justify-center items-center text-center w-[537px] h-[363px] text-[34px] font-light rounded-[20px] bg-[#ffffff] whitespace-pre">
              {`모든 제품\n평생 제한 무상 보증`}
              <span className="absolute top-[36px] left-[38px] text-[#abaaaa] text-[24px] font-medium">
                WARRANTY. 1
              </span>
            </div>
            <div className="relative flex justify-center items-center text-center w-[537px] h-[363px] text-[34px] font-light rounded-[20px] bg-[#ffffff] whitespace-pre ">
              {`전동 블라인드 모터\n5년 무상 보증`}
              <span className="absolute top-[36px] left-[38px] text-[#abaaaa] text-[24px] font-medium">
                WARRANTY. 2
              </span>
            </div>
          </div>
          <div className="relative flex justify-center items-center py-[140px]  rounded-[20px] bg-[#ffffff]">
            <Image src="/images/img_warranty.png" alt="warranty_certificate" width={748} height={1057} />
            <span className="absolute top-[36px] left-[38px] text-[#abaaaa] text-[24px] font-medium">
              WARRANTY CERTIFICATE
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
