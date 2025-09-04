import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"

const Contact = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col">
        <h2 className="text-[55px] w-full leading-[auto] tracking-[0.01em] avenir-light px-[50px] pt-[39px] pb-[67px] border-t border-b border-[#707070] ">
          CONTACT. US
        </h2>
        <section className="flex flex-col gap-[16px] px-[45px] pt-[48px] mb-[80px]">
          <div className="flex gap-[46px]">
            <span className="w-[120px] text-[20px] leading-[32px] tracking-[0.01em] font-semibold">E-MAIL</span>
            <p className="text-[20px] leading-[32px] tracking-[0.01em] font-normal">auralux@space-27.com</p>
          </div>
          <div className="flex gap-[46px]">
            <span className="w-[120px] text-[20px] leading-[32px] tracking-[0.01em] font-semibold">PHONE</span>
            <p className="text-[20px] leading-[32px] tracking-[0.01em] font-normal">1800-8893</p>
          </div>
          <div className="flex gap-[46px]">
            <span className="w-[120px] text-[20px] leading-[32px] tracking-[0.01em] font-semibold">ADDRESS</span>
            <p className="text-[20px] leading-[32px] tracking-[0.01em] font-normal">
              서울시 중구 세종대로136, 파이낸스빌딩 8층
            </p>
          </div>
        </section>
        <section className="flex px-[30px] mb-[120px] w-full rounded-[20px]">
          <Image src="/images/img_contact.png" alt="line" width={1380} height={510} objectFit="contain" />
        </section>
      </main>
      <div className="relative bottom-0 left-0 bg-white">
        <Footer />
      </div>
    </div>
  )
}

export default Contact
