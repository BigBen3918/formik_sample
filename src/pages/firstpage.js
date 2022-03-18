import React, { useEffect } from "react";

export default function FirstPage() {
    const title = "Home | Riusalo.it";

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <div>
            <section className="first-screen-section">
                <div className="container">
                    <div className="section-inner">
                        <div className="first-screen-block fridge">
                            <div className="block-content">
                                <h3 className="block-caption">
                                    Hai un oggetto che non ti serve più?
                                </h3>
                                <div className="block-button">
                                    <a href="/" className="button">
                                        Clicca qui
                                    </a>
                                </div>
                            </div>
                            <div className="block-image">
                                <img src="assets/images/fridge.png" alt="" />
                            </div>
                        </div>

                        <div className="first-screen-block iphone">
                            <div className="block-content">
                                <h3 className="block-caption">
                                    Vuoi trovare oggetti ancora utili?
                                </h3>
                                <a href="/" className="button">
                                    Ricerca oggetto
                                </a>
                            </div>
                            <div className="block-image">
                                <img src="assets/images/iphone.png" alt="" />
                            </div>
                        </div>

                        <div className="first-screen-block giftbox">
                            <div className="block-content">
                                <h3 className="block-caption">
                                    Riusalo.it per il sociale
                                </h3>
                                <a
                                    href="riusalo-per-il-sociale.html"
                                    className="button"
                                >
                                    Scopri di più
                                </a>
                            </div>
                            <div className="block-image">
                                <img src="assets/images/giftbox.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Start Gallery */}
            <div className="gallery">
                <div className="container">
                    <h3>Ultimi oggetti inseriti</h3>
                    <div className="gallery-grid">
                        <a href="pagina-oggetto.html">
                            <img
                                src="assets/images/gallery/image1.png"
                                alt="image"
                                width="100%"
                            />
                        </a>
                        <a href="pagina-oggetto-oven.html">
                            <img
                                src="assets/images/gallery/image2.png"
                                alt="image"
                                width="100%"
                            />
                        </a>
                        <a href="pagina-oggetto-cleaner.html">
                            <img
                                src="assets/images/gallery/image3.png"
                                alt="image"
                                width="100%"
                            />
                        </a>
                        <a href="pagina-oggetto-acoustic.html">
                            <img
                                src="assets/images/gallery/image4.png"
                                alt="image"
                                width="100%"
                            />
                        </a>
                        <a href="pagina-oggetto-chair.html">
                            <img
                                src="assets/images/gallery/image5.png"
                                alt="image"
                                width="100%"
                            />
                        </a>
                        <a href="pagina-oggetto-table.html">
                            <img
                                src="assets/images/gallery/image6.png"
                                alt="image"
                                width="100%"
                            />
                        </a>
                        <a href="pagina-oggetto-sofa.html">
                            <img
                                src="assets/images/gallery/image7.png"
                                alt="image"
                                width="100%"
                                className="d-none d-md-block"
                            />
                        </a>
                        <a href="pagina-oggetto-cleaner.html">
                            <img
                                src="assets/images/gallery/image8.png"
                                alt="image"
                                width="100%"
                                className="d-none d-md-block"
                            />
                        </a>
                    </div>
                    <a
                        href="#"
                        className="gallery-link text-center"
                        data-modal="#info-modal"
                    >
                        Visualizza altro
                    </a>
                </div>
            </div>
        </div>
    );
}
