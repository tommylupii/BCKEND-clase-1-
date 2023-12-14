let estudianteUno = {
  nombre: "luis",
  apellidos: "perez",
  edad: 25,
  materias: ["mate", "fisica","quimica"],
  getNombreCompleto: function(){
    return `${this.nombre} ${this.apellido}`
  },
  getMaterias: function(){
    this.materias.forEach((materia) => {
      console.log(materia)
    })
  }
}

// let obteniendoLaLlave = Object.keys(estudianteUno)

// console.log(obteniendoLaLlave)
// obteniendoLaLlave.forEach((llave) => {
//   console.log(estudianteUno[llave])
// })

// console.log(estudianteUno.nombre)
// console.log(estudianteUno.apellidos)
// console.log(estudianteUno.materias)
// console.log(estudianteUno.edad)

console.log(Object.values(estudianteUno))
console.log(Object.entries(estudianteUno))