import { useForm } from 'react-hook-form';

export default function Dashboard() {
    const { handleSubmit } = useForm();

    const onSubmit = () => {
        alert("Mensagem publicada!");
    };

    return (
        <div className="w-4/5 my-12 m-auto">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mb-5 max-sm:mb-10'>
                <p className="text-slate-600 text-md mb-1 max-sm:text-xl">Alurite agora mesmo...</p>
                <textarea className="focus:outline-none h-24 mb-3 p-2 text-sm resize-none border-solid border-2 rounded border-grey-500 max-sm:mb-1" />
                
                <div className="action flex flex-col items-start sm:flex-row sm:justify-between max-sm:flex-col">
                    <p className="text-green-600 text-sm mb-1 max-sm:text-sm mb-2">Você ainda pode digitar 255 caracteres</p>
                    <button className="bg-sky-500 h-8 sm:w-16 rounded text-white hover:bg-sky-600 focus:outline-none max-sm:h-10 max-w-2xl w-full">
                        <span>
                            Aluritar
                        </span>
                    </button>
                </div>
            </form>

            <div className="alurites">
                <div className="message bg-white p-4 border-solid border-2 rounded border-grey-500  ">
                    <h3 className="text-slate-500">Seven Days</h3>
                    <div className="message-log flex justify-between mt-4">
                        <div className="user-email text-sm text-sky-500">user@gmail.com</div>
                        <div className="message-date text-sm text-slate-500">6/20/2023, 3:52:49 pm</div>
                    </div>
                </div>
            </div>
        </div>
    )
}