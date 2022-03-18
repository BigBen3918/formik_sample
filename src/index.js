import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Load CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./assets/css/slick.min.css";
import "./assets/css/slick-theme.min.css";
import "./assets/scss/style.scss";

// Load JavaScript
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/js/_script";
// import "./assets/js/slick.min";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
