import Image from "next/legacy/image";
import DropDownMenu from "../DropDownMenu/page";

export default function NavBar() {
  return (
    <nav className="navBar h-[70px] px-10 bg-gray-100 flex justify-between items-center relative">
      <Image src="/img/1.png" alt="logo" width={150} height={50} />
      <DropDownMenu />
    </nav>
  );
}
