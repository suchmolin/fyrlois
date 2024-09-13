"use client";
import Image from "next/legacy/image";
import "./page.css";

import FormContactanos from "../FormContactanos/page";
import { Slide } from "react-awesome-reveal";
export default function Contactanos() {
  return (
    <Slide triggerOnce direction="up">
      <div className="top2 font-[lato] h-[50px]"></div>
      <div className="bottom2 font-[lato] w-full">
        <div className="w-full flex flex-row-reverse justify-center pt-20">
          <div className="w-3/12 flex items-center">
            <FormContactanos />
          </div>
          <div className="flex flex-col mt-5 items-end px-10">
            <Image
              className="-mt-2"
              src="/img/1.png"
              alt="baner1"
              width={100}
              height={100}
            />
            <p className="text-sm">
              Comienza a hacer realidad tu proyecto de vida.
            </p>

            <p className="text-sm">Envianos tus datos y te contactaremos.</p>
            <Image
              className="mt-2"
              src="/img/5.png"
              alt="baner1"
              width={350}
              height={100}
            />
          </div>
          {/*
          <div className="">
            <Image src="/img/4.png" alt="baner1" width={350} height={150} />
          </div>
              */}
        </div>
      </div>
    </Slide>
  );
}
