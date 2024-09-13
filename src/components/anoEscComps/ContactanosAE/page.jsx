import FormContactoAE from "../FormContactoAE/page"
import IconsAE from "../IconsAE/page"

export default function ContactanosAE() {
  return (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="w-11/12 flex justify-center items-center">
        <div className="w-4/12 flex flex-col -rotate-3">
          <div className="w-full flex justify-center">
            <IconsAE />
          </div>
          <h2 className="text-8xl leading-[80px] font-[EastmanBold] text-gray-900 z-10">
            Año <br /> Escolar
          </h2>
          <div className="w-full flex justify-center z-0">
            <div className="py-2 px-3 bg-[#cdea80] font-[EastmanBold] text-white text-6xl mt-1 -rotate-3 rounded-lg -ml-32">
              <p>2024</p>
              <p>2025</p>
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <FormContactoAE />
        </div>
      </div>
    </div>
  )
}
