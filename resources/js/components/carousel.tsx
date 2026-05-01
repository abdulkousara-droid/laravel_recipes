export default function Carousel() {
    return (
        <>
            <div
                id="myCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="0"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        className="active"
                        aria-current="true"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img className="w-100" src="img/3.jpeg" alt="" />
                        <div className="carousel-item-content img-overlay container">
                            <div className="carousel-caption text-start">
                                <h1>Chocolate Chip Cookies</h1>
                                <p>
                                    Some representative placeholder content for
                                    the first slide of the carousel.
                                </p>
                                <a
                                    className="btn btn-outline-light px-4"
                                    href="#"
                                >
                                    Get Cooking
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img className="w-100" src="img/4.jpeg" alt="" />
                        <div className="carousel-item-content img-overlay container">
                            <div className="carousel-caption">
                                <h1>
                                    Delicious Falafel Recipe (Fried or Baked)
                                </h1>
                                <p>
                                    Some representative placeholder content for
                                    the second slide of the carousel.
                                </p>
                                <a
                                    className="btn btn-outline-light px-4"
                                    href="#"
                                >
                                    Get Cooking
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="img/1.jpeg" alt="" />
                        <div className="carousel-item-content img-overlay container">
                            <div className="carousel-caption text-end">
                                <h1>Peanut Butter and Jelly</h1>
                                <p>
                                    Some representative placeholder content for
                                    the third slide of this carousel.
                                </p>
                                <a
                                    className="btn btn-outline-light px-4"
                                    href="#"
                                >
                                    Get Cooking
                                </a>
                            </div>
                        </div>
                    </div>
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
