import Image from "next/image"
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import { FaSquare } from "react-icons/fa"

export default function CardDescEtapaAE({ icon, color, titulo, img, items }) {
  return (
    <div className="w-full flex">
      <div className="w-2/12 flex justify-center items-center">
        <Image
          className="-rotate-[20deg]"
          src={icon}
          alt="Bombillo"
          width={100}
          height={100}
        />
      </div>
      <div className="w-9/12 bg-[#000b7a] text-white rounded-xl flex justify-between">
        <div className="w-8/12 flex flex-col pl-20 py-7">
          <h3 className={`text-2xl text-[${color}] pl-10 font-[EastmanBold]`}>
            {titulo}
          </h3>
          <ul>
            {items.map((item, i) => (
              <div className="flex gap-4 items-center mt-4">
                <div className={`text-sm text-[${color}] text-center `}>
                  <FaSquare />
                </div>
                <li
                  key={`parrafo${i}`}
                  className="flex items-center justify-start"
                >
                  {item}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-4/12 h-full flex justify-center items-center">
          <div
            className={`relative h-[106%] w-[200px] bg-[${color}] rounded-lg shadow-lg`}
          >
            <Image src={img} alt="niños" fill objectFit="contain" />
            <div className="w-full absolute bottom-5 flex justify-center">
              <a
                href="#"
                className="flex justify-between items-center px-2 bg-[#f0f0f1] py-1 rounded-full text-[#000b7a] hover:scale-105 transition-all duration-300"
              >
                Comenzar
                <span className="bg-[#000b7a] p-1 ml-2 rounded-full">
                  <IoArrowForwardCircleOutline
                    className={`text-3xl text-[${color}]`}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
