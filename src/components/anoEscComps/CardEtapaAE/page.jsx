import Image from "next/image"

export default function CardEtapaAE({
  fondo,
  titulo,
  edades,
  colorEdades,
  imagen,
  tituloSize,
}) {
  return (
    <div
      className={`w-[350px] relative min-h-[500px] rounded-lg bg-[${fondo}] flex justify-center items-center cursor-pointer hover:scale-[1.02] hover:shadow-lg shadow-[#000b7a] transition-all duration-300`}
    >
      <div className="relative w-11/12 h-full mt-6">
        <Image
          src={`/img/AE/${imagen}`}
          fill
          objectFit="contain"
          alt="school"
        />
      </div>
      <div className="absolute bottom-0 w-full flex justify-center">
        <div
          className={`font-[EastmanBold] text-center w-[270px] h-[96px] flex items-center justify-center bg-[url('/img/AE/cuadro-azul.png')] bg-cover bg-no-repeat text-${tituloSize} text-white`}
        >
          <p className="mt-3">{titulo}</p>
        </div>
      </div>
      <div className="absolute -bottom-[50px] w-full flex justify-center">
        <div
          className={`font-[EastmanBold] h-[50px] text-center w-[270px] bg-[${colorEdades}] bg-[url('/img/AE/school30.png')] bg-tra bg-cover bg-no-repeat text-4xl text-[#000b7a] flex justify-center`}
        >
          {edades}
        </div>
      </div>
    </div>
  )
}
