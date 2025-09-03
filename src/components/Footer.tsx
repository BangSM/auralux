import Image from "next/image"

const Footer = () => {
  return (
    <footer className="flex h-[235px] pt-[34px] ">
      <div className="ml-[10px] mr-[74px]">
        <Image src="/images/img_logo_gray.png" alt="logo_gray" width={160} height={54} />
      </div>
      <div className="mr-[50px]">
        <ul className="flex flex-col">
          <li className="flex gap-2">
            <strong className="text-[11px] font-bold tracking-[-0.1px] leading-[16px]">상호명</strong>
            <span className="text-[11px] font-light tracking-[-0.1px] leading-[16px]">주식회사 스페이스27</span>
          </li>
          <li className="flex gap-2">
            <strong className="text-[11px] font-bold tracking-[-0.1px] leading-[16px]">대표자명</strong>
            <span className="text-[11px] font-light tracking-[-0.1px] leading-[16px]">정기운</span>
          </li>
          <li className="flex gap-2">
            <strong className="text-[11px] font-bold tracking-[-0.1px] leading-[16px]">사업장 주소</strong>
            <span className="text-[11px] font-light tracking-[-0.1px] leading-[16px]">
              서울시 중구 세종대로 136, 파이낸스빌딩 8층
            </span>
          </li>
          <li className="flex gap-2">
            <strong className="text-[11px] font-bold tracking-[-0.1px] leading-[16px]">사업자 등록번호</strong>
            <span className="text-[11px] font-light tracking-[-0.1px] leading-[16px]">823-59-00866</span>
          </li>
        </ul>
      </div>
      <ul className="flex flex-col">
        <li className="flex">
          <strong className="text-[11px] font-bold tracking-[-0.1px] leading-[16px]">고객 센터 정보</strong>
        </li>
        <li className="flex gap-2">
          <strong className="text-[11px] font-bold tracking-[-0.1px] leading-[16px]">상담 전화</strong>
          <span className="text-[11px] font-light tracking-[-0.1px] leading-[16px]">1800-8893</span>
        </li>
        <li className="flex flex-col">
          <strong className="text-[11px] font-bold tracking-[-0.1px] leading-[16px]">상담 이메일</strong>
          <span className="text-[11px] font-light tracking-[-0.1px] leading-[16px]">auralux@space-27.com</span>
        </li>
        <li className="flex flex-col ">
          <strong className="text-[11px] font-bold tracking-[-0.1px] leading-[16px]">CS운영시간</strong>
          <span className="text-[11px] font-light tracking-[-0.1px] leading-[16px]">평일 : 오전 10시 ~ 오후 5시</span>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
