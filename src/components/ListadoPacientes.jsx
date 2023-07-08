import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (

        <>
          <h2 className="font-black text-xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
    
          {pacientes.map((datos) => {
            return(
              <Paciente 
                key={datos.id}
                datos={datos}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )
          })}
        </>

      ) : (
        
        <>
          <h2 className="font-black text-xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">y apareceran aqui</span>
          </p>
    
          {pacientes.map((datos) => {
            return(
              <Paciente 
                key={datos.id}
                datos={datos}
                setPaciente={setPaciente}
              />
            )
          })}
        </>

      )}
      
    </div>
    
  )
}

export default ListadoPacientes
