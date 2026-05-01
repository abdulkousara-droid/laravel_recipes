export default function Carousel({carouselData}: any) {
    console.log(carouselData);

    return (
        <>
            <div
                id="myCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    {[...Array(3)].map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide-to={index}
                            aria-label={`Slide ${index + 1}`}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                        ></button>
                    ))}

                </div>
                <div className="carousel-inner">

                    {carouselData.map((recipe: any, index: number)=> {
                        const imgNumber = (recipe.id % 6) + 1;

                        return (
                            <div className="carousel-item active">
                                <img
                                    className="w-100"
                                    src={`img/${imgNumber}.jpeg`}
                                    alt={recipe.title}
                                />
                                <div className="carousel-item-content img-overlay container">
                                    <div className={`carousel-caption ${index % 2 === 0 ? "text-start" : "text-end"}`}>
                                        <h1>{recipe.title}</h1>
                                        <p>{recipe.excerpt}</p>
                                        <a
                                            className="btn btn-outline-light px-4"
                                            href="#"
                                        >
                                            Get Cooking
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
