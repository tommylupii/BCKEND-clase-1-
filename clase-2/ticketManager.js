class ticketManager {
  eventos;
  #precioBaseDeGanancia = 0.15;
  static ultimoId = 0;
  constructos(){
    this.eventos = []
  }

  getEventos(){
    return this.eventos
  }

  agregarEvento (nombre, lugar, precio, capacidad=50, fecha = new Date()){
    ticketManager.ultimoId++;
    const evento = {
      id: ticketManager.ultimoId,
      nombre,
      lugar,
      precio,
      capacidad,
      fecha,
      participantes: [],
    }

    this.eventoS.push(evento)
  }

  agregarUsuario(idEvento, idUsuario){
    if(!idEvento || !idUsuario){
      throw new Error("Faltan datos")
    }

    const evento = this.eventos.find((datos) => datos.id === idEvento)

    const isAlreadyAdded = evento.participantes.find((id)=> id === idUsuario)

    if(evento && !isAlreadyAdded){
      evento.participantes.push(idUsuario)
    }
  }

  eventoGira(idEvento, newLocation, newDate){
    const eventoOriginal = this.eventos.find((evento)=> evento.id === idEvento)

    return {
      ...eventoOriginal,
      id: idEvento,
      fecha: newDate,
      lugar: newLocation,
    }
  }
}

const TicketManager = new ticketManager()

TicketManager.agregarEvento(
  "evento de prueba",
  "bs as",
  9999,
  100,
  new Date(),
)

TicketManager.agregarUsuario(1, "luis")

console.log(TicketManager.getEventos())