import { Map, Marker, Popup } from 'mapbox-gl'
import { useContext, useEffect, useReducer } from 'react'
import { PlacesContext } from '../places/PlacesContext';
import { MapContext } from './MapContext'
import { mapReducer } from './mapReducer'

export interface MapState {
    isMapReady : boolean;
    map? : Map ;
    markers : Marker[];
}

const INITIAL_STATE : MapState = {
    isMapReady : false ,
    map : undefined,
    markers : [],
}

interface Props {
    children : JSX.Element | JSX.Element[]
}

export const MapProvider = ({ children } : Props) => {
    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
    const { places } = useContext (PlacesContext)

    useEffect(() => {
      state.markers.forEach(marker => marker.remove())     ;
      const newMarkers  : Marker[] = [];

      for (const place of places) {
        const [ lng , lat ] = place.center;

        const popup = new Popup()
        .setHTML(`
        <h6>${place.text}</h6>
        <p>${place.place_name}</p>
        `)

        const newMarker = new Marker()
        .setPopup(popup)
        .setLngLat([lng , lat])
        .addTo(state.map!)

        newMarkers.push(newMarker)

      }
      dispatch({type : 'setMarkers', payload :newMarkers})

    }, [ places ])
    

    const setMap = ( map : Map ) =>{
        
        const myLocationPopup = new Popup()
        .setHTML(`
            <h4>Aqui estoy</h4>
            <p>En algun lugar del mundo.</p>
        `)
        new Marker({
            color: "#61DAFB"
        })
        .setLngLat( map.getCenter() )
        .setPopup( myLocationPopup )
        .addTo( map )
        
        dispatch({ type : 'setMap' , payload : map })
    }

    const getRouteBetweenPoints = async (start : [number , number] , end : [number , number] ) =>{

    }
    return (
        <MapContext.Provider value = {{
            ...state ,
            setMap,
        }}>
            {children}
        </MapContext.Provider>
    )
}
