import Footer from '@/components/footer';
import NoData from '@/components/no-data';
import RecipeFeatures from '@/components/recipe-features';
import { Sidebar } from '@/components/sidebar';
import HeaderLayout from '@/layouts/header-layout';

export default function RecipesShow({ recipe, flags, featuredRecipes }: any) {

    return (
        <>
            <title>{recipe.title}</title>
            <HeaderLayout />
            <main className="mc-main">
                <div className="border-bottom mb-5 px-4 text-center">
                    <div className="col-lg-6 mx-auto"></div>
                    <div
                        className="overflow-hidden"
                        style={{ maxHeight: '45vh' }}
                    >
                        <div className="container px-5">
                            {recipe.is_featured && (
                                <span className="position-absolute mc-new-badge">
                                    <i className="fas fa-certificate"></i>
                                    Featured Recipe
                                </span>
                            )}
                            <img
                                src="/img/1.jpeg"
                                className="img-fluid rounded-3 mb-4 border shadow-lg"
                                alt="Example image"
                                width="900"
                                height="500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                <div className="row mc-row">
                    <div className="col-lg-8 mc-post-col">
                        <div className="mc-post-full">
                            <div className="d-flex justify-content-between mb-4">
                                <div>
                                    <i className="fas fa-book-open-reader"></i>
                                    &nbsp; {recipe.view_count} views
                                </div>
                                <div>
                                    Published in
                                    <a href="#!"> {recipe.category.title}</a>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h2 className="display-5 fw-bold text-body-emphasis mc-color-primary mc2-post-title mt-4">
                                    {recipe.title}
                                </h2>

                                <RecipeFeatures recipe={recipe} flags={flags} />

                                <p>{recipe.excerpt}</p>
                                <div className="card card-body align-items-center rounded-3 sha2dow my-4 border pb-0">
                                    <div className="container">
                                        <div className="row align-items-md-center">
                                            <div className="col d-flex flex-column">
                                                <p className="text-dark mb-0">
                                                    <i className="fas fa-utensils fa-xs"></i>
                                                    Servings
                                                </p>
                                                <p className="text-body-secondary">
                                                    {recipe.servings} ppl
                                                </p>
                                            </div>
                                            <div className="col d-flex flex-column">
                                                <p className="text-dark mb-0">
                                                    <i className="fas fa-hourglass-half fa-xs"></i>
                                                    Prepare Time
                                                </p>
                                                <p className="text-body-secondary">
                                                    {
                                                        recipe.prepare_time_formatted
                                                    }{' '}
                                                </p>
                                            </div>
                                            <div className="col d-flex flex-column">
                                                <p className="text-dark mb-0">
                                                    <i className="fas fa-clock fa-xs"></i>
                                                    Cooking Time
                                                </p>
                                                <p className="text-body-secondary">
                                                    {
                                                        recipe.cooking_time_formatted
                                                    }{' '}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="btn-group mb-4 w-100">
                                    <a
                                        href="#instructions"
                                        className="btn btn-outline-dark"
                                    >
                                        Instructions
                                    </a>
                                    <a
                                        href="#description"
                                        className="btn btn-outline-dark"
                                    >
                                        Recipe
                                    </a>

                                    {recipe.youtube_url ? (
                                        <a
                                            href="#video"
                                            className="btn btn-outline-dark"
                                        >
                                            Video
                                        </a>
                                    ) : (
                                        <span
                                            className="btn btn-outline-dark bg-dark-subtle text-muted"
                                            data-bs-toggle="tooltip"
                                            data-bs-title="Not Available"
                                        >
                                            <i>Video</i>
                                        </span>
                                    )}
                                    <a
                                        href="#notes"
                                        className="btn btn-outline-dark"
                                    >
                                        Notes
                                    </a>
                                </div>

                                <h3
                                    className="border-bottom mt-4"
                                    id="instructions"
                                >
                                    Instructions
                                </h3>
                                <p>{recipe.instructions}</p>

                                <h3
                                    className="border-bottom mt-4"
                                    id="description"
                                >
                                    Recipe
                                </h3>
                                <p>{recipe.description}</p>

                                <h3 className="border-bottom mt-4" id="video">
                                    Video
                                </h3>
                                {recipe.youtube_url && (
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src={`https://www.youtube.com/embed/${recipe.youtube_url.split('?v=')[1]}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                )}

                                <h3 className="border-bottom mt-4" id="notes">
                                    Notes
                                </h3>
                                <p>{recipe.notes}</p>

                                <div className="d-flex justify-content-start mt-5 mb-4">
                                    <span className="badge rounded-pill text-bg-light me-2">
                                        Baked
                                    </span>
                                    <span className="badge rounded-pill text-bg-light me-2">
                                        Juicy
                                    </span>
                                    <span className="badge rounded-pill text-bg-light me-2">
                                        Western
                                    </span>
                                </div>
                            </div>

                            <div className="my-5">
                                <h2 className="border-bottom pb-2">
                                    Hand-Picked Recipes
                                </h2>

                                <div className="row">
                                    {featuredRecipes &&
                                    featuredRecipes.length > 0 ? (
                                        featuredRecipes.map((recipe: any) => {
                                            const imgNumber =
                                                (recipe.id % 6) + 1;
                                            const truncated =
                                                recipe.title.length > 20
                                                    ? recipe.title.slice(
                                                          0,
                                                          20,
                                                      ) + '...'
                                                    : recipe.title;

                                            return (
                                                <div className="col-4">
                                                    <a href="#!">
                                                        <div
                                                            className="card card-cover text-bg-dark rounded-3 img-overlay h-100 overflow-hidden shadow-lg"
                                                            style={{
                                                                backgroundImage: `url(/img/${imgNumber}.jpeg)`,
                                                                backgroundSize:
                                                                    'cover',
                                                            }}
                                                        >
                                                            <div className="d-flex flex-column z-1 h-100 p-5 pb-3 text-white">
                                                                <h3 className="lh-1 fw-bold mt-5 mb-4 pt-5">
                                                                    {truncated}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <NoData />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Sidebar />
                </div>
            </main>
            <Footer />
        </>
    );
}
