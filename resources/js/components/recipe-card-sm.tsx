export default function RecipeCardSm({ imgNumber,  title, featured }: {imgNumber: number, title: string, featured?: boolean}) {
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
                {featured && (
                    <span className="position-absolute mc-new-badge">
                        <i className="fas fa-certificate"></i>
                        Featured
                    </span>
                )}
                <h2 className="mc-pt-30 mc-post-title">{title}</h2>
            </a>
            <div className="d-flex justify-content-between">
                <span className="mc-color-primary">Category Title</span>
            </div>
        </article>
    );
}
