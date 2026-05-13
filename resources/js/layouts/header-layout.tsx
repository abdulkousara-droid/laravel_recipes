import { Link, usePage } from '@inertiajs/react';

export default function HeaderLayout() {
    const { navLinks, auth }: any = usePage().props;
    console.log(auth)

    return (
        <>
            <header className="mc-header" id="mc-header">
                <div className="mc-header-wrapper">
                    <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="mc-site-header">
                        <Link href={route('home')} className="site-logo mx-auto mb-3">
                            <img src="/img/logo.png" alt="Logo" width="70px" />
                        </Link>
                        <h1 className="site-title text-center">
                            Lara<span className="fw-light">Recipes</span>
                        </h1>

                        <div className="px-2 py-2 mb-2
                         border-top border-bottom bg-light-subtle rounded-3">
                            {auth.user ? (
                                <div className="text-center">
                                    <div className="d-flex align-items-center justify-content-center mb-2">
                                        {/* Optional: Simple User Icon */}
                                        <i className="fas fa-user-circle mc-color-primary me-2"></i>
                                        <span className="text-dark small fw-bold">
                    {auth.user.name}
                </span>
                                    </div>

                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="btn btn-sm btn-outline-danger w-100"
                                        style={{ fontSize: '0.75rem', borderRadius: '20px' }}
                                    >
                                        <i className="fas fa-sign-out-alt me-1"></i> Sign Out
                                    </Link>
                                </div>
                            ) : (
                                <div className="d-grid gap-2">
                                    <Link
                                        href="/login"
                                        className="mc-btn mc-btn-primary mc-btn-small text-center"
                                    >
                                        <i className="fas fa-key me-1"></i> Sign In
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="mc-btn mc-btn-outline mc-btn-small text-center border-secondary text-secondary"
                                    >
                                        <i className="fas fa-user-plus me-1"></i> Sign Up
                                    </Link>
                                </div>
                            )}
                        </div>
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
