import FormContactoAE from "../FormContactoAE/page"
import IconsAE from "../IconsAE/page"

export default function ContactanosAE() {
  return (
    <div
      id="contacto"
      className="w-full py-5 md:py-20 flex items-center justify-start lg:justify-center"
    >
      <div className="w-full lg:w-11/12 flex flex-col md:flex-row justify-center md:items-center px-5 lg:px-0">
        <div className="w-4/12 lg:w-4/12 flex flex-col -rotate-3 pb-5 md:pb-0 ml-10 xs:ml-20 sm:ml-0">
          <div className="w-full flex justify-center">
            <IconsAE />
          </div>
          <h2 className="text-5xl xs:text-6xl lg:text-8xl leading-[50px] lg:leading-[80px] font-[EastmanBold] text-gray-900 z-10">
            Año <br /> Escolar
          </h2>
          <div className="w-full flex justify-center z-0">
            <div className="py-2 px-3 bg-[#fbd874] font-[EastmanBold] text-white text-5xl lg:text-6xl mt-1 -rotate-3 rounded-lg lg:-ml-32">
              <p>2024</p>
              <p>2025</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-8/12 lg:w-6/12">
          <FormContactoAE />
        </div>
      </div>
    </div>
  )
}
