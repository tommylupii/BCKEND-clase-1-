let modo = "calculos"

async function ejemploImport(){
  if (modo = "caluclos"){
    const {default: calculadora} = await import("./calculadora")
    let Calculadora = new calculadora

    console.log(Calculadora.sumar(2,3))
    console.log(Calculadora.restar(2,3))
  }
}

ejemploImport()