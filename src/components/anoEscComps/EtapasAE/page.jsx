import Image from "next/image"

export default function EtapasAE() {
  return (
    <div className="w-full flex flex-col items-center justify-center -mt-1 bg-white py-20">
      <div className="w-10/12">
        <h2 className="text-4xl text-[#000b7a] font-[EastmanBold] flex flex-col leading-9">
          Acompañamiento <span>académico</span>
        </h2>
        <p className="font-[EastmanBold] text-2xl">
          adaptado a su etapa y competencias de lenguaje
        </p>
        <div className="w-full py-5 flex justify-center gap-10">
          <div className="w-[350px] relative min-h-[500px] rounded-lg bg-[#cdea80] flex justify-center items-center">
            <div className="relative w-11/12 h-full">
              <Image
                src="/img/AE/verde.png"
                fill
                objectFit="contain"
                alt="school"
              />
            </div>
            <div className="absolute bottom-0 w-full flex justify-center">
              <div className="px-16 pt-10 pb-5 bg-[url('/img/AE/cuadro-azul.png')] bg-cover bg-no-repeat text-5xl text-white">
                Kids
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
