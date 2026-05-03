import { Head } from '@inertiajs/react'; // Use this for page titles/meta
import Carousel from "@/components/carousel";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeaderLayout from "@/layouts/header-layout";

export default function Home({ carouselRecipes, latestRecipes, categories }: any) {

    return (
        <>
            <Head>
                <title>Homepage Recipes</title>
                <meta name="description" content="Recipe Homepage" />
            </Head>

            <HeaderLayout />

            <div className="mc-main-full">
                <Carousel carouselData={carouselRecipes} />
            </div>

            <div className="container-fluid">
                <main className="mc-main">
                    <Contact contactData={latestRecipes} categories={categories} />
                </main>
                <Footer />
            </div>
        </>
    );
}
