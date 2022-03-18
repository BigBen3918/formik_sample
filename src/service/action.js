/** @format */
import googleMapAPI from "./googleMap";

// API Connection
const getCityName = async (param) => {
    return await googleMapAPI.post("/json?" + param);
};

const Action = {
    getCityName,
};

export default Action;
