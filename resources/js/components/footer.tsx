export default  function Footer(){
    return(
        <>
            <footer className="mc-main pt-5 mt-5 border-top">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">
                    <div className="col">
                        <a href="#!"
                           className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none site-logo">
                            <div className="mc-site-header">
                                <img src="img/logo.png" alt="Logo" width="70px"/>
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
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Category 1 <small>(12 recipes)</small>
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Category 2 <small>(7 recipes)</small>
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Category 3 <small>(6 recipes)</small>
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Category 4 <small>(6 recipes)</small>
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Category 5 <small>(4 recipes)</small>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Featured Recipes</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Recipe title 1
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Recipe title 2
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Recipe title 3
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Recipe title 4
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Recipe title 5
                                </a>
                            </li>
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
