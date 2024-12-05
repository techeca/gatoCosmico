import RevealOnScroll from "../../utils/RevealOnScroll";

export default function Weoffer() {

    return (
        <div className='mx-20 my-14 flex justify-center items-center flex-col mb-20'>
            <RevealOnScroll animacion={'animate-fade'} delay={100}>
                <div className='w-[480] md:w-[720px] rounded-xl font-regular bg-[#16012C] my-12 text-center text-white'>
                    <div className='py-16 mx-28'>
                        <p className='text-3xl font-extrabold my-6 leading-relaxed'>LLeva tu producto a otro nivel</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dicta debitis sit beatae pariatur.</p>
                        <button className='px-12 py-3 bg-red-400 text-white rounded-3xl my-6 font-semibold hover:bg-red-300 hover:scale-105 transition-all duration-200 ease-in'>Comenzar</button>
                    </div>
                </div>
            </RevealOnScroll>

            <RevealOnScroll animacion={'animate-fade'} delay={400}>
                <h1 className='text-3xl font-extrabold text-gray-900 mt-6 text-center'>Haz crecer tu negocio más rápido.</h1>
                <p className='max-w-[500px] text-center mt-4 font-regular'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia consequatur, facilis animi illum eligendi.</p>
            </RevealOnScroll>
        </div>
    )
}