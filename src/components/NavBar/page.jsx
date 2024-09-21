import Image from "next/legacy/image";
import DropDownMenu from "../DropDownMenu/page";

export default function NavBar() {
  return (
    <nav className="navBar h-[70px] px-10 bg-gray-100 flex justify-between items-center relative">
      <Image src="/img/1.png" alt="logo" width={150} height={50} />
      <div className="flex gap-20 h-full">
        <a
          className="h-full text- text-[#000b7a] flex px-3 items-center hover:bg-gray-200"
          href="/regresoaclases"
        >
          Año Escolar 2024 - 2025
        </a>
        <DropDownMenu />
      </div>
    </nav>
  );
}
