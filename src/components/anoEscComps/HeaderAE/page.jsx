import Image from "next/image"
import NavBarAE from "../NavBarAE/page"

import { FaRegCirclePlay } from "react-icons/fa6"
import "./page.css"
import IconsAE from "../IconsAE/page"
import BotonAE from "../BotonAE/page"

export default function HeaderAE() {
  return (
    <header className="bg-[url('/img/AE/linear.png')] bg-no-repeat bg-bottom w-full h-[130vh] flex flex-col bg-[#f0f0f0] pb-10">
      <NavBarAE />
      <div className="w-full h-full flex items-center">
        <div className="w-6/12 flex flex-col items-center mt-48 ml-20">
          <div className="flex flex-col items-center -rotate-6">
            <IconsAE />
            <h1 className="text-7xl text-[#000b7a] text-center font-[EastmanBold] flex flex-col">
              Impulsa el <br />
              <span className="text-8xl">bilingüismo</span>
              <span className="font-[Londrina] text-8xl text-[#f37eb5]">
                de tu hijo
              </span>
            </h1>
          </div>
          <BotonAE
            texto="Comienza ahora"
            color1="[#001a6f]"
            color2="#fbd874"
            colorHover="#cdea80"
            colorTexto="white"
          />

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
