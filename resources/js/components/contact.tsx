import RecipeCardSm from '@/components/recipe-card-sm';

export default function Contact({ contactData, categories }: any) {
     
    return (
        <>
            {/*    <!-- Search form --> */}
            <div className="row">
                <div className="col-12">
                    <form
                        method="GET"
                        className="form-inline mc-mb-20 mc-search-form"
                    >
                        <input
                            className="form-control mc-search-input w-100"
                            name="query"
                            type="text"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <button className="mc-search-button" type="submit">
                            <i
                                className="fas fa-search mc-search-icon"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className="container px-4 py-5">
                <h2 className="border-bottom d-flex justify-content-between mb-2 pb-2">
                    LATEST RECIPES
                </h2>
                <div className="row">
                    {contactData.map((latestRecipe: any) => {

                        const imgNumber = (latestRecipe.id % 6) + 1;

                        return (
                            <RecipeCardSm
                                imgNumber={imgNumber}
                                title={latestRecipe.title}
                            />
                        );
                    })}
                    <article className="col-md-6 col-lg-3 col-12">
                        <a
                            href="single-recipe.html"
                            className="effect-lily mc-post-link"
                        >
                            <div className="mc-post-link-inner">
                                <img
                                    src="img/5.jpeg"
                                    alt="Image"
                                    className="img-fluid"
                                />
                            </div>
                            <h2 className="mc-pt-30 mc-post-title">
                                Macaroni & cheese
                            </h2>
                        </a>
                        <div className="d-flex justify-content-between">
                            <span className="mc-color-primary">Side Dish</span>
                        </div>
                    </article>

                    <article className="col-md-6 col-lg-3 col-12">
                        <a
                            href="single-recipe.html"
                            className="effect-lily mc-post-link"
                        >
                            <div className="mc-post-link-inner">
                                <img
                                    src="img/3.jpeg"
                                    alt="Image"
                                    className="img-fluid"
                                />
                            </div>
                            <h2 className="mc-pt-30 mc-post-title">
                                Chocolate Chip Cookies
                            </h2>
                        </a>
                        <div className="d-flex justify-content-between">
                            <span className="mc-color-primary">Must Have</span>
                        </div>
                    </article>
                </div>
            </div>

            <div className="container px-4 py-5">
                {categories.map((category: any) => {
                    return (
                      <>
                            <h2 className="border-bottom d-flex justify-content-between mb-2 pb-2">
                                {category.title}
                                <a href="#!" className="btn btn-outline-dark">
                                    Browse All
                                </a>
                            </h2>
                            <div className="row">
                                {category.recipes.slice(0, 4).map((recipe: any) => {
                                    const imgNumber = (recipe.id % 6) + 1;
                                    console.log(recipe);
                                    
                                    return (
                                        <RecipeCardSm
                                            featured={recipe.is_featured ? true : false}
                                            imgNumber={imgNumber}
                                            title={recipe.title}
                                        />
                                    );
                                })}
                            </div>
                       </>
                    );
                })}
               
            </div>

            <div className="container my-5">
                <div className="row pe-lg-0 pt-lg-5 align-items-center rounded-3 border p-4 pb-0 shadow-lg">
                    <div className="col-lg-6 p-lg-5 pt-lg-3 p-3">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                            DID YOU MAKE THIS RECIPE?
                        </h1>
                        <p className="lead">
                            I love hearing how you went with my recipes! Tag me
                            on Instagram at
                            <a
                                href="https://instagram.com/multicaret"
                                target="_blank"
                            >
                                @multicaret
                            </a>
                            .
                        </p>
                        <div className="d-grid d-md-flex justify-content-md-start mb-lg-3 mb-4 gap-2">
                            <a
                                href="https://instagram.com/multicaret"
                                target="_blank"
                                className="btn btn-outline-secondary px-4"
                            >
                                <i className="fab fa-instagram"></i>
                                Instagram
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 overflow-hidden p-0 shadow-lg">
                        <img
                            className="rounded-lg-3"
                            src="img/instagram-cta.avif"
                            alt=""
                            width="520"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
