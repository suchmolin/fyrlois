import Image from "next/legacy/image"
import DropDownMenu from "../DropDownMenu/page"

export default function NavBar() {
  return (
    <nav className="navBar h-[70px] px-3 sm:px-10 bg-gray-100 flex justify-end sm:justify-between items-center relative">
      <div className="h-full  items-center hidden sm:flex">
        <Image src="/img/1.png" alt="logo" width={150} height={50} />
      </div>
      <div className="w-full sm:w-fit flex justify-between sm:justify-center h-full sm:gap-20">
        <a
          className="h-full text- text-[#000b7a] flex px-3 items-center hover:bg-gray-200"
          href="/anoescolar"
        >
          Año Escolar 2024 - 2025
        </a>
        <DropDownMenu />
      </div>
    </nav>
  )
}
