import { Textarea, TextInput } from "flowbite-react"

export default function FormContactoAE() {
  return (
    <div className="w-full flex items-center justify-center">
      <form className="formContactanosAE w-9/12 bg-[#cdea80] rounded-xl py-14 px-7 font-[EastmanBold] flex flex-col gap-7 justify-center items-center shadow-xl">
        <TextInput
          className="w-full"
          required
          id="fullname"
          name="fullname"
          type="text"
          sizing="lg"
          placeholder="Nombre y Apellido"
        />
        <div className="flex gap-2">
          <TextInput
            required
            id="city"
            name="city"
            type="text"
            sizing="lg"
            placeholder="Ciudad"
          />
          <TextInput
            required
            id="phone"
            name="phone"
            type="number"
            sizing="lg"
            placeholder="Teléfono"
          />
        </div>
        <TextInput
          className="w-full"
          required
          id="email"
          name="email"
          type="email"
          sizing="lg"
          placeholder="Correo Electrónico"
        />
        <Textarea
          id="comment"
          name="comment"
          placeholder="Mensaje"
          required
          rows={4}
        />
        <button className="w-fit px-24 mt-3 bg-[#fbd874] text-lg py-2 rounded-xl hover:shadow-xl transition-all duration-500">
          Enviar
        </button>
      </form>
    </div>
  )
}
