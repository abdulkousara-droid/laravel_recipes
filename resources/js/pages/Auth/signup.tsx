import { useForm, Head, usePage, Link } from '@inertiajs/react';

export default function SignUp() {
    // We grab errors and flash from props
    const { flash }: any = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '', // Fortify expects this exact name
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        // Standard Fortify/Laravel registration route
        post('/register', {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Create Account" />

            <main className="mc-main">
                <div className="row mc-row mc-mb-120">
                    <div className="col-12">
                        <h2 className="mc-post-title mc-mb-60">
                            Create an Account
                        </h2>
                    </div>

                    <div className="col-lg-7 mc-contact-left">
                        {/* Success Message display */}
                        {flash.message ? (
                            <div className="mc-mb-60">
                                <h3 className="text-success">
                                    {flash.message.title || flash.message}
                                </h3>
                                <p className="text-muted">
                                    {flash.message.subtitle ||
                                        'You can now log in.'}
                                </p>
                                <Link
                                    href="/login"
                                    className="mc-btn mc-btn-primary"
                                >
                                    Go to Login
                                </Link>
                            </div>
                        ) : (
                            <form
                                onSubmit={submit}
                                className="mc-contact-form mr-0 mb-5 ml-auto"
                            >
                                {/* Name Field */}
                                <div className="form-group row mb-4">
                                    <label className="col-sm-3 col-form-label mc-color-primary text-right">
                                        Full Name{' '}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            value={data.name}
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                            type="text"
                                            required
                                        />
                                        {errors.name && (
                                            <div className="text-danger small">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="form-group row mb-4">
                                    <label className="col-sm-3 col-form-label mc-color-primary text-right">
                                        Email{' '}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            value={data.email}
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                            type="email"
                                            required
                                        />
                                        {errors.email && (
                                            <div className="text-danger small">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="form-group row mb-4">
                                    <label className="col-sm-3 col-form-label mc-color-primary text-right">
                                        Password{' '}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    'password',
                                                    e.target.value,
                                                )
                                            }
                                            type="password"
                                            required
                                        />
                                        {errors.password && (
                                            <div className="text-danger small">
                                                {errors.password}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Confirm Password Field */}
                                <div className="form-group row mb-5">
                                    <label className="col-sm-3 col-form-label mc-color-primary text-right">
                                        Confirm{' '}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            className="form-control"
                                            value={data.password_confirmation}
                                            onChange={(e) =>
                                                setData(
                                                    'password_confirmation',
                                                    e.target.value,
                                                )
                                            }
                                            type="password"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group row text-right">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <Link
                                                href="/login"
                                                className="small text-muted"
                                            >
                                                Already have an account? Log in
                                            </Link>
                                        </div>
                                        <button
                                            className="mc-btn mc-btn-primary mc-btn-small"
                                            type="submit"
                                            disabled={processing}
                                        >
                                            {processing
                                                ? 'Creating Account...'
                                                : 'Register'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}
