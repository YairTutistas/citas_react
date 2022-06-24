import Paciente from "./Paciente"

const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Paciente</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              administra tus {''}
              <span className="text-indigo-600">Pacientes y Citas</span>
          </p>

          {/* Iteramos y recorremos el arreglo */}
          { pacientes.map( paciente => (
            <Paciente
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
          ))}        
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
              administra tus {''}
              <span className="text-indigo-600">Pacientes y Citas</span>
          </p>        
        </>
      )}

        
    </div>
  )
}

export default ListadoPaciente