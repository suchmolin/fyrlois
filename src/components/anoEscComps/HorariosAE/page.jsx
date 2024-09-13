"use client"
import { useState } from "react"
import HorariosPresencialAE from "../HorariosPresencialAE/page"
import HorariosOnlineAE from "../HorariosOnlineAE/page"
import BotonAE from "../BotonAE/page"

export default function HorariosAE() {
  const [selector, setSelector] = useState("presencial")

  return (
    <div className="w-full min-h-screen flex justify-center -mt-40">
      <div className="relative w-11/12 rounded-3xl bg-white pt-10 pb-32 px-20 bg-[url('/img/AE/scho.png')] bg-contain bg-no-repeat bg-bottom">
        <h3 className="absolute right-20 top-10 font-[EastmanBold] text-2xl">
          Horarios
        </h3>
        {/******************buttons***********************/}
        <div className="w-fit flex bg-[#f0f0f1] rounded-lg">
          <button
            onClick={() => setSelector("presencial")}
            className={`px-10 py-2 rounded-lg transition-all duration-300 ${selector === "presencial" ? "bg-[#f37eb5] text-white shadow-xl" : ""}`}
          >
            Presencial
          </button>
          <button
            onClick={() => setSelector("online")}
            className={`px-10 py-2 rounded-lg transition-all duration-300 ${selector === "online" ? "bg-[#f37eb5] text-white shadow-xl" : ""}`}
          >
            Online
          </button>
        </div>
        <div className="w-full flex justify-center py-10">
          <div className="relative w-10/12 min-h-[600px] bg-[url('/img/AE/cuadro-horario.png')] bg-cover bg-center bg-no-repeat rounded-xl px-20 py-5 justify-center items-center">
            {selector === "presencial" ? (
              <HorariosPresencialAE />
            ) : (
              <HorariosOnlineAE />
            )}
            <div className="absolute bottom-5 left-0 w-full flex justify-center">
              <BotonAE
                texto="Contáctanos"
                color1="white"
                color2="#cdea80"
                colorHover="#000b7a"
                colorTexto="[#000b7a]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
