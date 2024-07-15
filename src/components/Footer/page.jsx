import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="h-[50px] fixed bottom-0 w-full bg-[#f3f4f6] flex justify-between">
      <div>
        <ul className="flex h-full gap-2 text-[#000b7a] items-center px-10">
          <a href="https://fyrlois.us">
            <li>USA</li>
          </a>
          <li>-</li>
          <a href="https://fyrlois.com.ve">
            <li>Venezuela</li>
          </a>
        </ul>
      </div>
      <div className="flex gap-4 items-center px-5 text-2xl text-[#000b7a]">
        <FaInstagram className="cursor-pointer transform hover:-scale-x-100 hover:text-[#f27a1d] transition-all duration-500" />
        <FaFacebookSquare className="cursor-pointer transform hover:-scale-x-100 hover:text-[#3b5998] transition-all duration-500" />
        <FaWhatsapp className="cursor-pointer transform hover:-scale-x-100 hover:text-[#128c7e] transition-all duration-500" />
      </div>
    </div>
  );
}
