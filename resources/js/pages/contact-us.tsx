import HeaderLayout from '@/layouts/header-layout';

export default function ContactUs() {
    return (
        <>
          <HeaderLayout/>

            <main className="mc-main">
                <div className="row mc-row mc-mb-45">
                    <div className="col-8 offset-2 mb-5">
                        <img src="/img/contact-us-cover.jpg" alt="Contact us cover" className="img-fluid rounded-4"/>
                    </div>
                </div>
                <div className="row mc-row mc-mb-120">
                    <div className="col-12">
                        <h2 className="mc-post-title mc-mb-60">Contact Us</h2>
                    </div>
                    <div className="col-lg-7 mc-contact-left">
                        <form method="POST" action="" className="mb-5 ml-auto mr-0 mc-contact-form">
                            <div className="form-group row mb-4">
                                <label htmlFor="name" className="col-sm-3 col-form-label text-right mc-color-primary">
                                    Name
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="col-sm-9">
                                    <input className="form-control mr-0 ml-auto" name="name" id="name" type="text" required/>
                                </div>
                            </div>
                            <div className="form-group row mb-4">
                                <label htmlFor="email" className="col-sm-3 col-form-label text-right mc-color-primary">
                                    Email
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="col-sm-9">
                                    <input className="form-control mr-0 ml-auto" name="email" id="email" type="email" required/>
                                </div>
                            </div>
                            <div className="form-group row mb-4">
                                <label htmlFor="subject" className="col-sm-3 col-form-label text-right mc-color-primary">
                                    Subject
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="col-sm-9">
                                    <input className="form-control mr-0 ml-auto" name="subject" id="subject" type="text" required/>
                                </div>
                            </div>
                            <div className="form-group row mb-5">
                                <label htmlFor="message" className="col-sm-3 col-form-label text-right mc-color-primary">
                                    Message
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="col-sm-9">
                            <textarea className="form-control mr-0 ml-auto" name="message" id="message" rows="8"
                                      required></textarea>
                                </div>
                            </div>
                            <div className="form-group row text-right">
                                <div className="col-12">
                                    <button className="mc-btn mc-btn-primary mc-btn-small" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-5 mc-contact-right">
                        <address className="mb-4 mc-color-gray">
                            1 Austin Terrace, Toronto,
                            ON M5R 1X8, Canada
                        </address>
                        <span className="d-block">
                        Tel:
                        <a href="tel:012-321-4567" className="mc-color-gray">012-321-4567</a>
                    </span>
                        <span className="mb-4 d-block">
                        Email:
                        <a href="mailto:info@company.com" className="mc-color-gray">info@company.com</a>
                    </span>
                        <p className="mb-5 mc-line-height-short">
                            Lara Recipes a demo of a Laravel tutorial created by
                            <a href="https://mkwsra.com" className="text-dark">Mo Kawsara</a>
                            using the Xtra Blog html5 theme as a
                            foundation, this theme got tweaked for the purposes of this tutorial.
                        </p>
                        <p className="mb-5 mc-line-height-short">
                            If you liked this tutorial, consider helping me out by sharing this video series
                            with others and perhaps by
                            liking my <a href="https://www.youtube.com/@multi-caret" target="_blank" className="text-dark">YouTube
                            videos</a>
                        </p>

                        <div className="mc-mb-65">
                            <a href="https://x.com/mkwsra" className="mc-social-link">
                                <i className="fab fa-x-twitter mc-social-icon"></i>
                            </a>
                            <a href="https://linkedin.com/in/mkwsra" className="mc-social-link">
                                <i className="fab fa-linkedin-in mc-social-icon"></i>
                            </a>
                            <a rel="nofollow" href="https://fb.com/mkwsra" className="mc-social-link">
                                <i className="fab fa-facebook-f mc-social-icon"></i>
                            </a>
                            <a href="https://instagram.com/multicaret" className="mc-social-link">
                                <i className="fab fa-instagram mc-social-icon"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="gmap_canvas">
                            <iframe width="100%" height="477" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Mississauga,On,Canada&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
