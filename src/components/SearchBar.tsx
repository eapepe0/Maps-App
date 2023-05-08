import { ChangeEvent, useRef } from "react"

export const SearchBar = () => {

    const debounceRef = useRef <NodeJS.Timeout>()

    const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) =>{
        if(debounceRef.current){ //* si el temporizador esta funcionando
            clearTimeout(debounceRef.current) //* borramos el temporizador
        }

        debounceRef.current = setTimeout(() => {
            console.log("debounced value :" , event.target.value)
        }, 400);
        
    }


  return (
    <div className="search-container">
       <input type="text" className="form-control" placeholder="Buscar lugar..." onChange={onQueryChanged}/>
    </div>
  )
}
