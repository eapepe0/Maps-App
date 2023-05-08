import mapboxgl from "mapbox-gl"

import { useContext, useLayoutEffect, useRef } from "react"
import { PlacesContext , MapContext } from "../context"

import { Loading } from "./Loading"

export const MapView = () => {

    const {isLoading, userLocation} = useContext(PlacesContext) //* sacamos del contexto isLoading y la ubicacion

    const { isMapReady , setMap } = useContext(MapContext)

    const mapDiv = useRef<HTMLDivElement>( null ); //* se va a usar este div como contenedor del mapa

    useLayoutEffect(() => { //* una vez que se haya renderizado el componente
      if (!isLoading){ //* si termino de cargar
        const map = new mapboxgl.Map({
            container: mapDiv.current!, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: userLocation, // starting position [lng, lat]
            zoom: 14, // starting zoom
            });
            setMap ( map );
      }
    }, [isLoading]) //* solo se ejecuta si isLoading cambia


    if (isLoading){ //* si se esta obteniendo la ubicacion
        return(<Loading/>) //*  mostramos el componente de carga
    }
    return (
        <div ref={mapDiv} style={{
            height : '100vh',
            left : 0,
            position : 'fixed',
            top : 0,
            width : '100vw' 
        }}> {/* mostramos el mapa en toda la pantalla */}
            {userLocation?.join(',')}
        </div>
    )
}
