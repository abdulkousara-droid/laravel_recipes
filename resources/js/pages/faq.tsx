import HeaderLayout from '@/layouts/header-layout';

export default function Faq({title}: any) {
    return (
        <>
            <HeaderLayout />

            <main className="mc-main">
                <div className="container px-4 pb-5">
                    <h2 className="pb-2">{title}</h2>
                </div>
                <div
                    className="accordion accordion-flush mc-mb-120"
                    id="accordionFlushExample"
                >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <a
                                className="accordion-button collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                            >
                                How can I learn Laravel?
                            </a>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                I would love to teach you deep and advanced
                                topics of the
                                <code>laravel</code> framework. This is kind of
                                my first crash course, but if you would like to
                                suggest something I would love to hear your
                                thoughts on it.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <a
                                className="accordion-button collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                How can I communicate with you for more details?
                            </a>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                You are always reach me on my email{' '}
                                <code>mo@multicaret.com</code> or if you wish DM
                                me, you can find me anywhere using this handle{' '}
                                <code>mkwsra</code>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <a
                                className="accordion-button collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                            >
                                Did you build this theme?
                            </a>
                        </h2>
                        <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                As I stated before in many places in this
                                website, I took Xtra Blog theme and I changed
                                and it tweaked it to match the purposes of this
                                tutorial
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <a
                                className="accordion-button collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour"
                                aria-expanded="false"
                                aria-controls="flush-collapseFour"
                            >
                                How can I support you?
                            </a>
                        </h2>
                        <div
                            id="flush-collapseFour"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Actually I just want a like or a comment if you
                                think that you learnt something new here, and if
                                you to share my tutorial videos I would REALLY
                                appreciate it! only so I can get motivated to
                                build more, and if you to share my videos please
                                write me a comment that you did so, I would like
                                to see who are my fans and I would appreciate
                                you guys more, because eventually I would love
                                to have a community surrounding my{' '}
                                <a
                                    href="https://www.youtube.com/@multi-caret"
                                    target="_blank"
                                >
                                    Youtube channel
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <a
                                className="accordion-button collapsed"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFive"
                                aria-expanded="false"
                                aria-controls="flush-collapseFive"
                            >
                                Do you like Microsoft?
                            </a>
                        </h2>
                        <div
                            id="flush-collapseFive"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                I mean it's a huge company and without it the
                                whole earth would stop (Windows). But hold on
                                why you are asking me such questions? 🤷‍♂️
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
