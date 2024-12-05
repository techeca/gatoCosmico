export default function Navigation(){

    const nombre = 'LOGO'

    return(
        <nav className='border-0 mx-5 md:mx-28 lg:mx-28 mt-8 flex text-gray-900 bg-white'>
           
            <div className='basis-1/4 flex items-center'>
            <a className='font-extrabold text-gray-900 text-xl cursor-pointer'>{nombre}</a >
            </div>
            <ul className='basis-1/2 flex gap-6 md:gap-10 justify-center items-center font-semibold text-sm'>
                <li className='cursor-pointer hover:text-gray-900/70 '>Productos</li>
                <li className='cursor-pointer hover:text-gray-900/70 '>Características</li>
                <li className='cursor-pointer hover:text-gray-900/70 hidden'>Precios</li>
            </ul>
            <div className='basis-1/4 flex justify-end self-end gap-6 text-sm font-semibold'>
                <button disabled className='px-8 py-4 rounded-lg cursor-not-allowed hidden md:block'>Ingresar</button>
                <button className='bg-indigo-700 text-white px-2 py-2 rounded-lg hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all duration-200 ease-in'>Prueba Gratis</button>
            </div>

        </nav>
    )
}