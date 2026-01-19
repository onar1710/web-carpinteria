import HeroSub from "@/components/shared/HeroSub";
import ResidentialList from "@/components/Properties/Residential";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Clósets | Ferrary Cucinas",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Clósets."
                description="Clósets a medida y soluciones de almacenamiento para tu hogar."
                badge="Proyectos"
            />
            <ResidentialList />
        </>
    );
};

export default page;