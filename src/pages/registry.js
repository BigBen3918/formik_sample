import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import Action from "../service/action";
import Firebase from "../firebase";
import AutoComplete from "react-google-autocomplete";

/* ----- Date Setting ----- */
var days = [];
var months = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
];
var years = [];
for (var i = 1; i < 32; i++) {
    days.push(i);
}
for (var i = 2021; i > 1935; i--) {
    years.push(i);
}

export default function Registry() {
    const [show, setShow] = useState(0);
    const [loading, setLoading] = useState(false);
    const [commonValue, setCommonValue] = useState({});
    const check1Ref = useRef();
    const check2Ref = useRef();
    const check3Ref = useRef();

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            fiscalcode: "",
            birthplace: "",
            birthyear: "",
            birthmonth: "",
            birthday: "",
            sex: "1",
            email: "",
            password: "",
            repassword: "",
            common: "",
            check1: false,
            check2: false,
            check3: false,
        },
        validationSchema: Yup.object().shape({
            firstname: Yup.string().required("Campo Nome obbligatorio"),
            lastname: Yup.string().required("Campo Cognome obbligatorio"),
            fiscalcode: Yup.string()
                .required("Campo Codice fiscale obbligatorio")
                .matches(
                    /^([A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST]{1}[0-9LMNPQRSTUV]{2}[A-Z]{1}[0-9LMNPQRSTUV]{3}[A-Z]{1})$|([0-9]{11})$/,
                    "Campo Codice fiscale non valido"
                ),
            birthplace: Yup.string().required(
                "Campo Luogo di nascita obbligatorio"
            ),
            birthyear: Yup.string().required(
                "Campo Data di nascita obbligatorio"
            ),
            birthmonth: Yup.string().required(
                "Campo Data di nascita obbligatorio"
            ),
            birthday: Yup.string().required(
                "Campo Data di nascita obbligatorio"
            ),
            email: Yup.string()
                .email("Campo Email non valido")
                .required("Campo Email obbligatorio"),
            password: Yup.string()
                .min(
                    6,
                    "Campo Password deve contenere almento sei caratteri alfanumerici"
                )
                .required("Campo Password obbligatorio"),
            repassword: Yup.string()
                .min(6, "Campo Conferma passoword non valido")
                .oneOf(
                    [Yup.ref("password"), null],
                    "Le password non corrispondono"
                )
                .required("Campo Conferma passoword obbligatorio"),
            common: Yup.string().required("Campo Comune obbligatorio"),
            check1: Yup.bool().isTrue(
                "Campo Consenso ai termini di servizio obbligatorio"
            ),
            check2: Yup.bool().isTrue(
                "Campo Consenso al trattamento dei dati personali obbligatorio"
            ),
            check3: Yup.bool().isTrue(
                "Campo Consenso alla profilazione obbligatorio"
            ),
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            setShow(0);
            const result = await Firebase.createUser({ values, commonValue });
            switch (result) {
                case 1:
                    setShow(1);
                    break;
                case 2:
                    setShow(2);
                    break;
                default:
                    setShow(3);
                    break;
            }
            setLoading(false);
            resetForm({ values: "", values: false });
            check1Ref.current.checked = false;
            check2Ref.current.checked = false;
            check3Ref.current.checked = false;
            setCommonValue({});
        },
    });

    return (
        <>
            <div className="register-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-8 col-12">
                            <form onSubmit={formik.handleSubmit}>
                                <h4>Registrazione</h4>
                                <div className="input-container">
                                    <label>Nome</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="firstname"
                                        className={
                                            formik.touched.firstname &&
                                            formik.errors.firstname
                                                ? "inputerror"
                                                : ""
                                        }
                                        placeholder="Nome"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstname}
                                    />
                                    {formik.touched.firstname &&
                                    formik.errors.firstname ? (
                                        <span className="error">
                                            {formik.errors.firstname}
                                            <br />
                                            <br />
                                        </span>
                                    ) : null}
                                </div>
                                <div className="input-container">
                                    <label>Cognome</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        className={
                                            formik.touched.lastname &&
                                            formik.errors.lastname
                                                ? "inputerror"
                                                : ""
                                        }
                                        placeholder="Cognome"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastname}
                                    />
                                    {formik.touched.lastname &&
                                    formik.errors.lastname ? (
                                        <span className="error">
                                            {formik.errors.lastname}
                                            <br />
                                            <br />
                                        </span>
                                    ) : null}
                                </div>
                                <div className="input-container">
                                    <label>Codice fiscale</label>
                                    <input
                                        type="text"
                                        name="fiscalcode"
                                        className={
                                            formik.touched.fiscalcode &&
                                            formik.errors.fiscalcode
                                                ? "inputerror"
                                                : ""
                                        }
                                        placeholder="Codice fiscale"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.fiscalcode}
                                    />
                                    {formik.touched.fiscalcode &&
                                    formik.errors.fiscalcode ? (
                                        <span className="error">
                                            {formik.errors.fiscalcode}
                                            <br />
                                            <br />
                                        </span>
                                    ) : null}
                                </div>
                                <div className="input-container">
                                    <label>Luogo di nascita</label>
                                    <AutoComplete
                                        name="birthplace"
                                        className={
                                            formik.touched.birthplace &&
                                            formik.errors.birthplace
                                                ? "inputerror"
                                                : ""
                                        }
                                        apiKey={
                                            process.env.REACT_APP_GOOGLE_API_KEY
                                        }
                                        onPlaceSelected={(place) => {
                                            formik.setFieldValue(
                                                "birthplace",
                                                place.formatted_address
                                            );
                                        }}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.birthplace}
                                        placeholder="Luogo di nascita"
                                    />
                                    {formik.touched.birthplace &&
                                    formik.errors.birthplace ? (
                                        <span className="error">
                                            {formik.errors.birthplace}
                                            <br />
                                            <br />
                                        </span>
                                    ) : null}
                                </div>
                                <div className="input-container input-container-date">
                                    <label>Data di nascita</label>
                                    <div className="date-wrapper">
                                        <div className="select-wrapper">
                                            <select
                                                name="birthday"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.birthday}
                                            >
                                                <option value="">Giorno</option>
                                                {days.map((item, index) => (
                                                    <option
                                                        key={index}
                                                        value={item}
                                                    >
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="select-wrapper">
                                            <select
                                                name="birthmonth"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.birthmonth}
                                            >
                                                <option value="">Mese</option>
                                                {months.map((item, index) => (
                                                    <option
                                                        key={index}
                                                        value={index + 1}
                                                    >
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="select-wrapper">
                                            <select
                                                name="birthyear"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.birthyear}
                                            >
                                                <option value="">Anno</option>
                                                {years.map((item, index) => (
                                                    <option
                                                        key={index}
                                                        value={item}
                                                    >
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    {(formik.errors.birthyear &&
                                        formik.touched.birthyear) ||
                                    (formik.errors.birthmonth &&
                                        formik.touched.birthmonth) ||
                                    (formik.errors.birthday &&
                                        formik.touched.birthday) ? (
                                        <span className="error">
                                            {formik.errors.birthyear ||
                                                formik.errors.birthmonth ||
                                                formik.errors.birthday}
                                            <br />
                                            <br />
                                        </span>
                                    ) : null}
                                </div>
                                <div className="input-container input-container-sex">
                                    <label>Sesso</label>
                                    <div className="radiobuttons">
                                        <div className="rdio rdio-primary radio-inline">
                                            <input
                                                type="radio"
                                                name="sex"
                                                id="radio1"
                                                onChange={formik.handleChange}
                                                value="1"
                                                defaultChecked
                                            />
                                            <label htmlFor="radio1">
                                                Maschio
                                            </label>
                                        </div>
                                        <div className="rdio rdio-primary radio-inline">
                                            <input
                                                type="radio"
                                                name="sex"
                                                id="radio2"
                                                onChange={formik.handleChange}
                                                value="0"
                                            />
                                            <label htmlFor="radio2">
                                                Femmina
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label>E-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className={
                                            formik.touched.email &&
                                            formik.errors.email
                                                ? "inputerror"
                                                : ""
                                        }
                                        placeholder="E-mail"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email &&
                                    formik.errors.email ? (
                                        <span className="error">
                                            {formik.errors.email}
                                            <br />
                                            <br />
                                        </span>
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
                                        placeholder="Password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
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
                                <div className="input-container">
                                    <label>Conferma password</label>
                                    <input
                                        type="password"
                                        name="repassword"
                                        className={
                                            formik.touched.repassword &&
                                            formik.errors.repassword
                                                ? "inputerror"
                                                : ""
                                        }
                                        placeholder="Conferma password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.repassword}
                                    />
                                    {formik.touched.repassword &&
                                    formik.errors.repassword ? (
                                        <span className="error">
                                            {formik.errors.repassword}
                                            <br />
                                            <br />
                                        </span>
                                    ) : null}
                                </div>
                                <div className="input-container">
                                    <label>Comune</label>
                                    <AutoComplete
                                        name="common"
                                        className={
                                            formik.touched.common &&
                                            formik.errors.common
                                                ? "inputerror"
                                                : ""
                                        }
                                        apiKey={
                                            process.env.REACT_APP_GOOGLE_API_KEY
                                        }
                                        onPlaceSelected={(place) => {
                                            setCommonValue(place);
                                            formik.setFieldValue(
                                                "common",
                                                place.formatted_address
                                            );
                                        }}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.common}
                                        placeholder="Comune"
                                    />
                                    {formik.touched.common &&
                                    formik.errors.common ? (
                                        <span className="error">
                                            {formik.errors.common}
                                            <br />
                                            <br />
                                        </span>
                                    ) : null}
                                </div>
                                <div className="checkbox-group">
                                    <label className="checkbox">
                                        <input
                                            type="checkbox"
                                            name="check1"
                                            className="visually-hidden"
                                            onChange={formik.handleChange}
                                            value={formik.values.check1}
                                            ref={check1Ref}
                                        />
                                        <span className="fake-label">
                                            Accetto{" "}
                                            <a target="_blank" href="/termini">
                                                i termini e condizioni di
                                                servizio
                                            </a>
                                        </span>
                                        {formik.touched.check1 &&
                                        formik.errors.check1 ? (
                                            <span className="error">
                                                {formik.errors.check1}
                                                <br />
                                                <br />
                                            </span>
                                        ) : null}
                                    </label>
                                    <label className="checkbox">
                                        <input
                                            type="checkbox"
                                            name="check2"
                                            className="visually-hidden"
                                            onChange={formik.handleChange}
                                            value={formik.values.check2}
                                            ref={check2Ref}
                                        />
                                        <span className="fake-label">
                                            Accetto{" "}
                                            <a target="_blank" href="/privacy">
                                                il trattamento dei dati
                                                personali
                                            </a>
                                        </span>
                                        {formik.touched.check2 &&
                                        formik.errors.check2 ? (
                                            <span className="error">
                                                {formik.errors.check2}
                                                <br />
                                                <br />
                                            </span>
                                        ) : null}
                                    </label>
                                    <label className="checkbox">
                                        <input
                                            type="checkbox"
                                            name="check3"
                                            className="visually-hidden"
                                            onChange={formik.handleChange}
                                            value={formik.values.check3}
                                            ref={check3Ref}
                                        />
                                        <span className="fake-label">
                                            Accetto{" "}
                                            <a target="_blank" href="/privacy">
                                                la profilazione dell’utente a
                                                mezzo cookie
                                            </a>
                                        </span>
                                        {formik.touched.check3 &&
                                        formik.errors.check3 ? (
                                            <span className="error">
                                                {formik.errors.check3}
                                                <br />
                                                <br />
                                            </span>
                                        ) : null}
                                    </label>
                                </div>
                                {loading ? (
                                    <button type="button" className="register">
                                        <div
                                            className="spinner-border text-secondary"
                                            role="status"
                                        >
                                            <span className="visually-hidden"></span>
                                        </div>
                                    </button>
                                ) : (
                                    <button type="submit" className="register">
                                        Registrati
                                    </button>
                                )}
                            </form>
                        </div>
                        <div className="col-md-6 col-sm-4 col-12 register-image">
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
        open === 1 || open === 2
            ? "modal message-modal visible"
            : "modal message-modal";

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
                                    Errore di registrazione
                                </h3>
                                <p>
                                    C’è stato un errore in fase di
                                    registrazione. <br />
                                    Ti preghiamo di contattarci telefonicamente
                                    o via email.
                                </p>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};
