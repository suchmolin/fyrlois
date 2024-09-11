import Image from "next/image"

export default function NavBarAE() {
  return (
    <nav className="w-full h-[110px] absolute flex justify-center z-10">
      <a href="#">
        <Image
          className="absolute left-[200px] top-[15px] hover:scale-105 transition-all duration-300"
          src="/img/1.png"
          alt="Fyr Lois"
          width={190}
          height={80}
        />
      </a>
      <ul className="flex h-full gap-10 font-[EastmanBold] text-[#000b7a] text-xl ">
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
