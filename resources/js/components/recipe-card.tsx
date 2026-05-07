import RecipeFeatures from '@/components/recipe-features';

export default function RecipeCard({ recipes, flags}: any) {
    console.log(flags);

    return (
        <>
            {
                recipes.data.map((recipe: any) => {
                    const imgNumber = (recipe.id % 6) + 1;

                    return (
                        <article className="col-6">
                            <a
                                href="single-recipe.html"
                                className="effect-lily mc-post-link"
                            >
                                <div className="mc-post-link-inner mb-3">
                                    <img
                                        src={`/img/${imgNumber}.jpeg`}
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </div>
                                {!!recipe.is_featured && (
                                    <span className="position-absolute mc-new-badge">
                                        <i className="fas fa-certificate"></i>
                                        Featured
                                    </span>
                                )}
                            </a>

                            <RecipeFeatures recipe={recipe} flags={flags} />

                            <a href="single-recipe.html">
                                <h2 className="mc-pt-20 mc-post-title">
                                    {recipe.title}
                                </h2>
                            </a>
                            <p className="mc-pt-10">{recipe.excerpt}</p>
                            <hr className="pb-3" />
                        </article>
                    );
                }) }

        </>
    );
}
