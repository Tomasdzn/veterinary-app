const Paciente = ({ datos, setPaciente, eliminarPaciente }) => {
  const {nombre, propietario, email, fecha, sintomas, id} = datos
  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?')
    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <div className="ml-5 mr-1 my-10 bg-white shadow-md px-5 py-5 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex">
        <button 
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 
        text-white font-bold uppercase rounded-lg" 
          type="button"
          onClick={() => setPaciente(datos)}>
          Editar
        </button>
        <button 
          className="py-2 px-10 bg-red-600 hover:bg-red-700 
        text-white font-bold uppercase rounded-lg ml-2" 
          type="button" 
          onClick={handleEliminar}>
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
