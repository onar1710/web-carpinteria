import HeroSub from "@/components/shared/HeroSub";
import OfficeSpace from "@/components/Properties/OfficeSpaces";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Muebles para oficina | Ferrary Cucinas",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Muebles para oficina."
                description="Escritorios, archivadores y mobiliario a medida para oficina y negocio."
                badge="Proyectos"
            />
            <OfficeSpace />
        </>
    );
};

export default page;