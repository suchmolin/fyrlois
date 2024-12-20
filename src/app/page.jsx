"use client"

import Footer from "@/components/Footer/page"
import MainSection from "@/components/MainSection/page"
import NavBar from "@/components/NavBar/page"

export default function Home() {
  return (
    <main className="w-full font-[lato] pb-[50px]">
      <NavBar />
      <MainSection />
      <Footer />
    </main>
  )
}
