import Image from "next/image"
import NavBarAE from "../NavBarAE/page"
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import { FaRegCirclePlay } from "react-icons/fa6"
import "./page.css"

export default function HeaderAE() {
  return (
    <header className="bg-[url('/img/AE/linear.png')] bg-no-repeat bg-bottom w-full h-[130vh] flex flex-col bg-[#f0f0f0] pb-10">
      <NavBarAE />
      <div className="w-full h-full flex items-center">
        <div className="w-6/12 flex flex-col items-center mt-48 ml-20">
          <div className="flex flex-col items-center -rotate-6">
            <div className="flex gap-1">
              <div className="w-[60px] h-[60px] relative">
                <Image
                  src="/img/AE/iconohello.png"
                  alt="icon"
                  fill
                  objectFit="contain"
                />
              </div>
              <div className="w-[60px] h-[60px] relative">
                <Image
                  src="/img/AE/bombillo.png"
                  alt="icon"
                  fill
                  objectFit="contain"
                />
              </div>
              <div className="w-[60px] h-[60px] relative">
                <Image
                  src="/img/AE/flecha.png"
                  alt="icon"
                  fill
                  objectFit="contain"
                />
              </div>
            </div>
            <h1 className="text-7xl text-[#000b7a] text-center font-[EastmanBold] flex flex-col">
              Impulsa el <br />
              <span className="text-8xl">bilingüismo</span>
              <span className="font-[Londrina] text-8xl text-[#f37eb5] -mt-1">
                de tu hijo
              </span>
            </h1>
          </div>
          <a
            href="#"
            className="comienzaAhora flex justify-center items-center mt-10 bg-[#fbd874] rounded-xl overflow-hidden text-2xl font-[EastmanBold] hover:bg-[#cdea80] transition-all duration-300"
          >
            <span className="px-4 py-2 rounded-xl font-bold text-white bg-[#001a6f]">
              Comienza ahora
            </span>
            <span className="flecha px-1 transition-all duration-300">
              <IoArrowForwardCircleOutline className="text-3xl" />{" "}
            </span>
          </a>

          <div className="w-[500px] h-[300px] mt-16 flex items-center justify-center bg-[#f0f0f1] border-[20px] border-[#000b7a] rounded-md">
            <FaRegCirclePlay className="text-8xl" />
          </div>
        </div>
        <div className="w-7/12 h-full relative">
          <Image
            src="/img/AE/unidas3.png"
            alt="niños"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
          />
        </div>
      </div>
    </header>
  )
}
