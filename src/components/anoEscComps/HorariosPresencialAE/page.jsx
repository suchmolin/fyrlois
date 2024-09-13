export default function HorariosPresencialAE() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex gap-4 justify-center">
        <div className="w-6/12 gap-2">
          <p className="text-[#000b7a] text-2xl font-[EastmanBold] py-1">
            Lunes y Miércoles
          </p>
          <div className="py-10 px-10 flex flex-col justify-center rounded-lg bg-[#cdea80] min-h-[188px]">
            <p className="font-[EastmanBold] text-3xl text-gray-700">
              2:00 - 3:20 pm
            </p>
            <p className="font-[EastmanBold] text-3xl text-gray-700">
              3:30 - 4:50 pm
            </p>
            <p className="font-[EastmanBold] text-3xl text-gray-700">
              5:00 - 6:20 pm
            </p>
          </div>
        </div>
        <div className="w-6/12 gap-2">
          <p className="text-[#000b7a] text-2xl font-[EastmanBold] py-1">
            Martes y Jueves
          </p>
          <div className="py-10 px-10 flex flex-col justify-center rounded-lg bg-[#cdea80] min-h-[188px]">
            <p className="font-[EastmanBold] text-3xl text-gray-700">
              2:00 - 3:20 pm
            </p>
            <p className="font-[EastmanBold] text-3xl text-gray-700">
              3:30 - 4:50 pm
            </p>
            <p className="font-[EastmanBold] text-3xl text-gray-700">
              5:00 - 6:20 pm
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4 justify-center mt-10">
        <div className="w-6/12 gap-2">
          <p className="text-[#000b7a] text-2xl font-[EastmanBold] py-1">
            Viernes
          </p>
          <div className="py-10 px-10 flex flex-col justify-center rounded-lg bg-[#cdea80] min-h-[188px]">
            <p className="font-[EastmanBold] text-3xl text-gray-700">
              2:00 - 5:00 pm
            </p>
            <p className="font-[EastmanBold] text-3xl text-gray-700">
              5:00 - 8:00 pm
            </p>
            <p className="font-[EastmanBold] text-xl text-gray-700">
              {"Exclusivo para High School)"}
            </p>
          </div>
        </div>
        <div className="w-6/12 gap-2">
          <p className="text-[#000b7a] text-2xl font-[EastmanBold] py-1">
            Sábados
          </p>
          <div className="py-10 px-10 flex flex-col justify-center rounded-lg bg-[#cdea80] min-h-[188px]">
            <p className="font-[EastmanBold] text-3xl text-gray-700">
              9:00 - 12:00 pm
            </p>
            <p className="font-[EastmanBold] text-3xl text-gray-700">
              2:00 - 5:00 pm
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
