import { usePage } from '@inertiajs/react';
import NoData from "@/components/no-data";

export function Sidebar() {
    const { categories, relatedRecipes}: any = usePage().props;

    return (
        <aside className="col-lg-4 mc-aside-col">
            <div className="mc-post-sidebar">
                {/*Search form */}
                <div className="row mc-row">
                    <div className="col-12">
                        <form
                            method="GET"
                            className="form-inline mc-mb-40 mc-search-form"
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
                <hr className="mc-hr-primary mb-3" />
                <h2 className="mc-post-title mb-4">Categories</h2>
                <ul className="mc-mb-75 mc-category-list pl-5">
                    {categories ? (categories.map((category: any) => {
                        return (
                            <li>
                                <a href="#" className="mc-color-primary">
                                    {category.title}
                                    <span className="mc-color-dark">
                                        {' '}
                                        ({category.recipes_count} recipes)
                                    </span>
                                </a>
                            </li>
                        );
                    }))
                    : <NoData />
                    }
                </ul>
                <hr className="mc-hr-primary mb-3" />
                <h2 className="mc-post-title mb-4">Related Recipes</h2>
                {relatedRecipes && relatedRecipes.length > 0 ? (relatedRecipes.map((recipe: any) => {
                    const imgNumber = (recipe.id % 6) + 1;

                    return (
                        <a href="#" className="d-block mc-mb-40">
                            <figure>
                                <img
                                    src={`/img/${imgNumber}.jpeg`}
                                    alt={recipe.title}
                                    className="img-fluid rounded-3 mb-3 shadow-lg"
                                />
                                <figcaption className="mc-color-primary">
                                    {recipe.title}
                                </figcaption>
                            </figure>
                        </a>
                    );
                })) : (<NoData />)}
            </div>
        </aside>
    );
}
