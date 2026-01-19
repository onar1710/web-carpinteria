import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
    title:
        "Blog | Ferrary Cucinas",
};

const Blog = () => {
    return (
        <>
            <HeroSub
                title="Ideas y consejos de carpintería."
                description="Inspiración, materiales y recomendaciones para tu cocina, clóset y muebles a medida."
                badge="Blog"
            />
            <BlogList />
        </>
    );
};

export default Blog;
