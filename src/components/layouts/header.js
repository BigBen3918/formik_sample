import React, { useState } from "react";

export default function Header() {
    const [classFlag, setClassFlag] = useState(1);

    const clickEvent = (param) => {
        setClassFlag(param);
    };

    return (
        <div className="navbar-header">
            <div className="container">
                <div className="header-inner">
                    <div className="header-block d-xl-none">
                        <button
                            className="menu-opener"
                            aria-label="Mostra la navigazione"
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                    <div className="header-block">
                        <a className="navbar-brand" href="/">
                            <img
                                src="assets/images/Rectangle.png"
                                alt="image"
                            />
                        </a>
                    </div>
                    <div className="header-block d-none d-xl-block">
                        <nav className="top-nav">
                            <ul>
                                <li>
                                    <a
                                        href="/"
                                        className={
                                            classFlag === 1
                                                ? "clickedHeader"
                                                : ""
                                        }
                                        onClick={() => clickEvent(1)}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className={
                                            classFlag === 2
                                                ? "clickedHeader"
                                                : ""
                                        }
                                        onClick={() => clickEvent(2)}
                                    >
                                        Cos’è Riusalo.it
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className={
                                            classFlag === 3
                                                ? "clickedHeader"
                                                : ""
                                        }
                                        onClick={() => clickEvent(3)}
                                    >
                                        Chi siamo
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className={
                                            classFlag === 4
                                                ? "clickedHeader"
                                                : ""
                                        }
                                        onClick={() => clickEvent(4)}
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className={
                                            classFlag === 5
                                                ? "clickedHeader"
                                                : ""
                                        }
                                        onClick={() => clickEvent(5)}
                                    >
                                        Contattaci
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-block header-right">
                        <div className="login">
                            <a href="/login">
                                <img
                                    src="assets/images/admin.png"
                                    alt="image"
                                />
                                <span className="d-md-inline d-none">
                                    Accedi
                                </span>
                            </a>
                        </div>
                        <div className="language">
                            <div className="dropdown">
                                <a
                                    className="btn btn-secondary dropdown-toggle"
                                    href="#"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img src="assets/images/italy 1.png" />
                                    <img
                                        src="assets/images/bottom-arrow.png"
                                        className="arrow"
                                    />
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <img src="assets/images/united-kingdom.png" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-top-nav">
                <button
                    className="close-btn"
                    aria-label="Chiudi navigazione"
                ></button>
                <ul>
                    <li>
                        <a
                            href="/"
                            className={classFlag === 1 ? "clickedHeader" : ""}
                            onClick={() => clickEvent(1)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className={classFlag === 2 ? "clickedHeader" : ""}
                            onClick={() => clickEvent(2)}
                        >
                            Cos’è Riusalo.it
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className={classFlag === 3 ? "clickedHeader" : ""}
                            onClick={() => clickEvent(3)}
                        >
                            Chi siamo
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className={classFlag === 4 ? "clickedHeader" : ""}
                            onClick={() => clickEvent(4)}
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className={classFlag === 5 ? "clickedHeader" : ""}
                            onClick={() => clickEvent(5)}
                        >
                            Contattaci
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
