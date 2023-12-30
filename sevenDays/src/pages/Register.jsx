import { useForm, Controller } from 'react-hook-form';
import FormLinks from '../components/FormLinks';
import { auth, createUserWithEmailAndPassword } from '../../firebase';

export const Register = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = async (data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            console.log("Conta criada com sucesso!");
        } catch (error) {
            console.error("Erro ao criar conta:", error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='h-full w-72 m-auto flex flex-col justify-center'>
                <h1 className="text-cyan-500 flex justify-center text-xl mb-2.5 max-sm:text-3xl">Aluritter</h1>
                <div className="w-full mb-2">
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input {...field} className="border-solid border-2 rounded border-grey-500 focus:outline-none h-9 w-full pl-2 max-sm:h-10" type="email" placeholder="email@exemplo.com" />}
                    />
                </div>

                <div className="w-full mb-2.5">
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input {...field} className="border-solid border-2 rounded border-grey-500 focus:outline-none h-9 w-full pl-2 max-sm:h-10" type="password" placeholder="Senha" />}
                    />
                </div>

                <button type="submit" className="bg-green-500 h-9 w-full rounded text-white hover:bg-green-600 focus:outline-none">Criar uma nova conta</button>
                <FormLinks customerStatus="Já tem uma conta?" actionLink="Acesse agora!" to="/login" />
            </form>
        </>
    )
}