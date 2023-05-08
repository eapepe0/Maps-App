

export const getUserLocation = async() : Promise <[number , number]> =>{

    //* devolvemos una nueva promesa que resuelve o rechaza dependiendo del resultado
    return new Promise((resolve , reject) => {
        navigator.geolocation.getCurrentPosition(
            ({coords})=>{ //* desestructuramos de lo que devuelve el successCallback las coordinadas
                resolve( [ coords.longitude , coords.latitude ] )
                //* si se resuelve devolvemos una longitud y latitud
            },
            (err) =>{ //* sino pudimos obtener la ubicacion
                alert("No se pudo obtener la geolocalizacion");
                console.log(err)
                reject(); //* Esta línea rechaza la promesa, lo que significa que la función getUserLocation devolverá un valor de rechazo en lugar de un valor resuelto.
            }
        )
    })
}