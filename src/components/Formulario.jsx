import {useState, useEffect} from 'react';
import Alertas from './Alertas';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [correo, setCorreo] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect( () => {
        if( Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setCorreo(paciente.correo)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return fecha + random;
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación formulario
        if( [nombre, propietario, correo, fecha, sintomas].includes('')) {
            setError(true)
            return;
        }
        setError(false)

        const objetoPacientes = {
            nombre, 
            propietario, 
            correo, 
            fecha, 
            sintomas,
        }

        if (paciente.id) {

            // Editar paciente
            objetoPacientes.id = paciente.id
            const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id 
                ? objetoPacientes : pacienteState)

            setPacientes(pacienteActualizado)
            setPaciente=({})
        } else {

            // Crear paciente
            objetoPacientes.id = generarId();
            setPacientes([...pacientes, objetoPacientes])
        }

        // Limpiar campos
        setNombre('')
        setPropietario('')
        setCorreo('')
        setFecha('')
        setSintomas('')
    }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-center text-3xl">
            Seguimiento Pacientes
        </h2>
        <p className="mt-5 text-lg text-center mb-10">
            Añade pacientes {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md py-10 px-5 mb-3">
            { error && <Alertas mensaje="Todos los campos son obligatorios"/> }
            <div className="mb-4">
                <label htmlFor="nombre" className="block uppercase font-bold">Nombre Mascota</label>
                <input 
                type="text"
                id="nombre"
                placeholder="Nombre mascota"
                className="border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md"
                value={nombre}
                onChange={ (e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="propietario" className="block uppercase font-bold">Nombre propietario</label>
                <input 
                type="text"
                id="propietario"
                placeholder="Nombre propietario"
                className="border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md"
                value={propietario}
                onChange={ (e) => setPropietario(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block uppercase font-bold">Correo electronico</label>
                <input 
                type="email"
                id="email"
                placeholder="Correo electronico"
                className="border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md"
                value={correo}
                onChange={ (e) => setCorreo(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="alta" className="block uppercase font-bold">Alta</label>
                <input 
                type="date"
                id="alta"
                className="border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md"
                value={fecha}
                onChange={ (e) => setFecha(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="sintomas" className="block uppercase font-bold">Sintomas</label>
                <textarea 
                name="" 
                id="sintomas" 
                cols="30" 
                rows="3"
                placeholder="Describe los sintomas"
                className="border-2 w-full p-2 mt-2 placeholder-orange-400 rounded-md"
                value={sintomas}
                onChange={ (e) => setSintomas(e.target.value)} />
            </div>
            <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
            value={paciente.id ? 'Editar paciente' : 'Agregar paciente'} />
        </form>
    </div>
  )
}

export default Formulario