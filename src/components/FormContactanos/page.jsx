"use client";
import { Button, FloatingLabel } from "flowbite-react";

export default function FormContactanos() {
  return (
    <div className="w-11/12">
      <FloatingLabel
        label="Nombre"
        variant="standard"
        className="mb-4 focus:border-[#000b7a] focus:text-[#000b7a]"
      ></FloatingLabel>
      <FloatingLabel
        label="Apellido"
        variant="standard"
        className="mb-4 focus:border-[#000b7a] focus:text-[#000b7a]"
      ></FloatingLabel>
      <FloatingLabel
        label="Correo Electrónico"
        variant="standard"
        className="mb-4 focus:border-[#000b7a] focus:text-[#000b7a]"
      ></FloatingLabel>
      <FloatingLabel
        label="Telefono"
        variant="standard"
        className="mb-4 focus:border-[#000b7a] focus:text-[#000b7a]"
      ></FloatingLabel>

      <Button className="w-full bg-[#000b7a] text-white focus:border-none focus:ring-[#000b7a] focus:ring-1 enabled:hover:bg-[#000a7ad5] ring-1 ring-[#000b7a]">
        Enviar
      </Button>
    </div>
  );
}
