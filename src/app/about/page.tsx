import FooterGreen from "@/components/FooterGreen"
import Header from "@/components/Header"
import Image from "next/image"

const About = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col items-center w-full px-[50px] min-w-[1024px]">
        <section className="flex items-center gap-[120px] w-full about-top border-t border-b border-[#b4b4b4]">
          <div className="flex pt-[80px] pb-[70px] w-[577px]">
            <Image src="/images/img_about_1.png" alt="product" width={577} height={576} />
          </div>
          <div className="flex flex-col gap-[75px] section-3-info w-[893px]">
            <strong className="text-[26px] avenir-black">HERITAGE AURALUX</strong>
            <div className="flex flex-col gap-[40px]">
              <strong className="text-[47px]">공간에 빛의 아우라를 입히는 오라럭스</strong>
              <p className="text-[26px] w-[885px] whitespace-pre">
                {`Auralux는 42년 역사의 인테리어 전문 기업 “Sandol Housing”의\n1세대 경영자로부터 오랜 노하우와 전문성을 이어 받아 새롭게 시작된 브랜드입니다.\n이러한 기반 위에서 탄생한 Auralux는 시간이 지나도 변치 않는 가치와 장인 정신을\n고스란히 담고 있으며, 현재는 2세대 경영진이 그 유산을 이어받아\n정교하면서도 감성적인 프리미엄 스마트 블라인드 브랜드로 성장시키고 있습니다.\n축적된 경험과 혁신의 조화를 통해 Auralux는 ‘시간이 쌓아 올린 품격있는 공간’을\n만드는 브랜드로서, 고객의 일상에 새로운 가치를 더하고 있습니다.`}
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-end  w-full section-3 mb-[90px]">
          <Image src="/images/img_about_2.png" alt="product" width={1207} height={605} />
        </section>
        <section className="relative flex gap-[24px] mb-[170px] overflow-hidden h-full w-full bg-white">
          <Image src="/images/img_total.png" alt="product" width={1833} height={1029} objectFit="contain" />
        </section>
      </main>
      <div className="flex flex-col items-center w-full">
        <section className="relative flex flex-col  m-w-[1240px] items-center gap-[100px] w-[100%] overflow-x-auto about-bg">
          <div className="w-full">
            <Image
              src="/images/img_about_bg.png"
              alt="product"
              width={1920}
              height={2093}
              className="w-full"
              objectFit="contain"
            />
          </div>
          <div className="flex items-center justify-center w-[249px] h-[43px] rounded-[20px] absolute top-[50px] left-[50px] bg-white text-[26px] avenir-black">
            CORE VALUES
          </div>
          <ul className="flex gap-[16px] absolute top-[160px] px-[50px] ">
            <li className="flex flex-col justify-between bg-[#fff] core-list  opacity-[0.52] h-[392px] px-[35px] py-[38px] rounded-[21px] w-[25%] ">
              <div className="text-[24px] avenir-black text-[#000]">HIGH QUALITY</div>
              <div className="flex flex-col gap-[25px]">
                <strong className="text-[24px] avenir-black text-[#000]">최고의 품질</strong>
                <p className="text-[22px] font-medium text-[#000] tracking-1 leading-[30px] whitespace-pre-line wrap-break-word">
                  {`오라럭스는 제품 하나하나에 엄격한 품질 기준을 적용하여, 오랜 시간 사용해도 변함없는 내구성과 신뢰를 제공합니다.`}
                </p>
              </div>
            </li>
            <li className="flex flex-col justify-between bg-[#fff] core-list opacity-[0.52] h-[392px] px-[35px] py-[38px] rounded-[21px]  w-[25%]">
              <div className="text-[24px] avenir-black text-[#000]">THE BEST PARTS</div>
              <div className="flex flex-col gap-[25px]">
                <strong className="text-[24px] avenir-black text-[#000]">최고의 부품</strong>
                <p className="text-[22px] font-medium text-[#000] tracking-[-0.1px] leading-[30px] whitespace-pre-line wrap-break-word">
                  {`세계적으로 검증된 고성능 모터와 정밀한 부품만을 사용해, 부드럽고 조용한 작동과 안정적인 제어를 실현합니다.`}
                </p>
              </div>
            </li>
            <li className="flex flex-col justify-between bg-[#fff] core-list opacity-[0.52] h-[392px] px-[35px] py-[38px] rounded-[21px]  w-[25%]">
              <div className="text-[24px] avenir-black text-[#000]">GOOD DESIGN</div>
              <div className="flex flex-col gap-[25px]">
                <strong className="text-[24px] avenir-black text-[#000]">최고의 디자인</strong>
                <p className="text-[22px] font-medium text-[#000] tracking-[-0.1px] leading-[30px] whitespace-pre-line wrap-break-word">
                  {`모던하고 감각적인 디자인으로 어떤 공간에도 자연스럽게 어우러지며, 공간의 품격을 한층 더 높여줍니다.`}
                </p>
              </div>
            </li>
            <li className="flex flex-col justify-between bg-[#fff] core-list opacity-[0.52] h-[392px] px-[35px] py-[38px] rounded-[21px]  w-[25%]">
              <div className="text-[24px] avenir-black text-[#000]">THE BEST SERVICE</div>
              <div className="flex flex-col gap-[25px]">
                <strong className="text-[24px] avenir-black text-[#000]">최고의 서비스</strong>
                <p className="text-[22px] font-medium text-[#000] tracking-[-0.1px] leading-[30px] whitespace-pre-line wrap-break-word">
                  {`설치부터 사후관리까지, 고객의 라이프스타일에 맞춤형 서비스를 제공하여 완벽한 만족을 약속합니다.`}
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <FooterGreen />
    </div>
  )
}

export default About
