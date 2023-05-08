import axios from 'axios'


const searchApi = axios.create({
    baseURL : "https://api.mapbox.com/geocoding/v5/mapbox.places/",
    params : {
        limit : 5 ,
        language : 'es',
        access_token : "pk.eyJ1IjoiY29sb3NpbiIsImEiOiJjbGhlZ2IxcDcwbnB5M2VyNDM5Mm9sNnd3In0.gyXmaoiedRrHeG88ReH3Xg"
    }
})

export default searchApi;