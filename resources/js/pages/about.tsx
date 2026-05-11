import HeaderLayout from '@/layouts/header-layout';

export default function About({title}: any) {
    return (
        <>
            <HeaderLayout />

            <main className="mc-main">
                <title>{title}</title>
                <div className="row mc-row">
                    <div className="col-12">
                        <form method="GET" className="form-inline mc-mb-80 mc-search-form">
                            <input className="form-control mc-search-input" name="query" type="text" placeholder="Search..."
                                   aria-label="Search"/>
                                <button className="mc-search-button" type="submit">
                                    <i className="fas fa-search mc-search-icon" aria-hidden="true"></i>
                                </button>
                        </form>
                    </div>
                </div>
                <div className="row mc-row mc-mb-45">
                    <div className="col-12">
                        <hr className="mc-hr-primary mc-mb-55"/>
                            <img src="img/about-01.jpg" alt="Image" className="img-fluid"/>
                    </div>
                </div>
                <div className="row mc-row mc-mb-40">
                    <div className="col-12">
                        <div className="mb-4">
                            <h2 className="pt-2 mc-mb-40 mc-color-primary mc-post-title">About Lara Recipes</h2>
                            <p>
                                Hey there, it's Mo Kawsara, I just warned to create this tutorial, so I can show you
                                how nice and easy it's to get started with
                                <a rel="external" href="https://laravel.com/" target="_blank">Laravel Framework</a>
                                and how you can build great things using it, I hope I taught you a thing or two, and I would
                                really appreciate
                                hearing from what you can build based on this simple humble tutorial.
                            </p>
                            <p>
                                Proin et arcu ligula. Praesent quis erat eu est solliditudin tristique ut in arcu. Donec
                                bibendum ex id ligula semper dictum.
                                Proin malesuada luctus auctor. Suspendisse ullamcorper, mi vel molestie ornare, arcu magna
                                euismod ipsum, in
                                malesuada nulla magna ut enim. Morbi lacinia magna sed sapien auctor, vitae luctus nunc cursus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mc-row mc-mb-120">
                    <div className="col-lg-4 mc-about-col">
                        <div className="mc-bg-gray mc-about-pad">
                            <div className="text-center mc-mt-40 mc-mb-60">
                                <i className="fas fa-bezier-curve fa-4x mc-color-primary"></i>
                            </div>
                            <h2 className="mb-3 mc-color-primary mc-post-title">Background</h2>
                            <p className="mb-0 mc-line-height-short">
                                Phasellus pulvinar nisl ornare leo porttitor, et vestibulum lorem semper.
                                Duis risus ex, molestie sit amet magna in,
                                pharetra pellentesque est. Curabitur elit metus.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 mc-about-col">
                        <div className="mc-bg-gray mc-about-pad">
                            <div className="text-center mc-mt-40 mc-mb-60">
                                <i className="fas fa-users-cog fa-4x mc-color-primary"></i>
                            </div>
                            <h2 className="mb-3 mc-color-primary mc-post-title">Teamwork</h2>
                            <p className="mb-0 mc-line-height-short">
                                Suspendisse ullamcorper, mi vel molestie ornare, arcu magna euismod ipsum, in malesuada nulla
                                magna ut enim.
                                Morbi lacinia magna sed auctor, vitae nunc cursus.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 mc-about-col">
                        <div className="mc-bg-gray mc-about-pad">
                            <div className="text-center mc-mt-40 mc-mb-60">
                                <i className="fab fa-creative-commons-sampling fa-4x mc-color-primary"></i>
                            </div>
                            <h2 className="mb-3 mc-color-primary mc-post-title">Our Core Value</h2>
                            <p className="mb-0 mc-line-height-short">
                                Nunc mi ante, suscipit vel dapibus et, volutpat sit amet ante. In tempor nec sem vitae varius.
                                Aliquam tincidunt orci sem, et imperdiet massa consectetur nec.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mc-row mc-mb-60">
                    <div className="col-12">
                        <hr className="mc-hr-primary  mc-mb-55"/>
                    </div>
                    <div className="col-lg-6 mc-mb-60 mc-person-col">
                        <div className="media mc-person">
                            <img src="img/about-02.jpg" alt="Image" className="img-fluid mr-4"/>
                                <div className="media-body">
                                    <h2 className="mc-color-primary mc-post-title mb-2">John Henry</h2>
                                    <h3 className="mc-h3 mb-3">CEO/Founder</h3>
                                    <p className="mb-0 mc-line-height-short">
                                        Aliquam non vulputate lectus, vel ultricies diam. Suspendisse at ipsum
                                        hendrerit, vestibulum mi id, mattis tortor.
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mc-mb-60 mc-person-col">
                        <div className="media mc-person">
                            <img src="img/about-03.jpg" alt="Image" className="img-fluid mr-4"/>
                                <div className="media-body">
                                    <h2 className="mc-color-primary mc-post-title mb-2">Timy Cake</h2>
                                    <h3 className="mc-h3 mb-3">Project Director</h3>
                                    <p className="mb-0 mc-line-height-short">
                                        Quisque in bibendum elit, in egestas turpis. Vestibulum ornare sollicitudin congue.
                                        Aliquam lorem mi, maximus at iaculis ut.
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mc-mb-60 mc-person-col">
                        <div className="media mc-person">
                            <img src="img/about-04.jpg" alt="Image" className="img-fluid mr-4"/>
                                <div className="media-body">
                                    <h2 className="mc-color-primary mc-post-title mb-2">Jay Zoona</h2>
                                    <h3 className="mc-h3 mb-3">Supervisor</h3>
                                    <p className="mb-0 mc-line-height-short">
                                        Maecenas eu mi eu dui cursus consequat non eu metus. Morbi ac
                                        turpis eleifend, commodo purus eget, commodo mauris.
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mc-mb-60 mc-person-col">
                        <div className="media mc-person">
                            <img src="img/about-05.jpg" alt="Image" className="img-fluid mr-4"/>
                                <div className="media-body">
                                    <h2 className="mc-color-primary mc-post-title mb-2">Catherine Soft</h2>
                                    <h3 className="mc-h3 mb-3">Team Leader</h3>
                                    <p className="mb-0 mc-line-height-short">
                                        Integer eu sapien hendrerit,
                                        imperdiet arcu sit amet, sollicitudin ipsum.
                                        Phasellus consequat suscipit ligula eget bibendum.
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
