const places = require('./places/places')
const Weather = require('./Weather/Weather')
const colors = require('colors');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(someplaces) => {
    try {
        let coors = await places.getLatitudAndLongitudByPlace(someplaces);
        let tempeture = await Weather.getClima(coors.lag, coors.lng);
        return `El clima de ${ coors.address } es de ${tempeture.temp} y su temparura minima es de ${tempeture.Min} y maxima de ${tempeture.Max}`;

    } catch (e) {
        return `No se pudo determinar el clima en ${someplaces}`;

    }
    let coors = await places.getLatitudAndLongitudByPlace(someplaces);
    let tempeture = await Weather.getClima(coors.lag, coors.lng);
    return `El clima de ${ coors.address } es de ${tempeture.temp} y su temparura minima es de ${tempeture.Min} y maxima de ${tempeture.Max}`;
}

getInfo(argv.direccion).then(msj => console.log(msj)).catch(e => console.log(e))