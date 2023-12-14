const elementExist = (id) => document.getElementById(id) ? true : false

const createPet = async(pet)=> {
  const response = await fetch("http://localhost:8080/api/pet", {
    method: "POST",
    Headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pet)
  })
  const data = await response.json()
  alert(data.message)
}

if(elementExist){
  const button = document.getElementById("createPet")
  button.addEventListener("click", () => {
    const name = document.getElementById("name").value
    const tipo = document.getElementById("tipo").value
    const age = document.getElementById("age").value
    createPet({
      name,
      tipo,
      age,
    })
  })
}