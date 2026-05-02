export default function RecipeCardSm({ imgNumber,  title }: {imgNumber: number, title: string}) {
    return (
        <article className="col-md-6 col-lg-3 col-12">
            <a href="single-recipe.html" className="effect-lily mc-post-link">
                <div className="mc-post-link-inner">
                    <img
                        src={`img/${imgNumber}.jpeg`}
                        alt="Image"
                        className="img-fluid"
                    />
                </div>
                <h2 className="mc-pt-30 mc-post-title">{title}</h2>
            </a>
            <div className="d-flex justify-content-between">
                <span className="mc-color-primary">Category Title</span>
            </div>
        </article>
    );
}
