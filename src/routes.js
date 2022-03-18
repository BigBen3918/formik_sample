import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layouts
import PrivateRoute from "./components/router/privateRoute";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import ChatBot from "./components/layouts/chatbot";

// Pages
/* --- Need Auth --- */
import Main from "./pages/main";

/* --- No Auth --- */
import FirstPage from "./pages/firstpage";
import Login from "./pages/login";
import Registry from "./pages/registry";
import Forgot from "./pages/forgot";
import Privacy from "./pages/policy/privacy";
import Termini from "./pages/policy/termini";
import NotFound from "./pages/notfound";

export default function Routing() {
    return (
        <div className="wrapper">
            <Router>
                <Header />
                <Routes>
                    {/* Private Routes */}
                    <Route
                        path="/dashboard"
                        element={<PrivateRoute component={Main} />}
                    />

                    {/* Normal Routes */}
                    <Route path="/" element={<FirstPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registrazione" element={<Registry />} />
                    <Route path="/passforgot" element={<Forgot />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/termini" element={<Termini />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
                <ChatBot />
            </Router>
        </div>
    );
}
