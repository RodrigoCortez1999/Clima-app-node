const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);
    console.log(encodedUlr);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUlr}`,
        headers: { 'X-RapidAPI-Key': 'f9e61915e3msh574ea8cdbf20c2bp14126ajsn21ff53de3140' }
    });

    const resp = await instance.get();

    if (resp.data.sys.length === 0) {
        throw new Error(`Error!! no hay resultados para${dir}`);
    }

    const data = resp.data.sys;
    const direccion = resp.data.sys.country;
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon;

    return {
        direccion,
        lat,
        lng,
    }

}
module.exports = {
    getLugarLatLng
}