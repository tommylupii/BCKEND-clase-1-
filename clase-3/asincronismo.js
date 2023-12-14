const respuesta = async function llamada(){
  try{
    const respuesta = await fetch("https://rickandmortyapi.com/api/character")
    const data = await respuesta.json()
    console.log(data.results[0].name)
  } catch (error){
    console.log("error", error)
  }
}

respuesta()