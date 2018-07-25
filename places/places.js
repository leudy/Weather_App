const axios = require('axios');

const getLatitudAndLongitudByPlace = async(adress) => {


    let encondeUrl = encodeURI(adress);
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultado para esta ciudad', adress);
    }

    let result = response.data.results[0];
    let mylocation = result.geometry.location;

    return { address: result.formatted_address, lag: mylocation.lat, lng: mylocation.lng }


    // console.log('nombre completo :', result.formatted_address);
    // console.log(`Mi latitud es: ${mylocation.lat} y mi longitud ${mylocation.lng}`);




}

module.exports = { getLatitudAndLongitudByPlace }