import HeroSub from "@/components/shared/HeroSub";
import LuxuryVillas from "@/components/Properties/LuxuryVilla";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cocinas | Ferrary Cucinas",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Cocinas."
                description="Diseño, fabricación e instalación de cocinas a medida."
                badge="Proyectos"
            />
            <LuxuryVillas />
        </>
    );
};

export default page;