import { useContext, useState } from "react"
import { MapContext, PlacesContext } from "../context"
import { Feature } from "../interfaces/places"
import { IsLoadingPlaces } from "./IsLoadingPlaces"

export const SearchResults = () => {
    const { map , getRouteBetweenPoints } = useContext ( MapContext )
    const { places,isLoadingPlaces , userLocation} = useContext(PlacesContext)

    const [activeId , setActiveId] = useState('');

    const onPlaceClicked = (place : Feature ) =>{
        setActiveId(place.id)
        const [ lng ,lat ] = place.center;
        map?.flyTo({
            zoom: 14,
            center : [lng , lat ]
        })
    }

    if(isLoadingPlaces){
        return (
           <IsLoadingPlaces/>
        )
    }

    const getRoute = (place : Feature) =>{
        if (!userLocation) return;
        const [lng , lat] = place.center
        getRouteBetweenPoints(userLocation , [lng , lat])
    }
    
    return (
    <ul className={`list-group ${places.length === 0  ?  ""  :  'mt-3' }`}>
        {
            places.map(place => (
        <li className={`list-group-item list-group-item-action pointer ${activeId === place.id  ?  'active'  :  "" }`} key={place.id} onClick= {() => onPlaceClicked(place)}>
            <h6>{place.text}</h6>
            <p className={`${activeId === place.id  ?  'text-selected text-reset'  :  "" } text-muted `} style={{fontSize: "12px"}}>
                {place.place_name}
            </p>
            <button className={`btn  btn-sm ${activeId === place.id  ?  'btn-outline-light'  :  "btn-outline-primary" }`} onClick= {() => getRoute(place)}>
                Direcciones
            </button>
        </li>
    ))}
    </ul>
  )
}
