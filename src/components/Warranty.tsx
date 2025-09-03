import Image from "next/image"

const Warranty = () => {
  return (
    <div className="flex flex-col items-center bg-[#efeeee] w-content pb-[247px] pt-[112px]">
      <div className="flex flex-col w-[856px] items-center mb-[70px]">
        <strong className="text-[48px] avenir-light mb-[39px] tracking-[-0.01em]">Warranty & Quality Assurance</strong>
        <span className="text-[25px] tracking-[-0.01em] font-bold mb-[50px]">품질보증 A/S서비스</span>
        <p className="text-[19px] font-light text-center whitespace-pre-wrap tracking-[-0.01em] leading-[28px]">
          {`Auralux는 품질과 내구성에 대한 자신감으로 업계 최고 수준의 보증을 약속합니다.\n모든 제품은 평생 제한 무상 보증, 전동 블라인드의 핵심 부품인 모터는 5년 보증을 제공합니다.\n이는 뛰어난 품질과 고객에 대한 책임을 증명하는\nAuralux의 신뢰의 표현입니다.`}
        </p>
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex gap-[16px]">
          <div className="relative flex justify-center items-center text-center w-[424px] h-[287px] text-[27px] tracking-[-0.01em] leading-[40px] font-light rounded-[20px] bg-[#ffffff] whitespace-pre-wrap">
            {`모든 제품\n평생 제한 무상 보증`}
            <span className="absolute top-[28px] left-[30px] text-[#abaaaa] text-[19px] tracking-[-0.01em] leading-[27px] font-medium">
              WARRANTY. 1
            </span>
          </div>
          <div className="relative flex justify-center items-center text-center w-[424px] h-[287px] text-[27px] tracking-[-0.01em] leading-[40px] font-light rounded-[20px] bg-[#ffffff] whitespace-pre-wrap">
            {`전동 블라인드 모터\n5년 무상 보증`}
            <span className="absolute top-[28px] left-[30px] text-[#abaaaa] text-[19px] tracking-[-0.01em] leading-[27px] font-medium">
              WARRANTY. 2
            </span>
          </div>
        </div>
        <div className="relative flex justify-center items-center py-[140px] w-full h-auto  rounded-[20px] bg-[#ffffff]">
          <Image src="/images/img_warranty.png" alt="warranty_certificate" width={592} height={836} />
          <span className="absolute top-[39px] left-[35px] text-[#abaaaa] text-[19px] tracking-[-0.01em] leading-[27px] font-medium">
            WARRANTY CERTIFICATE
          </span>
        </div>
      </div>
    </div>
  )
}

export default Warranty
