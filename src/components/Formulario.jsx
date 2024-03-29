import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, setPaciente, paciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)

    } else {
      console.log("No hay nada")
    }
  },[paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random+fecha;
  }

  const handleSubmit = (e) => {
    // Evitar que se refresque la pagina
    e.preventDefault();

    // Validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Hay almenos un campo vacio')

      setError(true)
      return;
    } 
    setError(false)

    // Objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if(paciente.id){
      // Editando el registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map((pacienteState) => {
        if(pacienteState.id === paciente.id){
          return(objetoPaciente)
        } else {
          return(pacienteState)
        }
      })
      
      setPacientes(pacientesActualizados)
      setPaciente({})
      
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    // Funcion para reiniciar el form
    reiniciarForm()
  }

  const reiniciarForm = () => {
    // Reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setSintomas('')
    setFecha('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

      <p className="text-lg mt-5 text-center mb-8">
        Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && 
          <Error>
            Todos los campos son obligatorios
          </Error>
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            placeholder="Nombre de la mascota"
            id="mascota"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="text" 
            placeholder="Nombre del propietario"
            id="propietario"
            onChange={(e) => setPropietario(e.target.value)}
            value={propietario}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="email"
            placeholder="Email contacto propietario"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            type="date" 
            id="alta"
            onChange={(e) => setFecha(e.target.value)}
            value={fecha}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="sintomas" 
            placeholder="Describe los sintomas"
            onChange={(e) => setSintomas(e.target.value)}
            value={sintomas}
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-colors"
          value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
        />
      </form>
    </div>
  )
}

export default Formulario
