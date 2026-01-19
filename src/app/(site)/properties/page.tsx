import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Proyectos | Ferrary Cucinas",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Proyectos y trabajos realizados."
                description="Cocinas, clósets y carpintería a medida. Mira algunos de nuestros proyectos."
                badge="Proyectos"
            />
            <PropertiesListing />
        </>
    );
};

export default page;
