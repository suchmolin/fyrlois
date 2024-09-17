import { Textarea, TextInput } from "flowbite-react"

export default function FormContactoAE() {
  const urlodoo =
    "https://docs.google.com/spreadsheets/d/1ixSh1_dZW0x3QjFmLixDGxVrl8qjI5ACECiDefkrgac/edit?usp=sharing"

  const sendGS = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    const response = await fetch(urlodoo, {
      method: POST,
      body: { msg: "odoo es el wordpress del backend" },
    })

    console.log(response)
  }

  return (
    <div className="w-full flex items-center justify-center">
      <form
        onSubmit={(e) => sendGS(e)}
        className="formContactanosAE w-full sm:w-9/12 bg-[#cdea80] rounded-xl py-14 px-7 font-[EastmanBold] flex flex-col gap-3 sm:gap-7 justify-center items-center shadow-xl"
      >
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
        <input type="hidden" value="landingAE" name="origin" />
        <button className="w-fit px-24 mt-3 bg-[#fbd874] text-lg py-2 rounded-xl hover:shadow-xl transition-all duration-500">
          Enviar
        </button>
      </form>
    </div>
  )
}
