import { useForm, Controller } from 'react-hook-form';

export default function Register() {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center'>
                <h1 className="text-cyan-500 text-lg">Aluritter</h1>
                <div>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <input {...field} className="border-solid border-2 rounded border-grey-500" type="email" placeholder="email@exemplo.com" />}
                    />
                </div>

                <div>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <input {...field} className="border-solid border-2 rounded border-grey-500" type="password" placeholder="Senha" />}
                    />
                </div>

                <button type="submit">Enviar</button>

                <p>
                    Já tem uma conta? <a href="#">Acesse agora!</a>
                </p>
            </form>
        </>
    )
}