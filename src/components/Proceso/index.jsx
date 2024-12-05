import RevealOnScroll from "../../utils/RevealOnScroll"

export default function Proceso() {

    return (
        <div className='mx-40 my-24'>

            <div className='flex flex-col lg:flex-row items-center py-0 lg:py-24 justify-around gap-6'>
                <div className='w-[320px] cursor-pointer p-6'>
                    <RevealOnScroll animacion={'animate-fade'} delay={0}>
                        <RevealOnScroll animacion={'animate-pulseOnAppear animate-color'} delay={900}>
                            <div className='w-12 h-12 bg-black/20 rounded-full mx-auto mb-6'></div>
                        </RevealOnScroll>
                        <RevealOnScroll animacion={'animate-pulseOnAppear'} delay={900}>
                            <div className='font-extrabold text-indigo-600/20 text-9xl absolute ml-48'>1</div>
                        </RevealOnScroll>
                        <p className='font-bold text-gray-900 text-lg'>Llamada para recopilar tus datos</p>
                        <p className='font-regular text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure impedit.</p>
                    </RevealOnScroll>
                </div>

                <div className='w-[320px] cursor-pointer p-6'>
                    <RevealOnScroll animacion={'animate-fade'} delay={300}>
                        <RevealOnScroll animacion={'animate-pulseOnAppear animate-color'} delay={1200}>
                            <div className='w-12 h-12 bg-black/20 rounded-full mx-auto mb-6 transition ease-in-out duration-300 hover:bg-indigo-600/80'></div>
                        </RevealOnScroll>
                        <RevealOnScroll animacion={'animate-pulseOnAppear'} delay={1200}>
                            <div className='font-extrabold text-indigo-600/20 text-9xl absolute ml-48'>2</div>
                        </RevealOnScroll>
                        <p className='font-bold text-gray-900 text-lg'>Configuración de servicios</p>
                        <p className='font-regular text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </RevealOnScroll>
                </div>

                <div className='w-[320px] cursor-pointer p-6'>
                    <RevealOnScroll animacion={'animate-fade'} delay={600}>
                        <RevealOnScroll animacion={'animate-pulseOnAppear animate-color'} delay={1500}>
                            <div className='w-12 h-12 bg-black/20 rounded-full mx-auto mb-6 transition ease-in-out duration-300 hover:bg-indigo-600/80'></div>
                        </RevealOnScroll>
                        <RevealOnScroll animacion={'animate-pulseOnAppear'} delay={1500}>
                            <div className='font-extrabold text-indigo-600/20 text-9xl absolute ml-48'>3</div>
                        </RevealOnScroll>
                        <p className='font-bold text-gray-900 text-lg'>Implementación de servicios</p>
                        <p className='font-regular text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quam fuga quos adipisci velit rem.</p>
                    </RevealOnScroll>
                </div>
            </div>

        </div>
    )
}