import NoData from '@/components/no-data';
import HeaderLayout from '@/layouts/header-layout';
import { Link } from '@inertiajs/react';

export default function Categories({ categories }: any) {
    console.log(categories);

    return (
        <>
            <HeaderLayout />

            <main className="mc-main">
                <div className="border-bottom mb-5 px-4 text-center">
                    <h1 className="display-5 fw-bold text-body-emphasis">
                        <i className="fas fa-certificate text-warning"></i>
                        Top Notch Recipes
                        <i className="fas fa-certificate text-warning"></i>
                    </h1>
                    <div className="col-lg-10 mx-auto">
                        <p className="lead mb-4">
                            Take the opportunity to explore the curated
                            selection that our highly skilled and experienced
                            team has thoughtfully gathered specifically with you
                            in mind. We've meticulously chosen these offerings
                            to cater to your needs and preferences, ensuring
                            that what you encounter is handpicked and tailored
                            to suit your interests.
                        </p>
                        <div className="d-grid d-sm-flex justify-content-sm-center mb-5 gap-2">
                            <button
                                type="button"
                                className="btn btn-warning btn-lg px-4"
                            >
                                Browse Featured Recipes
                            </button>
                        </div>
                    </div>
                    <div
                        className="overflow-hidden"
                        style={{ maxHeight: '30vh' }}
                    >
                        <div className="container px-5">
                            <img
                                src="img/1.jpeg"
                                className="img-fluid rounded-3 mb-4 border shadow-lg"
                                alt="Example image"
                                width="700"
                                height="500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <form
                            method="GET"
                            className="form-inline mc-mb-80 mc-search-form"
                        >
                            <input
                                className="form-control mc-search-input"
                                name="query"
                                type="text"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                            <button className="mc-search-button" type="submit">
                                <i
                                    className="fas fa-search mc-search-icon"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="container px-4 pb-5">
                    <h2 className="pb-2">Collections</h2>

                    <div className="row mb-2">
                        {categories.data && categories.data.length > 0 ? (
                            categories.data.map((category: any) => {
                                return (
                                    <div className="col-md-6">
                                        <div className="row g-0 flex-md-row h-md-250 position-relative mb-4 overflow-hidden rounded border shadow-sm">
                                            <div className="col d-flex flex-column position-static p-4">
                                                <strong className="d-inline-block text-primary-emphasis mb-2">
                                                    {category.recipes_count}{' '}
                                                    Recipes
                                                </strong>
                                                <a href="#">
                                                    <h3 className="mb-0">
                                                        {category.title}
                                                    </h3>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <NoData />
                        )}
                    </div>
                </div>

                <div className="row mc-mb-40">
                    <div className="d-flex justify-content-around col-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                {categories.links.map(
                                    (link: any, index: number) => {
                                        // Determine if this is the "Previous" or "Next" button based on the label
                                        const isPrev =
                                            link.label.includes('Previous');
                                        const isNext =
                                            link.label.includes('Next');

                                        return (
                                            <li
                                                key={index}
                                                className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                                            >
                                                <Link
                                                    className="page-link"
                                                    href={link.url || '#'}
                                                    aria-label={
                                                        isPrev
                                                            ? 'Previous'
                                                            : isNext
                                                              ? 'Next'
                                                              : undefined
                                                    }
                                                >
                                                    {/* 
                                If it's Prev or Next, we use your <span> structure.
                                Otherwise, we just show the page number.
                            */}
                                                    {isPrev ? (
                                                        <span aria-hidden="true">
                                                            &laquo;
                                                        </span>
                                                    ) : isNext ? (
                                                        <span aria-hidden="true">
                                                            &raquo;
                                                        </span>
                                                    ) : (
                                                        link.label
                                                    )}
                                                </Link>
                                            </li>
                                        );
                                    },
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </main>
        </>
    );
}
