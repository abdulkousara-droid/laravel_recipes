import { useForm, Head, Link, usePage } from '@inertiajs/react';

export default function SignIn() {
    const { flash }: any = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        // Fortify/Laravel default login route
        post('/login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Login" />

            <main className="mc-main">
                <div className="row mc-row mc-mb-120">
                    <div className="col-12">
                        <h2 className="mc-post-title mc-mb-60">
                            Login to Your Account
                        </h2>
                    </div>

                    <div className="col-lg-7 mc-contact-left">
                        {/* Display error message if login fails */}
                        {errors.email && (
                            <div className="alert alert-danger mb-4">
                                {errors.email}
                            </div>
                        )}

                        {flash.message ? (
                            <div className="mc-mb-60">
                                <h3 className="text-success">
                                    {flash.message.title}
                                </h3>
                                <p className="text-success mb-4">
                                    {flash.message.subtitle}
                                </p>
                                <Link
                                    href="/"
                                    className="mc-btn mc-btn-primary"
                                >
                                    Go to Homepage
                                </Link>
                            </div>
                        ) : (
                            <form
                                onSubmit={submit}
                                className="mc-contact-form mr-0 mb-5 ml-auto"
                            >
                                {/* Email Field */}
                                <div className="form-group row mb-4">
                                    <label className="col-sm-3 col-form-label mc-color-primary text-right">
                                        Email
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
                                            autoComplete="username"
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="form-group row mb-4">
                                    <label className="col-sm-3 col-form-label mc-color-primary text-right">
                                        Password
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
                                            autoComplete="current-password"
                                        />
                                    </div>
                                </div>

                                {/* Remember Me Checkbox */}
                                <div className="form-group row mb-4">
                                    <div className="col-sm-9 offset-sm-3">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="remember"
                                                checked={data.remember}
                                                onChange={(e) =>
                                                    setData(
                                                        'remember',
                                                        e.target.checked,
                                                    )
                                                }
                                            />
                                            <label
                                                className="form-check-label text-muted"
                                                htmlFor="remember"
                                            >
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group row text-right">
                                    <div className="col-12">
                                        <div className="d-flex justify-content-between mb-3">
                                            <Link
                                                href="/forgot-password"
                                                className="small text-muted"
                                            >
                                                Forgot password?
                                            </Link>
                                            <Link
                                                href="/register"
                                                className="small text-primary"
                                            >
                                                Don't have an account? Sign up
                                            </Link>
                                        </div>
                                        <button
                                            className="mc-btn mc-btn-primary mc-btn-small"
                                            type="submit"
                                            disabled={processing}
                                        >
                                            {processing
                                                ? 'Logging in...'
                                                : 'Login'}
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
