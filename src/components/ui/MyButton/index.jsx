export default function MyButton({texto}){

    return(
        <button className='px-12 py-3 bg-indigo-600 text-white rounded-3xl my-6 font-semibold hover:bg-indigo-500 hover:scale-105 transition-all duration-200 ease-in'>
            {texto}
        </button>
    )
}