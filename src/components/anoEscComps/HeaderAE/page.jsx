import Image from "next/legacy/image"
import NavBarAE from "../NavBarAE/page"

import { FaRegCirclePlay } from "react-icons/fa6"
import "./page.css"
import IconsAE from "../IconsAE/page"

import { IoArrowForwardCircleOutline } from "react-icons/io5"

export default function HeaderAE() {
  return (
    <header className="relative bg-[url('/img/AE/linear.png')] bg-no-repeat bg-bottom w-full lg:min-h-[130vh] flex flex-col bg-[#f0f0f0] pb-10">
      <NavBarAE />
      <div className="relative w-full h-full flex  flex-row mt-20 lg:mt-0">
        <div className="w-full lg:w-4/12 xl:w-3/12 2xl:w-6/12 flex flex-col items-center mt-20 lg:mt-48 lg:ml-20 xl:ml-48 2xl:ml-20 z-20">
          <div className="flex flex-col items-center -rotate-6">
            <IconsAE />
            <h1 className="text-4xl sm:text-5xl xl:text-7xl text-[#000b7a] text-center font-[EastmanBold] flex flex-col">
              Impulsa el <br />
              <span className="text-5xl sm:text-6xl xl:text-8xl">
                bilingüismo
              </span>
              <span className="font-[Londrina] text-6xl sm:text-7xl xl:text-8xl text-[#f37eb5]">
                de tu hijo
              </span>
            </h1>
          </div>
          <a
            href="#"
            className={`comienzaAhora flex justify-center items-center mt-5 sm:mt-10 bg-[#fbd874] rounded-xl text-2xl font-[EastmanBold] hover:bg-[#cdea80] transition-all duration-300`}
          >
            <span
              className={`px-4 py-2 rounded-xl font-bold text-white bg-[#001a6f]`}
            >
              Comienza ahora
            </span>
            <span className="flecha px-1 transition-all duration-300">
              <IoArrowForwardCircleOutline className="text-3xl" />{" "}
            </span>
          </a>

          <div className="w-[350px] sm:w-[500px] h-[180px] lg:h-[300px] mt-5 sm:mt-16 flex items-center justify-center bg-[#f0f0f1] border-[10px] sm:border-[20px] border-[#000b7a] rounded-md z-20">
            <FaRegCirclePlay className="text-6xl sm:text-8xl" />
          </div>
        </div>
        <div className="hidden lg:block w-full h-[700px] xl:h-full bg-[url('/img/AE/unidas3.png')] bg-contain bg-right bg-no-repeat aspect-square"></div>
      </div>
    </header>
  )
}
