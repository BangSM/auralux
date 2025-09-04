import Image from "next/image"

const FooterGreen = () => {
  return (
    <footer className="flex w-full h-[153px] border-t border-[#888] px-[55px] pt-[35px] bg-[#3f3b32] text-white">
      <div className="mr-[74px]">
        <Image src="/images/img_logo_white.png" alt="logo_gray" width={160} height={54} />
      </div>
      <div className="mr-[51px]">
        <ul className="flex flex-col">
          <li className="flex gap-2">
            <strong className="text-[11px] leading-[16px] tracking-[0.01em] font-bold">상호명</strong>
            <span className="text-[11px] leading-[16px] tracking-[0.01em] font-light">주식회사 스페이스27</span>
          </li>
          <li className="flex gap-2">
            <strong className="text-[11px] leading-[16px] tracking-[0.01em] font-bold">대표자명</strong>
            <span className="text-[11px] leading-[16px] tracking-[0.01em] font-light">정기운</span>
          </li>
          <li className="flex gap-2">
            <strong className="text-[11px] leading-[16px] tracking-[0.01em] font-bold">사업장 주소</strong>
            <span className="text-[11px] leading-[16px] tracking-[0.01em] font-light">
              서울시 중구 세종대로 136, 파이낸스빌딩 8층
            </span>
          </li>
          <li className="flex gap-2">
            <strong className="text-[11px] leading-[16px] tracking-[0.01em] font-bold">사업자 등록번호</strong>
            <span className="text-[11px] leading-[16px] tracking-[0.01em] font-light">823-59-00866</span>
          </li>
        </ul>
      </div>
      <ul className="flex flex-col">
        <li className="flex">
          <strong className="text-[11px] leading-[16px] tracking-[0.01em] font-bold">고객 센터 정보</strong>
        </li>
        <li className="flex gap-2">
          <strong className="text-[11px] leading-[16px] tracking-[0.01em] font-bold">상담 전화</strong>
          <span className="text-[11px] leading-[16px] tracking-[0.01em] font-light">1800-8893</span>
        </li>
        <li className="flex flex-col">
          <strong className="text-[11px] leading-[16px] tracking-[0.01em] font-bold">상담 이메일</strong>
          <span className="text-[11px] leading-[16px] tracking-[0.01em] font-light">auralux@space-27.com</span>
        </li>
        <li className="flex flex-col ">
          <strong className="text-[11px] leading-[16px] tracking-[0.01em] font-bold">CS운영시간</strong>
          <span className="text-[11px] leading-[16px] tracking-[0.01em] font-light">평일 : 오전 10시 ~ 오후 5시</span>
        </li>
      </ul>
    </footer>
  )
}

export default FooterGreen
