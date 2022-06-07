import { useState } from "react"

const UseForm = (initialState = {}) => {
   const [busqueda, setBusqueda] = useState(initialState);

   const handleChange = ({ target }) => setBusqueda({
      ...busqueda,
      [target.name]: target.value
   })

   return [busqueda, handleChange]
}

export default UseForm