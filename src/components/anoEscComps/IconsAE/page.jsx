import Image from "next/image"

export default function IconsAE() {
  return (
    <div className="flex gap-1">
      <div className="w-[80px] h-[80px] relative">
        <Image
          src="/img/AE/iconohello.png"
          alt="icon"
          fill
          objectFit="contain"
        />
      </div>
      <div className="w-[80px] h-[80px] relative">
        <Image src="/img/AE/bombillo.png" alt="icon" fill objectFit="contain" />
      </div>
      <div className="w-[80px] h-[80px] relative">
        <Image src="/img/AE/flecha.png" alt="icon" fill objectFit="contain" />
      </div>
    </div>
  )
}
