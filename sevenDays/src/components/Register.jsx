import { useForm, Controller } from 'react-hook-form';

export default function Register() {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center w-72'>
                <h1 className="text-cyan-500 text-lg mb-2.5">Aluritter</h1>
                <div className="w-full mb-2">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <input {...field} className="border-solid border-2 rounded border-grey-500 h-8 w-full pl-1" type="email" placeholder="email@exemplo.com" />}
                    />
                </div>

                <div className="w-full mb-2.5">
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <input {...field} className="border-solid border-2 rounded border-grey-500 h-8 w-full pl-1" type="password" placeholder="Senha" />}
                    />
                </div>

                <button type="submit" className="bg-green-500 h-8 w-full rounded text-white">Enviar</button>

                <p className="text-slate-400 text-sm mt-2.5">
                    Já tem uma conta? <a href="#" className="text-sky-500">Acesse agora!</a>
                </p>
            </form>
        </>
    )
}