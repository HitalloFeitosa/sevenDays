import { useForm, Controller } from 'react-hook-form';

export default function Register() {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center'>
                <h1 className="text-cyan-500 text-xl mb-2.5 max-sm:text-3xl">Aluritter</h1>
                <div className="w-full mb-2">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <input {...field} className="border-solid border-2 rounded border-grey-500 focus:outline-none h-9 w-full pl-2 max-sm:h-10" type="email" placeholder="email@exemplo.com" />}
                    />
                </div>

                <div className="w-full mb-2.5">
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <input {...field} className="border-solid border-2 rounded border-grey-500 focus:outline-none h-9 w-full pl-2 max-sm:h-10" type="password" placeholder="Senha" />}
                    />
                </div>
            </form>
        </>
    )
}