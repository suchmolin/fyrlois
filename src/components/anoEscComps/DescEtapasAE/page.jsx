import CardDescEtapaAE from "../CardDescEtapaAE/page"

export default function DescEtapasAE() {
  const Desciptions = {
    kids: [
      "Metodoligía divertida, pensada para su etapa de aprendizaje.",
      "Aprovecha la plasticidad de su cerebro para aprender el idioma",
      "Amplía su conocimiento del mundo, cultura y colerancia.",
      "Logra una pronunciación más precisa del inglésa temprana edad.",
    ],
    elementary: [
      "Mejora su rendimiento académico del colegio.",
      "Desarrolla su capacidad para adaptarse a nuevos entornos y situaciones",
      "Potencia sus habilidades comunicativas, fomenta su comprensión y empatia hacia diferentes culturas.",
      "Le brinda acceso a recursos educativos globales.",
    ],
    highSchool: [
      "Metodología práctica y estimulante, especial para que se mantenga motivado hasta dominar el inglés.",
      "Temas pensados para su edad e intereses",
      "Preparación para pruebas académicas: TOEFL y IELETS.",
      "Potencia sus oportunidades de becas y de estudios en el extranjero.",
    ],
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#f0f0f1] py-10 bg-[url('/img/AE/school2.png')] bg-contain bg-no-repeat bg-right">
      <div className="w-10/12 flex flex-col gap-10">
        <CardDescEtapaAE
          icon="/img/AE/bombillo.png"
          color="#cdea80"
          titulo="Kids (3 a 5 años)"
          img="/img/AE/verde.png"
          items={Desciptions.kids}
        />
        <CardDescEtapaAE
          icon="/img/AE/estrella.png"
          color="#f37eb5"
          titulo="Elementary (6 a 11 años)"
          img="/img/AE/azul.png"
          items={Desciptions.elementary}
        />
        <CardDescEtapaAE
          icon="/img/AE/iconohello.png"
          color="#fbd874"
          titulo="High School (12 a 16 años)"
          img="/img/AE/rosada.png"
          items={Desciptions.highSchool}
        />
      </div>
    </div>
  )
}
