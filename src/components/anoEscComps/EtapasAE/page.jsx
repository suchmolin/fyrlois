import CardEtapaAE from "../CardEtapaAE/page"

export default function EtapasAE() {
  return (
    <div className="w-full flex flex-col items-center justify-center -mt-1 bg-white py-32 bg-[url('/img/AE/curva.png')] bg-contain bg-no-repeat bg-bottom">
      <div className="w-10/12">
        <h2 className="text-4xl text-[#000b7a] font-[EastmanBold] flex flex-col leading-9">
          Acompañamiento <span>académico</span>
        </h2>
        <p className="font-[EastmanBold] text-2xl">
          adaptado a su etapa y competencias de lenguaje
        </p>
        <div className="w-full py-5 flex justify-center gap-10">
          <CardEtapaAE
            fondo="#cdea80"
            titulo="Kids"
            edades="3 a 5 años"
            colorEdades="#cdea80"
            imagen="verde.png"
            tituloSize="5xl"
          />
          <CardEtapaAE
            fondo="#f37eb5"
            titulo="Elementary"
            edades="6 a 11 años."
            colorEdades="#f37eb5"
            imagen="azul.png"
            tituloSize="4xl"
          />
          <CardEtapaAE
            fondo="#fbd874"
            titulo="High School"
            edades="12 a 16 años."
            colorEdades="#cdea80"
            imagen="rosada.png"
            tituloSize="4xl"
          />
        </div>
      </div>
    </div>
  )
}
