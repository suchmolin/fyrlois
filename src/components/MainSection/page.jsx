"use client"
import SelectCountry from "@/components/SelectCountry/page"
import Image from "next/legacy/image"
export default function MainSection() {
  return (
    <div className="relative mainSec h-[640px] flex">
      <div className="relative w-full flex justify-center lg:justify-end">
        <div className="absolute top-0 left-0">
          <div className="relative w-[80px] sm:w-[150px] aspect-square">
            <Image
              src="/img/222.png"
              alt="baner1"
              layout="fill"
              objectFit="contain"
              priority
              unoptimized
            />
          </div>
        </div>
        <div className="w-9/12 lg:w-8/12 flex flex-col justify-center font-[lato] bg-transparent">
          <div className="relative w-[320px] h-[150px]">
            <Image
              className="md:ml-10"
              src="/img/2.png"
              alt="baner1"
              layout="fill"
              objectFit="contain"
              priority
              unoptimized
            />
          </div>
          <h1 className="text-[#9de800] text-3xl leading-relaxed">
            <i>
              Comienza a hacer realidad tu <b>proyecto de vida.</b>
            </i>
          </h1>
          <h2 className="text-[#000b7a] text-2xl leading-relaxed py-4">
            <b>Aprende inglés</b> Con nosotros.
          </h2>
          <SelectCountry />
          <h3 className="text-xl text-[#000b7a] mt-3">
            <b>25 años de experiencia</b> en la enseñanza de idiomas en América,
            con sede en <b>Estados Unidos.</b>
          </h3>
        </div>
      </div>
      <div className="mainFondo h-full w-11/12 hidden items-center justify-center md:flex"></div>
    </div>
  )
}
