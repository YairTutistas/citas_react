import { useEffect, useState } from 'react'
import Header from "./components/header"
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"

function App() {
  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(INITIAL);
  const [paciente, setPaciente] = useState({});

  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizado = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizado)
  }

  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="md:flex mt-10">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}/>
        
        <ListadoPaciente
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
         />
      </div>

    </div>
  )
}

export default App
