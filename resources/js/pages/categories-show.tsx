import Footer from "@/components/footer";
import NoData from "@/components/no-data";
import Pagination from "@/components/pagination";
import RecipeCard from "@/components/recipe-card";
import HeaderLayout from "@/layouts/header-layout";
import { Link, usePage } from '@inertiajs/react';

export default function CategoriesShow({category, recipes, flags}: any){
    console.log(category)
    console.log(recipes);
    const { url } = usePage();
    const searchParams = new URLSearchParams(url.split('?')[1]);
    const searchTerm = searchParams.get('q') || '';

    return (
        <>
            <HeaderLayout />

            <main className="mc-main">
                <div className="row">
                    <div className="col-12">
                        <form
                            method="GET"
                            className="form-inline mc-mb-80 mc-search-form"
                        >
                            <input
                                className="form-control mc-search-input"
                                name="q"
                                type="text"
                                placeholder="Search..."
                                aria-label="Search"
                                defaultValue={searchTerm}
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

                <h2 className="border-bottom d-flex justify-content-between mb-4 pb-2">
                    {searchTerm
                        ? `Results for "${searchTerm}"`
                        : category.title}
                </h2>
                <div className="row" data-masonry='{"percentPosition": true }'>
                    {recipes.data && recipes.data.length > 0 ? (
                        <RecipeCard recipes={recipes} flags={flags} />
                    ) : (
                        <NoData />
                    )}
                    {searchTerm && (
                        <Link
                            href={route('categories.show', category)}
                            className="btn btn-outline-dark"
                        >
                            Clear Search
                        </Link>
                    )}
                </div>

                <Pagination links={recipes.links} />
            </main>

            <Footer />
        </>
    );
}
