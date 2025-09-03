import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Header />
      <main className="flex flex-col items-center w-full px-[50px]">
        <section className="flex">
          <Image src="/images/img_main_header.png" alt="line" width={1905} height={1270} />
        </section>
        <section className="flex flex-col items-center mt-[110px]">
          <p className="flex justify-center items-center w-[446px] h-[43px] border border-black rounded-full text-[26px] avenir-black">
            PREMIUM BLIND AURALUX
          </p>
          <h2 className="flex text-[60px] avenir-light mt-[43px] justify-center text-center whitespace-pre">{`THE COMPLETAION OF SPACE,\nTHE HARMONY OF LIFE`}</h2>
        </section>
        <section className="flex flex-col items-center mt-[110px] gap-[36px] mb-[230px]">
          <h3 className="text-[36px] font-bold">AURALUX PRODUCT</h3>
          <div className="flex flex-col items-center">
            <ul className="flex gap-[11px] product-list ">
              <li className="flex flex-col items-center gap-[18px] w-[1/4]">
                <Image src="/images/img_honeycomb.png" alt="honeycomb" width={687} height={0} />
                <Link
                  href="/product/honeycomb"
                  className="flex justify-center items-center border border-black w-full rounded-full h-[44px] hover:bg-[#000] hover:text-white cursor-pointer"
                >
                  <span className="text-[21px] font-[200]">
                    <span className="text-[21px] font-bold">허니콤 블라인드</span> HONEYCOMB BLIND
                  </span>
                </Link>
              </li>
              <li className="flex flex-col items-center gap-[18px] w-[1/4]">
                <Image src="/images/img_comb.png" alt="comb" width={687} height={0} />
                <Link
                  href="/product/combi"
                  className="flex justify-center items-center border border-black w-full rounded-full h-[44px] hover:bg-[#000] hover:text-white cursor-pointer"
                >
                  <span className="text-[21px] font-extralight">
                    <span className="text-[21px] font-bold">콤비 블라인드</span> COMBI BLIND
                  </span>
                </Link>
              </li>
              <li className="flex flex-col items-center gap-[18px] w-[1/4]">
                <Image src="/images/img_wood.png" alt="wood" width={687} height={0} />
                <Link
                  href="/product/wood"
                  className="flex justify-center items-center border border-black w-full rounded-full  h-[44px] hover:bg-[#000] hover:text-white cursor-pointer"
                >
                  <span className="text-[21px] font-extralight ">
                    <span className="text-[21px] font-bold">우드 블라인드</span> WOOD BLIND
                  </span>
                </Link>
              </li>
              <li className="flex flex-col items-center gap-[18px] w-[1/4]">
                <Image src="/images/img_screen.png" alt="screen" width={687} height={0} />
                <Link
                  href="/product/screen"
                  className="flex justify-center items-center border border-black w-full rounded-full h-[44px] hover:bg-[#000] hover:text-white cursor-pointer"
                >
                  <span className="text-[21px] font-[200] tracking-tighter">
                    <span className="font-bold">롤스크린/썬스크린</span> ROLLER & SUN SCREENS
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex items-center w-full gap-[70px] mb-[230px] section-3">
          <div className="flex flex-col items-center border border-[#b4b4b4] rounded-[20px] w-[743px] h-auto shrink-0">
            <Image src="/images/img_section_3.png" alt="product" width={743} height={0} />
          </div>
          <div className="flex flex-col w-[calc(100%-813px)] min-w-[650px] pt-[30px] pb-[40px] gap-[75px] border-t-2 border-b-2 border-[#888] section-3-info shrink-0">
            <strong className="text-[32px] font-bold">공간의 완성, 삶의 조화</strong>
            <div className="whitespace-pre-wrap text-[23px]">
              <span>{`Auralux는 고품질 디자인과 기능성을 완비하여 인테리어 감성을\n완성하는프리미엄 블라인드 브랜드입니다.\n`}</span>
              <strong className="text-[23px] text-bold">{`"공간에 빛의 아우라를 입히는 브랜드"`}</strong>로<br />
              최첨단 기술과 세련된 디자인을 접목해 새로운 공간 경험을 제시합니다.
            </div>
            <Link
              href="/about"
              className="flex justify-center items-center w-[233px] h-[44px] border border-[#707070] text-[21px] font-bold rounded-[30px] tracking-normal hover:bg-[#000] hover:text-white cursor-pointer"
            >
              브랜드 소개 바로가기
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
