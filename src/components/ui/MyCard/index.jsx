export default function Mycard({titulo, cantidad, cantMax}){
    const porcentaje = (cantidad / cantMax * 100)

    const strporct = `w-[${porcentaje.toFixed()}%]`

    const colorsh = {
        Clientes:'bg-blue-600/80',
        Mascotas:'bg-yellow-500/80',
        Ventas:'bg-red-600/80'
    }

    const colorshtxt = {
        Clientes:'text-blue-600/80',
        Mascotas:'text-yellow-500/80',
        Ventas:'text-red-600/80'
    }

    return(
        <div className='font-regular shadow-md border-[1px] rounded-lg w-72 p-6 h-36 bg-white'>
            <p className='text-gray-800 font-semibold'>{titulo}</p>
            
            <div className='flex justify-between'>
                <div className='flex'>
                <p className='text-gray-800 my-2 text-2xl font-extrabold'>{cantidad}</p>
                <p className='text-gray-800 my-2 text-sm'>/{cantMax}</p>
                </div>
                <div className={`flex items-center ${colorshtxt[titulo]}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                    <p className='text-lg font-bold'>{porcentaje.toPrecision(4)}%</p>
                </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4">
                <div className={`${colorsh[titulo]} h-4 rounded-full w-[50%]`}></div>
            </div>
            
        </div>
    )
}