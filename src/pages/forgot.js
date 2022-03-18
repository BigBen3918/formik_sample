import React from "react";

export default function Forgot() {
    return (
        <section className="forgot-password-section">
            <div className="container">
                <div className="section-inner">
                    <div className="section-form">
                        <form action="#" className="login-form">
                            <h4>Recupera credenziali</h4>

                            <div className="forgot-password-form">
                                <div className="input-container">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder="Inserisci Email"
                                    />
                                </div>
                                <a href="#" className="button">
                                    Recupera credenziali
                                </a>
                            </div>
                        </form>

                        <p className="form-note">
                            Oppure <a href="/login">Accedi</a>
                        </p>
                    </div>

                    <div className="section-image">
                        <img src="assets/images/login.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
