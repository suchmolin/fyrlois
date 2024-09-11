import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
export default function SocialMenuAE() {
  return (
    <div className="fixed right-0 top-0 h-screen flex flex-col justify-center items-end">
      <a
        href="#"
        className="w-[45px] h-[50px] text-white text-3xl flex items-center justify-center bg-[#000b7a] rounded-l-md hover:w-[47px] transition-all duration-300"
      >
        <FaInstagram />
      </a>
      <a
        href="#"
        className="w-[45px] h-[50px] text-white text-3xl flex items-center justify-center bg-[#f37eb5] rounded-l-md hover:w-[47px] transition-all duration-300"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}
