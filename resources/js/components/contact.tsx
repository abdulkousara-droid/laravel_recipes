export default function Contact() {
    return(
        <>

            {/*    <!-- Search form --> */}
            <div className="row">
                <div className="col-12">
                    <form method="GET" className="form-inline mc-mb-20 mc-search-form">
                        <input className="form-control mc-search-input w-100" name="query" type="text" placeholder="Search..."
                               aria-label="Search"/>
                        <button className="mc-search-button" type="submit">
                            <i className="fas fa-search mc-search-icon" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
            </div>


            <div className="container px-4 py-5">
                <h2 className="pb-2 mb-2 border-bottom d-flex justify-content-between">
                    LATEST RECIPES
                </h2>
                <div className="row">
                    <article className="col-12 col-md-6 col-lg-3">
                        <a href="single-recipe.html" className="effect-lily mc-post-link">
                            <div className="mc-post-link-inner">
                                <img src="img/5.jpeg" alt="Image" className="img-fluid"/>
                            </div>
                            <h2 className="mc-pt-30 mc-post-title">Macaroni & cheese</h2>
                        </a>
                        <div className="d-flex justify-content-between">
                            <span className="mc-color-primary">Side Dish</span>
                        </div>
                    </article>

                    <article className="col-12 col-md-6 col-lg-3">
                        <a href="single-recipe.html" className="effect-lily mc-post-link">
                            <div className="mc-post-link-inner">
                                <img src="img/3.jpeg" alt="Image" className="img-fluid"/>
                            </div>
                            <h2 className="mc-pt-30 mc-post-title">Chocolate Chip Cookies</h2>
                        </a>
                        <div className="d-flex justify-content-between">
                            <span className="mc-color-primary">Must Have</span>
                        </div>
                    </article>


                </div>
            </div>

            <div className="container px-4 py-5">
                <h2 className="pb-2 mb-2 border-bottom d-flex justify-content-between">
                    Quick & Easy
                    <a href="#!" className="btn btn-outline-dark">Browse All</a>
                </h2>
                <div className="row">
                    <article className="col-12 col-md-6 col-lg-3">
                        <a href="single-recipe.html" className="effect-lily mc-post-link">
                            <div className="mc-post-link-inner">
                                <img src="img/1.jpeg" alt="Peanut Butter and Jelly" className="img-fluid"/>
                            </div>
                            <span className="position-absolute mc-new-badge">
                        <i className="fas fa-certificate"></i>
                        Featured
                    </span>
                        </a>
                        <a href="single-recipe.html">
                            <h2 className="mc-pt-20 mc-post-title">Peanut Butter and Jelly</h2>
                        </a>
                    </article>

                    <article className="col-12 col-md-6 col-lg-3">
                        <a href="single-recipe.html" className="effect-lily mc-post-link">
                            <div className="mc-post-link-inner">
                                <img src="img/2.jpeg" alt="Image" className="img-fluid"/>
                            </div>
                            <h2 className="mc-pt-30 mc-post-title">Buffalo Wings</h2>
                        </a>
                    </article>

                    <article className="col-12 col-md-6 col-lg-3">
                        <a href="single-recipe.html" className="effect-lily mc-post-link">
                            <div className="mc-post-link-inner">
                                <img src="img/3.jpeg" alt="Image" className="img-fluid"/>
                            </div>
                            <h2 className="mc-pt-30 mc-post-title">Chocolate Chip Cookies</h2>
                        </a>
                    </article>

                    <article className="col-12 col-md-6 col-lg-3">
                        <a href="single-recipe.html" className="effect-lily mc-post-link">
                            <div className="mc-post-link-inner">
                                <img src="img/5.jpeg" alt="Image" className="img-fluid"/>
                            </div>
                            <h2 className="mc-pt-30 mc-post-title">Macaroni & cheese</h2>
                        </a>
                    </article>

                </div>
            </div>

            <div className="container px-4 py-5">
                <h2 className="pb-2 mb-2 border-bottom d-flex justify-content-between">
                    Middle Eastern
                    <a href="#!" className="btn btn-outline-dark">Browse All</a>
                </h2>
                <div className="row">
                    <article className="col-12 col-md-6 col-lg-3">
                        <a href="single-recipe.html" className="effect-lily mc-post-link mc-pt-20">
                            <div className="mc-post-link-inner">
                                <img src="img/6.jpeg" alt="Image" className="img-fluid"/>
                            </div>
                            <h2 className="mc-pt-30 mc-post-title">Chicken Shawarma (Middle Eastern)</h2>
                        </a>
                    </article>

                    <article className="col-12 col-md-6 col-lg-3">
                        <a href="single-recipe.html" className="effect-lily mc-post-link mc-pt-20">
                            <div className="mc-post-link-inner">
                                <img src="img/4.jpeg" alt="Image" className="img-fluid"/>
                            </div>
                            <h2 className="mc-pt-30 mc-post-title">Delicious Falafel Recipe (Fried or Baked)</h2>
                        </a>
                    </article>

                </div>

                <div className="row mt-5">
                    <a href="#!" className="btn w-100 btn-outline-dark btn-xs px-4">View All Categories</a>
                </div>
            </div>


            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-6 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">DID YOU MAKE THIS RECIPE?</h1>
                        <p className="lead">I love hearing how you went with my recipes! Tag me on Instagram at
                            <a href="https://instagram.com/multicaret" target="_blank">@multicaret</a>.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <a href="https://instagram.com/multicaret" target="_blank"
                               className="btn btn-outline-secondary px-4">
                                <i className="fab fa-instagram"></i>
                                Instagram
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src="img/instagram-cta.avif" alt="" width="520"/>
                    </div>
                </div>
            </div>


            {/*   <!--<footer className="row">
            <hr className="col-12">
            <div className="col-md-6 col-12 mc-color-gray">
                Developed with 🤩️ by <a rel="nofollow" target="_parent" href="#!" className="mc-external-link">Your Name
                Here Dear Laravel Developer</a>
            </div>
            <div className="col-md-6 col-12 mc-color-gray mc-copyright">
                Copyleft 2023 Lara Recipes Ltd.
            </div>
        </footer>--> */}
        </>
    )
}
