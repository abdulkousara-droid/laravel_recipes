import { Link } from '@inertiajs/react';

export default function HeaderLayout() {
    return (
        <>
            <header className="mc-header" id="mc-header">
                <div className="mc-header-wrapper">
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="mc-site-header">
                        <a href="index.html" className="site-logo mx-auto mb-3">
                            <img src="img/logo.png" alt="Logo" width="70px" />
                        </a>
                        <h1 className="site-title text-center">
                            Lara<span className="fw-light">Recipes</span>
                        </h1>
                    </div>
                    <nav className="mc-nav" id="mc-nav">
                        <ul>
                            <li className="mc-nav-item active">
                                <a href="index.html" className="mc-nav-link">
                                    <i className="fas fa-carrot"></i>
                                    Home
                                </a>
                            </li>
                            <li className="mc-nav-item">
                                <Link
                                    href={route('categories.index')}
                                    className="mc-nav-link"
                                >
                                    <i className="fas fa-cubes-stacked"></i>
                                    Categories
                                </Link>
                            </li>
                            <li className="mc-nav-item">
                                <a
                                    href="single-category.html"
                                    className="mc-nav-link"
                                >
                                    <i className="fas fa-cubes-stacked"></i>
                                    Single Category
                                </a>
                            </li>
                            <li className="mc-nav-item">
                                <a
                                    href="single-recipe.html"
                                    className="mc-nav-link"
                                >
                                    <i className="fas fa-bowl-food"></i>
                                    Single Recipe
                                </a>
                            </li>
                            <li className="mc-nav-item">
                                <a href="about.html" className="mc-nav-link">
                                    <i className="fas fa-lemon"></i>
                                    About Us
                                </a>
                            </li>
                            <li className="mc-nav-item">
                                <a href="contact.html" className="mc-nav-link">
                                    <i className="fas fa-utensils"></i>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="mc-mb-65">
                        <a
                            href="https://x.com/mkwsra"
                            className="mc-social-link"
                        >
                            <i className="fab fa-x-twitter mc-social-icon"></i>
                        </a>
                        <a
                            href="https://linkedin.com/in/mkwsra"
                            className="mc-social-link"
                        >
                            <i className="fab fa-linkedin-in mc-social-icon"></i>
                        </a>
                        <a
                            rel="nofollow"
                            href="https://fb.com/mkwsra"
                            className="mc-social-link"
                        >
                            <i className="fab fa-facebook-f mc-social-icon"></i>
                        </a>
                        <a
                            href="https://instagram.com/multicaret"
                            className="mc-social-link"
                        >
                            <i className="fab fa-instagram mc-social-icon"></i>
                        </a>
                    </div>
                    <p className="pr-5 text-white">
                        Lara Recipes a demo of a Laravel tutorial created by
                        <a href="https://mkwsra.com" className="text-dark">
                            Mo Kawsara
                        </a>
                        using the Xtra Blog html5 theme as a foundation, this
                        theme got tweaked for the purposes of this tutorial.
                    </p>
                    <p className="mc-mb-80 text-white">
                        If you liked this tutorial, consider helping me out by
                        sharing this video series with others and perhaps by
                        liking my{' '}
                        <a
                            href="https://www.youtube.com/@multi-caret"
                            target="_blank"
                            className="text-dark"
                        >
                            YouTube videos
                        </a>
                    </p>
                </div>
            </header>
        </>
    );
}
