import axios from "axios";

const GOOGLEAPI = "https://maps.googleapis.com/maps/api/place/autocomplete";

export default axios.create({
    baseURL: GOOGLEAPI,
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});
