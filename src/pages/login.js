import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Login() {
    const title = "Login | Riusalo.it";
    const navigate = useNavigate();

    useEffect(() => {
        document.title = title;
    }, []);

    const [show, setShow] = useState(0);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required("Campo Nome obbligatorio"),
            password: Yup.string()
                .min(
                    6,
                    "Campo Password deve contenere almento sei caratteri alfanumerici"
                )
                .required("Campo Password obbligatorio"),
        }),
        onSubmit: async (values, { resetForm }) => {
            // setLoading(true);
            setShow(0);
            console.log(values);
            // setLoading(false);
            resetForm({ values: "" });
        },
    });

    const handleForgot = () => {
        navigate("/passforgot");
    };

    return (
        <>
            <div className="login-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-6 col-12">
                            <h4>Area riservata</h4>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="input-container">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        className={
                                            formik.touched.username &&
                                            formik.errors.username
                                                ? "inputerror"
                                                : ""
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username}
                                        placeholder="Inserisci Username"
                                    />
                                    {formik.touched.username &&
                                    formik.errors.username ? (
                                        <div className="error">
                                            {formik.errors.username}
                                            <br />
                                            <br />
                                        </div>
                                    ) : null}
                                </div>
                                <div className="input-container">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className={
                                            formik.touched.password &&
                                            formik.errors.password
                                                ? "inputerror"
                                                : ""
                                        }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        placeholder="Inserisci Password"
                                    />
                                    {formik.touched.password &&
                                    formik.errors.password ? (
                                        <span className="error">
                                            {formik.errors.password}
                                            <br />
                                            <br />
                                        </span>
                                    ) : null}
                                </div>
                                <button type="submit" className="button">
                                    Accedi
                                </button>
                                <div className="text-center">
                                    Hai dimenticato le Tue credenziali?{" "}
                                    <span
                                        className="forgotpass"
                                        onClick={handleForgot}
                                    >
                                        Clicca Qui
                                    </span>
                                </div>
                                <hr style={{ width: "90%" }} />
                                <a href="#" className="facebook-link">
                                    <i className="bi bi-facebook"></i> Accedi
                                    tramite Facebook
                                </a>
                                <a href="#" className="google-link">
                                    <img src="assets/images/Group.png" /> Accedi
                                    tramite Google
                                </a>
                            </form>

                            {/* Registry Link */}
                            <p>Oppure</p>
                            <a href="/registrazione" className="register">
                                Registrati
                            </a>
                        </div>
                        <div className="col-md-7 col-sm-6 col-12">
                            <img src="assets/images/login.png" width="100%" />
                        </div>
                    </div>
                </div>
            </div>

            <Modal open={show} />
        </>
    );
}

const Modal = (props) => {
    const { open } = props;
    const modalClass =
        open !== 0 ? "modal message-modal visible" : "modal message-modal";

    return (
        <div className={modalClass} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <button
                        className="modal-close"
                        aria-label="Close modal"
                    ></button>

                    <div className="message-modal-image">
                        <img
                            src="assets/images/Rectangle.png"
                            alt="Riusalo.it"
                        />
                    </div>

                    <div className="message-modal-text">
                        {open === 1 ? (
                            <>
                                <h3 className="message-modal-title color-success">
                                    Benvenuto su Riusalo.it
                                </h3>
                                <p>
                                    Per poter accedere conferma l’email di
                                    verifica <br />
                                    che abbiamo inviato al tuo indirizzo email.
                                </p>
                            </>
                        ) : open === 2 ? (
                            <>
                                <h3 className="message-modal-title color-error">
                                    Errore di login
                                </h3>
                                <p>
                                    Utente non traovato, riprova più tardi o
                                    contattaci per supporto
                                </p>
                            </>
                        ) : (
                            <>
                                <h3 className="message-modal-title color-error">
                                    Errore di registrazione
                                </h3>
                                <p>
                                    C’è stato un errore in fase di
                                    registrazione. <br />
                                    Ti preghiamo di contattarci telefonicamente
                                    o via email.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
