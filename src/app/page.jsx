"use client"
import Contactanos from "@/components/Contactanos/page"
import Footer from "@/components/Footer/page"
import MainSection from "@/components/MainSection/page"
import NavBar from "@/components/NavBar/page"
import SecondSection from "@/components/SecondSection/page"
import { useEffect } from "react"
export default function Home() {
  return (
    <main className="w-full font-[lato] pb-[50px]">
      <NavBar />
      <MainSection />
      {/*
     <SecondSection />
      <Contactanos />
      */}
      <Footer />
    </main>
  )
}
