import { useEffect, useState } from "react";
import getData from "./helpers/getData";
import NavComponent from './components/NavComponent'
import Pintarcard from "./components/Pintarcard";
import UseForm from "./hook/UseForm";
import filterName from "./components/filterName"

function App() {
  const [busqueda, handleChange] = UseForm({
    search: ''
  })
  const { search } = busqueda;
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
      .then(res => setData(res))
  }, [])

  const filtro = filterName(data, search);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(filtro)
  }

  return (
    <>
      <NavComponent change={handleChange} submi={handleSubmit} />

      <div className="container d-flex flex-wrap mt-3 justify-content-center">
        {data.map(peli => (
          <Pintarcard key={peli.id} {...peli} />
        ))
        }
      </div>

    </>
  );
}

export default App;
