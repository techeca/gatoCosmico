import MyButton from "../ui/MyButton";

export default function ChooseUs(){

    return(
        <div className='bg-indigo-950 font-regular text-white flex justify-around p-14 flex-col md:flex-row gap-6'>
            <div className='w-full md:basis-1/2'>
                <p className='font-bold text-sm'>LOGO</p>
                <p className='font-extrabold text-5xl my-4'>Seguimiento de pacientes de la forma más fácil</p>
                <p className='leading-relaxed'>Con servicios en la nube podrás acceder a la información que necesitas desde el lugar que quieras.</p>
            </div>
            <div className='flex flex-col basis-1/2 items-center'>
                <input type={'text'} className='pl-3 min-w-[370px] py-3 bg-slate-600/60 rounded text-gray-400/70 my-3' placeholder='Correo' />
                <input type={'text'} className='pl-3 min-w-[370px] py-3 bg-slate-600/60 rounded text-gray-400/70 my-3' placeholder='Contraseña' />
                <button className='rounded bg-indigo-700 pl-3 min-w-[370px] py-3 my-3 hover:bg-indigo-600 transition-colors duration-200 ease-in'>COMENZAR</button>
            </div>
        </div>
    )
}