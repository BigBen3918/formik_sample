import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-block">
                        <a href="#" className="link">
                            Riusalo.it
                        </a>
                        <ul className="footer-nav">
                            <li>
                                <a href="descrizione-riusalo.html">
                                    Cos’è Riusalo.it
                                </a>
                            </li>
                            <li>
                                <a href="login.html">Inserisci oggetto</a>
                            </li>
                            <li>
                                <a href="ricerca-oggetto.html">
                                    Ricerca oggetto
                                </a>
                            </li>
                            <li>
                                <a href="riusalo-per-il-sociale.html">
                                    Riusalo.it per il sociale
                                </a>
                            </li>
                            <li>
                                <a href="i-nostri-partner.html">
                                    I Nostri Partner
                                </a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="termini-e-condizioni.html">
                                    Termini e condizioni
                                </a>
                            </li>
                            <li>
                                <a href="privacy-e-cookie.html">
                                    Privacy e cookie
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-block">
                        <a href="#" className="link">
                            Asinco srl
                        </a>
                        <ul className="footer-nav">
                            <li>
                                <a href="chi-siamo.html">Chi siamo</a>
                            </li>
                            <li>
                                <a href="contatti.html">Contattaci</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-block">
                        <a href="#" className="link">
                            Seguici
                        </a>
                        <ul className="socialmedia-links">
                            <li>
                                <a
                                    href="https://www.youtube.com/channel/UCWfYTpELfZ98adY5jvHJKOA"
                                    target="_blank"
                                    rel="noopener nofollow"
                                >
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/riusalo/"
                                    target="_blank"
                                    rel="noopener nofollow"
                                >
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/riusaloit?lang=ga"
                                    target="_blank"
                                    rel="noopener nofollow"
                                >
                                    <i className="bi bi-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/Riusalo.it/"
                                    target="_blank"
                                    rel="noopener nofollow"
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="copyright text-center">
                        <img src="assets/images/riusalo logo 1.png" />
                        <p>© 2021 Asinco srl - P.IVA 0629404023</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
