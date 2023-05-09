import { useContext, useState } from "react"
import { MapContext, PlacesContext } from "../context"
import { Feature } from "../interfaces/places"
import { IsLoadingPlaces } from "./IsLoadingPlaces"

export const SearchResults = () => {
    const { map , isMapReady } = useContext ( MapContext )
    const { places,isLoadingPlaces } = useContext(PlacesContext)

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

    
    return (
    <ul className={`list-group ${places.length === 0  ?  ""  :  'mt-3' }`}>
        {
            places.map(place => (
        <li className={`list-group-item list-group-item-action pointer ${activeId === place.id  ?  'active'  :  "" }`} key={place.id} >
            <h6>{place.text}</h6>
            <p className={`${activeId === place.id  ?  'text-selected text-reset'  :  "" } text-muted `} style={{fontSize: "12px"}}>
                {place.place_name}
            </p>
            <button className={`btn  btn-sm ${activeId === place.id  ?  'btn-outline-light'  :  "btn-outline-primary" }`} onClick= {() => onPlaceClicked(place)}>
                Direcciones
            </button>
        </li>
    ))}
    </ul>
  )
}
