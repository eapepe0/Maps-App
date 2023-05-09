import axios from 'axios'


const directionsApi = axios.create({
    baseURL : "https://api.mapbox.com/directions/v5/mapbox/driving",
    params : {
        alternatives : true ,
        language : 'es',
        annotations : "distance%2Cduration",
        continue_straight : false,
        geometries : "geojson",
        overview : "full" ,
        steps : false,
        access_token : "pk.eyJ1IjoiY29sb3NpbiIsImEiOiJjbGhlZ2IxcDcwbnB5M2VyNDM5Mm9sNnd3In0.gyXmaoiedRrHeG88ReH3Xg"
    }
})

export default directionsApi;