
const Alertas = ({mensaje}) => {
  return (
    <div className='mb-2 bg-red-600 p-2 rounded-sm'>
        <p className='text-white font-bold uppercase text-center'>
            {mensaje}
        </p>
    </div>
  )
}

export default Alertas