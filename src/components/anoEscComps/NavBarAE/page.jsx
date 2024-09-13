import Image from "next/legacy/image"

export default function NavBarAE() {
  return (
    <nav className="w-full min-h-[110px] absolute flex flex-col justify-center items-center z-10">
      <a
        href="#"
        className="relative lg:absolute lg:left-[100px] xl:left-[150px] 2xl:left-[200px] top-[15px] hover:scale-105 transition-all duration-300"
      >
        <Image src="/img/1.png" alt="Fyr Lois" width={190} height={80} />
      </a>
      <ul className="flex h-full gap-4 sm:gap-10 font-[EastmanBold] text-[#000b7a]  xs:text-sm sm:text-xl lg:text-base xl:text-xl lg:ml-20 2xl:ml-0 mt-4 lg:mt-0">
        <li className="h-full flex items-center">
          <a
            href="#"
            className="items-center flex border-b-4 border-b-transparent hover:border-b-[#cdea80] transition-all duration-300"
          >
            Programas
          </a>
        </li>
        <li className="h-full flex items-center">
          <a
            href="#"
            className="items-center flex border-b-4 border-b-transparent hover:border-b-[#cdea80] transition-all duration-300"
          >
            Horarios
          </a>
        </li>
        <li className="h-full flex items-center">
          <a
            href="#"
            className="items-center flex border-b-4 border-b-transparent hover:border-b-[#cdea80] transition-all duration-300"
          >
            Conócenos
          </a>
        </li>
        <li className="h-full flex items-center">
          <a
            href="#"
            className="items-center flex border-b-4 border-b-transparent hover:border-b-[#cdea80] transition-all duration-300"
          >
            Contactos
          </a>
        </li>
      </ul>
    </nav>
  )
}
