import { Link, usePage } from '@inertiajs/react';

export default function HeaderLayout() {
    const { navLinks }: any = usePage().props;

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
                            <img src="/img/logo.png" alt="Logo" width="70px" />
                        </a>
                        <h1 className="site-title text-center">
                            Lara<span className="fw-light">Recipes</span>
                        </h1>
                    </div>
                    <nav className="mc-nav" id="mc-nav">
                        <ul>
                            {navLinks.map((link: any) => {
                                return (
                                    <li
                                        className={`mc-nav-item ${link.cssClasses}`}
                                    >
                                        <Link
                                            href={route(`${link.routeName}`)}
                                            className="mc-nav-link"
                                        >
                                            <i
                                                className={`fas fa-${link.icon}`}
                                            ></i>
                                            {link.title}
                                        </Link>
                                    </li>
                                );
                            })}
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
