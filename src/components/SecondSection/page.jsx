"use client";
import Image from "next/legacy/image";
import "./page.css";
import { Slide } from "react-awesome-reveal";
export default function SecondSection() {
  return (
    <Slide triggerOnce direction="up">
      <div className="top h-[150px] font-[lato]">
        <h3 className="text-5xl pt-10 text-center text-[#000b7a]">
          ¿Quienes Somos?
        </h3>
      </div>
      <div className="w-full flex justify-center flex-row-reverse">
        <div className="w-3/12 flex justify-end items-center">
          <p className="">
            <span className="float-left pr-3">
              <Image src="/img/1.png" alt="baner1" width={60} height={50} />
            </span>
            Es una empresa dedicada a Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita quisquam soluta doloribus impedit tempore
            temporibus eius id sapiente adipisci aperiam quasi, ducimus placeat
            dolorum reprehenderit ex, at ut distinctio corporis quia inventore.
            Vero illo harum, magni aliquid voluptate obcaecati numquam ex
            commodi cumque nesciunt tempora fuga voluptatibus cupiditate
            molestias eos!
          </p>
        </div>
        <div className="flex">
          <Image src="/img/3.png" alt="baner1" width={600} height={150} />
        </div>
      </div>
    </Slide>
  );
}
