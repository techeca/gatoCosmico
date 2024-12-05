import grupo from '../../assets/images/grupo.png'
import Mycard from '../ui/MyCard'

export default function Hero() {

    return (
        <section className='flex text-gray-900 mx-10 md:mx-28 flex-col lg:flex-row md:flex-col select-none'>
            <div className='w-full lg:w-[50%] justify-center flex-col gap-3 flex animate-fade animate-once animate-ease-in'>
                <label className='mt-24 md:mt-24 sm:mt-24 lg:mt-0 font-bold self-start text-indigo-800 text-2xl'>Todo lo que necesitas en una sola plataforma.</label>
                <h1 className='z-50 font-extrabold text-4xl leading-[1.15] 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl'>
                    Administra tu negocio de una forma fácil y segura
                </h1>
                <h2 className='z-50 font-regular text-gray-500 text-xl my-6'>
                    Con las herramientas necesarias para controlar tu negocio de manera fácil e intuitiva podrás admnistrar mejor tu tiempo.
                </h2>
                <div className=''>
                    {/*<button className='px-20 py-4 bg-slate-800 text-white font-semibold text-lg'>Continuar</button>*/}
                    <button className='rounded-lg bg-indigo-700 text-lg text-white/90 py-4 px-20 shadow-md hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all duration-200 ease-in'>Continuar</button>
                </div>
                <div className='text-gray-500 flex gap-6 font-regular mt-8 self-start'>
                    <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-indigo-600">
                            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                        </svg>
                        <p className=''>Registro Gratuito</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-indigo-600">
                            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                        </svg>
                        <p className=''>Gran Servicio</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[50%] animate-fade-up animate-delay-300">
                {/*<img src={grupo} alt='' />*/}
                <div className='flex items-center justify-center mt-0 md:mt-24 object-cover scale-[70%] xl:scale-100 lg:scale-90 md:scale-90 sm:scale-[80%]'>
                    <div className=''>
                        <div className='flex gap-6 mb-6'>
                            <Mycard titulo={'Clientes'} cantidad={476} cantMax={1000} />
                            <Mycard titulo={'Mascotas'} cantidad={612} cantMax={1500} />

                            {/*componente de registro <div className='border-[1px] shadow-md rounded-lg p-6 absolute bg-white ml-[625px] w-[280px]'>
                            <p className='font-bold text-gray-700 text-xl text-center'>Zoe</p>
                            <div className='flex justify-between'>
                            <div>
                                <p className='font-bold text-sm'>Nombre:</p>
                                <p className='font-bold text-sm'>Fecha Registro:</p>
                                <p className='font-bold text-sm'>Fecha Nacimiento:</p>
                                <p className='font-bold text-sm'>Última Atención:</p>
                                <p className='font-bold text-sm'>Dueño:</p>
                            </div>
                            <div className='text-end'>
                                <p className='font-regular text-sm'>Zoe</p>
                                <p className='font-regular text-sm'>14-02-2024</p>
                                <p className='font-regular text-sm'>14-02-2024</p>
                                <p className='font-regular text-sm'>14-02-2024</p>
                                <p className='font-regular text-sm'>Jim Vásquez</p>
                            </div>
                            </div>
                        </div>*/}

                        </div>

                        <div className='absolute mt-[-162px] ml-[500px] bg-white border-[1px] w-[125px] rounded-lg p-3 shadow-md'>
                            <div className='flex justify-between'>
                                <p className='font-bold text-sm text-gray-700'>Marzo de 2024</p>
                            </div>
                            <div className='flex mt-1'>
                                <div className=''>
                                    <p className='font-regular text-xs'>Total de clientes</p>
                                    <div className='flex items-center justify-between mt-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-red-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        <p className='font-semibold text-3xl text-gray-700'>152</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='absolute mt-[-32px] ml-[460px] bg-white border-[1px] w-[165px] rounded-lg p-3 shadow-md'>
                            <div className='flex items-center justify-between'>
                                <p className='font-bold text-sm text-gray-700'>20 de Marzo de 2024</p>
                            </div>
                            <div className='flex mt-1'>
                                <div className=''>
                                    <p className='font-regular text-xs'>Total de clientes</p>
                                    <div className='flex items-center justify-between mt-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-red-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        <p className='font-semibold text-3xl text-gray-700'>7</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='absolute mt-24 ml-[325px] bg-white border-[1px] w-[300px] rounded-lg p-3 shadow-lg'>
                            <div className='flex items-center justify-between'>
                                <p className='font-bold text-sm text-gray-700'>Nueva hora reservada</p>
                                <div className='hover:bg-gray-500/20 px-1 py-1 rounded-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 my-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                                <div className='text-xs ml-2'>
                                    <p className='font-semibold'>Jim Vásquez</p>
                                    <p className='font-regular'>Ha reservado una cita el día <span className='text-green-500 cursor-pointer'>14-02-2024</span></p>
                                </div>
                            </div>
                        </div>

                        <div className='absolute mt-56 ml-[325px] bg-white border-[1px] w-[300px] rounded-lg p-3 shadow-lg'>
                            <div className='flex items-center justify-between'>
                                <p className='font-bold text-sm text-gray-700'>Tarea realizada</p>
                                <div className='hover:bg-gray-500/20 px-1 py-1 rounded-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                            <div className='flex items-center'>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 my-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                </svg>

                                <div className='text-xs ml-2'>
                                    <p className='font-semibold'>NOTIFICACIÓN MASIVA</p>
                                    <p className='font-regular'>Se ha notificado a los <span className='text-blue-500 cursor-pointer'>Clientes</span></p>
                                </div>
                            </div>
                        </div>

                        <div className='border-[1px] bg-white shadow-lg rounded-lg w-[600px] h-[480px] p-6'>
                            <div className='flex justify-between'>
                                <p className='font-extrabold text-lg text-gray-800'>Atenciones Recientes</p>
                                <button className='border-2 text-gray-400 hover:text-gray-500 rounded-lg px-3 py-1 text-sm font-semibold'>Ver más</button>
                            </div>
                            <div className='w-full bg-indigo-50 rounded-lg h-[87%] mt-6 p-6'>

                                <div className='bg-white rounded-lg p-3 border-[1px]'>
                                    <div className='flex justify-between'>
                                        <div className='text-sm'>
                                            <p className='font-bold text-gray-600'>Nombre: <span className='font-regular'>Zoe</span></p>
                                            <p className='font-bold'>Dueño: <span className='font-regular'>Jim Vásquez</span></p>
                                            <p className='font-bold'>Última Atención: <span className='font-regular'>14-02-2024</span></p>
                                        </div>
                                        <div className='w-12 h-12 self-center rounded-full bg-yellow-200/80 border-yellow-400/30 border-2 flex items-center justify-center'>
                                            <p className='text-yellow-400 font-semibold'>Z</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white rounded-lg p-3 mt-6 border-[1px]'>
                                    <div className='flex justify-between'>
                                        <div className='text-sm'>
                                            <p className='font-bold'>Nombre: <span className='font-regular'>Cleo</span></p>
                                            <p className='font-bold'>Dueño: <span className='font-regular'>Jim Vásquez</span></p>
                                            <p className='font-bold'>Última Atención: <span className='font-regular'>14-02-2024</span></p>
                                        </div>
                                        <div className='w-12 h-12 self-center rounded-full bg-red-200/80 border-red-400/30 border-2 flex items-center justify-center'>
                                            <p className='text-red-300 font-semibold'>C</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white rounded-lg p-3 mt-6 border-[1px]'>
                                    <div className='flex justify-between'>
                                        <div className='text-sm'>
                                            <p className='font-bold'>Nombre: <span className='font-regular'>Amelia</span></p>
                                            <p className='font-bold'>Dueño: <span className='font-regular'>Vecina</span></p>
                                            <p className='font-bold'>Última Atención: <span className='font-regular'>14-02-2024</span></p>
                                        </div>
                                        <div className='w-12 h-12 self-center rounded-full bg-blue-200/80 border-blue-400/30 border-2 flex items-center justify-center'>
                                            <p className='text-blue-300 font-semibold'>A</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}