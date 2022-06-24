const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombre, propietario, correo, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('¿Estas seguro de eliminar el usuario?')
        if (respuesta) {
            eliminarPaciente(id)
        }
    }

  return (
    <div className="m-4 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Correo electronico: {''}
        <span className="font-normal normal-case">{correo}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
        <span className="font-normal normal-case">{fecha}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
    </p>
    <div className="flex justify-between mt-8">
        <button type="button" 
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-sm"
        onClick={ () => setPaciente(paciente)}>Editar</button>
        <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-sm"
        onClick={ handleEliminar }>Eliminar</button>
    </div>
</div>
  )
}

export default Paciente