
const filterName = (data, name = "") => {
   name.toLocaleLowerCase()
   return data.filter(peli => peli.name.toLocaleLowerCase().includes(name))
}

export default filterName