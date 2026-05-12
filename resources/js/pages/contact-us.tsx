import { useForm, Head, usePage } from '@inertiajs/react';
import HeaderLayout from '@/layouts/header-layout';

export default function ContactUs() {

    const { flash }: any = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const submit = (e: any) => {
        e.preventDefault();

        post(route('form-responses'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title="Contact Us" />
            <HeaderLayout />

            <main className="mc-main">
                <div className="row mc-row mc-mb-45">
                    <div className="offset-2 col-8 mb-5">
                        <img
                            src="/img/contact-us-cover.jpg"
                            alt="Contact us cover"
                            className="img-fluid rounded-4"
                        />
                    </div>
                </div>
                <div className="row mc-row mc-mb-120">
                    <div className="col-12">
                        <h2 className="mc-post-title mc-mb-60">Contact Us</h2>
                    </div>
                    <div className="col-lg-7 mc-contact-left">
                        {flash.message ? (
                            <>
                                <h3 className="text-success">{flash.message.title}</h3>
                                <p className="text-success">{flash.message.subtitle}</p>
                            </>
                        ) :
                        <form
                            onSubmit={submit}
                            className="mc-contact-form mr-0 mb-5 ml-auto"
                        >

                            <div className="form-group row mb-4">
                                <label
                                    htmlFor="name"
                                    className="col-sm-3 col-form-label mc-color-primary text-right"
                                >
                                    Name <span className="text-danger">*</span>
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        className={`form-control mr-0 ml-auto ${errors.name ? 'is-invalid' : ''}`}
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        type="text"
                                    />
                                    {errors.name && (
                                        <div className="text-danger small">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>
                            </div>


                            <div className="form-group row mb-4">
                                <label
                                    htmlFor="email"
                                    className="col-sm-3 col-form-label mc-color-primary text-right"
                                >
                                    Email <span className="text-danger">*</span>
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        className={`form-control mr-0 ml-auto ${errors.email ? 'is-invalid' : ''}`}
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        type="email"
                                    />
                                    {errors.email && (
                                        <div className="text-danger small">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-group row mb-4">
                                <label
                                    htmlFor="subject"
                                    className="col-sm-3 col-form-label mc-color-primary text-right"
                                >
                                    Subject{' '}
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        className={`form-control mr-0 ml-auto ${errors.subject ? 'is-invalid' : ''}`}
                                        value={data.subject}
                                        onChange={(e) =>
                                            setData('subject', e.target.value)
                                        }
                                        type="text"
                                    />
                                    {errors.subject && (
                                        <div className="text-danger small">
                                            {errors.subject}
                                        </div>
                                    )}
                                </div>
                            </div>


                            <div className="form-group row mb-5">
                                <label
                                    htmlFor="message"
                                    className="col-sm-3 col-form-label mc-color-primary text-right"
                                >
                                    Message{' '}
                                    <span className="text-danger">*</span>
                                </label>
                                <div className="col-sm-9">
                                    <textarea
                                        className={`form-control mr-0 ml-auto ${errors.message ? 'is-invalid' : ''}`}
                                        value={data.message}
                                        onChange={(e) =>
                                            setData('message', e.target.value)
                                        }
                                        rows={8}
                                    ></textarea>
                                    {errors.message && (
                                        <div className="text-danger small">
                                            {errors.message}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="form-group row text-right">
                                <div className="col-12">
                                    <button
                                        className="mc-btn mc-btn-primary mc-btn-small"
                                        type="submit"
                                        disabled={processing}
                                    >
                                        {processing ? 'Sending...' : 'Submit'}
                                    </button>
                                </div>
                            </div>
                        </form>}
                    </div>

                    <div className="col-lg-5 mc-contact-right">
                        <address className="mc-color-gray mb-4">
                            1 Austin Terrace, Toronto, ON M5R 1X8, Canada
                        </address>
                        <span className="d-block">
                            Tel:{' '}
                            <a
                                href="tel:012-321-4567"
                                className="mc-color-gray"
                            >
                                012-321-4567
                            </a>
                        </span>
                        <span className="d-block mb-4">
                            Email:{' '}
                            <a
                                href="mailto:info@company.com"
                                className="mc-color-gray"
                            >
                                info@company.com
                            </a>
                        </span>
                        <p className="mc-line-height-short mb-5">
                            Lara Recipes a demo of a Laravel tutorial created by
                            <a href="https://mkwsra.com" className="text-dark">
                                {' '}
                                Mo Kawsara
                            </a>
                            ...
                        </p>

                        {/* Social Links... (Keep your existing static HTML here) */}
                    </div>

                    <div className="col-12">
                        <div className="gmap_canvas">
                            <iframe
                                width="100%"
                                height="477"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=Mississauga,On,Canada&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
