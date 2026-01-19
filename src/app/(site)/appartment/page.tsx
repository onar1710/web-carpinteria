import HeroSub from "@/components/shared/HeroSub";
import Appartment from "@/components/Properties/Appartment";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Carpintería | Ferrary Cucinas",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Carpintería general."
                description="Puertas, muebles, centros de entretenimiento y más trabajos en madera."
                badge="Proyectos"
            />
            <Appartment />
        </>
    );
};

export default page;