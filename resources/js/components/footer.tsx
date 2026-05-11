import { Link, usePage } from '@inertiajs/react';

export default  function Footer(){
    const { footerData }: any = usePage().props;

    const { categories, featuredRecipes } = footerData;


    return (
        <>
            <footer className="mc-main border-top mt-5 pt-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
                    <div className="col">
                        <a
                            href="#!"
                            className="d-flex align-items-center link-body-emphasis text-decoration-none site-logo mb-3"
                        >
                            <div className="mc-site-header">
                                <img
                                    src="/img/logo.png"
                                    alt="Logo"
                                    width="70px"
                                />
                                <h3 className="site-title text-center">
                                    Lara
                                    <span className="fw-light">Recipes</span>
                                </h3>
                            </div>
                        </a>
                        <p className="text-body-secondary">
                            Laravel Tutorial by{' '}
                            <a href="https://x.com/mkwsra" target="_blank">
                                Mo Kawsara
                            </a>
                        </p>
                    </div>

                    <div className="col mb-3"></div>

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
                                            <small>
                                                ({category.recipes_count}{' '}
                                                recipes)
                                            </small>
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
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link text-body-secondary p-0"
                                >
                                    Search Categories
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link text-body-secondary p-0"
                                >
                                    Search Recipes
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link text-body-secondary p-0"
                                >
                                    Most Viewed Recipe
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <Link
                                    href={route('faq')}
                                    className="nav-link text-body-secondary p-0"
                                >
                                    FAQs
                                </Link>
                            </li>
                            <li className="nav-item mb-2">
                                <Link
                                    href={route('about')}
                                    className="nav-link text-body-secondary p-0"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className="nav justify-content-center border-bottom border-top mt-2">
                    <li className="nav-item">
                        <Link
                            href={route('terms')}
                            className="nav-link text-body-secondary px-2"
                        >
                            Terms & Conditions
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href={route('privacy-policy')}
                            className="nav-link text-body-secondary px-2"
                        >
                            Privacy Policy
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href={route('photo-usage-policy')}
                            className="nav-link text-body-secondary px-2"
                        >
                            Photo Usage Policy
                        </Link>
                    </li>
                </ul>
                <div className="row">
                    <div className="col-md-6 mc-color-gray col-12">
                        Developed with 🤩️ by{' '}
                        <a
                            rel="nofollow"
                            target="_parent"
                            href="#!"
                            className="mc-external-link"
                        >
                            Put Your Name Here Dear Laravel Developer
                        </a>
                    </div>
                    <div className="col-md-6 mc-copyright col-12">
                        <p className="text-body-secondary">
                            © 2023 Multicaret, Inc
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
