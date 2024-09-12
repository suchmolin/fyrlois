import DescEtapasAE from "@/components/anoEscComps/DescEtapasAE/page"
import EtapasAE from "@/components/anoEscComps/EtapasAE/page"
import HeaderAE from "@/components/anoEscComps/HeaderAE/page"
import AdaptadoAE from "@/components/anoEscComps/AdaptadoAE/page"
import SocialMenuAE from "@/components/anoEscComps/SocialMenuAE/page"
import HorariosAE from "@/components/anoEscComps/HorariosAE/page"

export default function AnoEscolarPage() {
  return (
    <main className="font-[Eastman] ">
      <HeaderAE />
      <EtapasAE />
      <DescEtapasAE />
      <AdaptadoAE />
      <HorariosAE />
      <SocialMenuAE />
    </main>
  )
}
