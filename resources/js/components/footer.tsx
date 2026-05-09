import {usePage} from "@inertiajs/react";

export default  function Footer(){
    const { footerData }: any = usePage().props;

    const { categories, featuredRecipes } = footerData;


    return(
        <>
            <footer className="mc-main pt-5 mt-5 border-top">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
                    <div className="col">
                        <a href="#!"
                           className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none site-logo">
                            <div className="mc-site-header">
                                <img src="/img/logo.png" alt="Logo" width="70px"/>
                                <h3 className="text-center site-title">
                                    Lara<span className="fw-light">Recipes</span>
                                </h3>
                            </div>
                        </a>
                        <p className="text-body-secondary">
                            Laravel Tutorial by <a href="https://x.com/mkwsra" target="_blank">
                            Mo Kawsara
                        </a>
                        </p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                        <h5>Categories</h5>
                        <ul className="nav flex-column">
                            {categories.map((category: any) => {
                                return (
                                    <li className="nav-item mb-2">
                                        <a
                                            href="#"
                                            className="nav-link text-body-secondary p-0"
                                        >
                                            {category.title.slice(0, 20)}{' '}
                                            <small>({category.recipes_count} recipes)</small>
                                        </a>
                                    </li>
                                );
                            })}

                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Featured Recipes</h5>
                        <ul className="nav flex-column">
                            {featuredRecipes.map((recipe: any) => {

                                return (
                                    <li className="nav-item mb-2">
                                        <a
                                            href={route('recipes.show', recipe)}
                                            className="nav-link text-body-secondary p-0"
                                        >
                                            {recipe.title.slice(0, 20)}
                                        </a>
                                    </li>
                                );
                            })}

                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Useful Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Search
                                Categories</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Search
                                Recipes</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Most Viewed
                                Recipe</a></li>
                            <li className="nav-item mb-2"><a href="faq.html" className="nav-link p-0 text-body-secondary">FAQs</a>
                            </li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>
                </div>
                <ul className="nav justify-content-center border-bottom border-top mt-2">
                    <li className="nav-item"><a href="terms.html" className="nav-link px-2 text-body-secondary">Terms &
                        Conditions</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Privacy Policy</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Photo Usage Policy</a></li>
                </ul>
                <div className="row">
                    <div className="col-md-6 col-12 mc-color-gray">
                        Developed with 🤩️ by <a rel="nofollow" target="_parent" href="#!" className="mc-external-link">Put Your
                        Name
                        Here Dear Laravel Developer</a>
                    </div>
                    <div className="col-md-6 col-12 mc-copyright">
                        <p className="text-body-secondary">© 2023 Multicaret, Inc</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
