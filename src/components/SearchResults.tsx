import { useContext } from "react"
import { MapContext, PlacesContext } from "../context"
import { IsLoadingPlaces } from "./IsLoadingPlaces"

export const SearchResults = () => {
    const { map , isMapReady } = useContext ( MapContext )
    const { places,isLoadingPlaces } = useContext(PlacesContext)

/*     const onClick = (coords ) =>{
        map?.flyTo({
            zoom: 14,
            center : coords
        })
    } */

    if(isLoadingPlaces){
        return (
           <IsLoadingPlaces/>
        )
    }

    
    return (
    <ul className={`list-group ${places.length ===0  ?  ""  :  'mt-3' }`}>
        {
            places.map(place => (
        <li className="list-group-item list-group-item-action" key={place.id}>
            <h6>{place.text}</h6>
            <p className="text-muted" style={{ fontSize : "12px"}}>
                {place.place_name}
            </p>
            <button className='btn btn-outline-primary btn-sm' /* onClick= {() => onClick(place.center)} */>
                Direcciones
            </button>
        </li>
    ))}
    </ul>
  )
}
