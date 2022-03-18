import db from "./firebase";
import { doc, Timestamp, setDoc } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import moment from "moment";
import axios from "axios";

const auth = getAuth();

const createUser = async (param) => {
    try {
        var city = "";
        var province = "";
        var country = "";
        var postal_code = "";
        for (var i = 0; i < param.commonValue.address_components.length; i++) {
            var address = param.commonValue.address_components;
            switch (address[i].types[0]) {
                case "locality":
                    city = address[i].long_name;
                    break;
                case "administrative_area_level_1":
                    province = address[i].short_name;
                    break;
                case "country":
                    country = address[i].short_name;
                    break;
                default:
                    break;
            }
        }
        const result = await axios.post(
            "https://maps.googleapis.com/maps/api/geocode/json?key=" +
                process.env.REACT_APP_GOOGLE_API_KEY +
                "&place_id=" +
                param.commonValue.place_id
        );
        for (
            var i = 0;
            i < result.data.results[0].address_components.length;
            i++
        ) {
            var address = result.data.results[0].address_components;
            if (address[i].types[0] === "postal_code") {
                postal_code = address[i].long_name;
            }
        }
        const actionCodeSettings = {
            url: process.env.REACT_APP_REDIRECT_URL,
            handleCodeInApp: true,
        };
        const data = await createUserWithEmailAndPassword(
            auth,
            param.values.email,
            param.values.password
        );

        const birthday = moment(
            param.values.birthmonth +
                "-" +
                param.values.birthday +
                "-" +
                param.values.birthyear
        );

        await setDoc(doc(db, "utenti", data.user.uid), {
            c_Denominazione:
                param.values.firstname + " " + param.values.lastname,
            c_Cognome: param.values.lastname,
            c_Nome: param.values.firstname,
            c_Classificazione_Utente: "1. Neofita del riuso",
            c_Livello_Affidabilità: "3. Affidabile",
            c_Stato: "Attivo",
            c_Registrato_Tramite: "Sito Web",
            c_Data_Registrazione: Timestamp.fromDate(new Date()),
            c_Mailing_List: null,
            c_CF: param.values.fiscalcode,
            c_Luogo_Nascita: param.values.birthplace,
            c_Data_Nascita: birthday._d,
            c_Sesso: param.values.sex === "1" ? "M" : "W",
            c_CAP: postal_code,
            c_Comune: city,
            c_Provincia: province,
            c_Regione: country,
            c_Email: param.values.email,
            c_Profilo: "Utente",
            c_Territorio: city + " " + "(" + province + ")",
            c_Username: param.values.email,
            c_Consenso_Trattamento_Dati: param.values.check1,
            c_Consenso_Termini_Servizio: param.values.check2,
            c_Consenso_Profilazione: param.values.check3,
        });

        await sendEmailVerification(data.user, actionCodeSettings);
        return 1;
    } catch (err) {
        // if (err.code === "auth/email-already-in-use") return 2;
        // else return 3;
        return 2;
    }
};

const normalLogin = async (param) => {
    try {
        console.log(param);
    } catch (err) {
        console.log(err);
    }
};

const Firebase = {
    createUser,
    normalLogin,
};

export default Firebase;
