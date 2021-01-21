const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=11c946d851e08887f42bdf0fe71aee58&units=metric`)

    return resp.data.main.temp;
}
module.exports = {
    getClima
}