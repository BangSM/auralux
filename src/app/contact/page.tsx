import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"

const Contact = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col w-full px-[50px] min-w-[1024px]">
        <h2 className="text-[69px] avenir-light mt-[40px] mb-[103px] border-b border-[#707070] ">CONTACT. US</h2>
        <section className="flex flex-col gap-[20px] px-[50px] pt-[60px] mb-[100px]">
          <div className="flex gap-[60px]">
            <span className="w-[120px] text-[25px] font-semibold">E-MAIL</span>
            <p className="w-full text-[25px] font-normal">auralux@space-27.com</p>
          </div>
          <div className="flex gap-[60px]">
            <span className="w-[120px] text-[25px] font-semibold">PHONE</span>
            <p className="w-full text-[25px] font-normal">1800-8893</p>
          </div>
          <div className="flex gap-[60px]">
            <span className="w-[120px] text-[25px] font-semibold">ADDRESS</span>
            <p className="w-full text-[25px] font-normal">서울시 중구 세종대로136, 파이낸스빌딩 8층</p>
          </div>
        </section>
        <section className="flex mb-[150px]">
          <Image src="/images/img_contact.png" alt="line" width={1820} height={648} />
        </section>
      </main>
      <div className="relative bottom-0 left-0 w-full bg-white">
        <Footer />
      </div>
    </div>
  )
}

export default Contact
