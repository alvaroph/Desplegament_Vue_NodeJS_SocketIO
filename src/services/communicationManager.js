//Aqui únicamente tenemos las funciones que se encargan de hacer las llamadas a la API REST
export async function getPeliculas(searchstring) {
  const response = await fetch(`http://www.omdbapi.com/?s=${searchstring}&apikey=19f8a30e`)
  const data = await response.json()
  return data.Search;
}

export async function infoDetallada(id) {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=19f8a30e`)
    const data = await response.json()
    return data;
  }