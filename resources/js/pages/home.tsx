import Carousel from "@/components/carousel";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeaderLayout from "@/layouts/header-layout";

export default function Home({ carouselRecipes, latestRecipes }: any) {
    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Homepage Recipes</title>
                <link rel="shortcut icon" href="/img/logo.png" />
                {/* <!-- Google Fonts --> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:ital,wght@0,200;0,400;0,700;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                {/*   <!-- End of Google Fonts --> */}
                <link href="css/bootstrap.min.css" rel="stylesheet" />
                <link href="fontawesome/css/all.min.css" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
            </head>
            <body>
                <HeaderLayout />
                <div className="mc-main-full">
                    <Carousel carouselData={carouselRecipes} />
                </div>

                <div className="container-fluid">
                    <main className="mc-main">
                        <Contact contactDate={latestRecipes} />
                    </main>

                    <Footer />
                </div>
                <script src="js/jquery.min.js"></script>
                <script src="js/bootstrap.bundle.min.js"></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
                    integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
                    crossOrigin="anonymous"
                    async
                ></script>

                <script src="js/scripts.js"></script>
            </body>
        </>
    );
}
