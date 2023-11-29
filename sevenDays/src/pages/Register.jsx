import { useForm, Controller } from 'react-hook-form';
import Button from '../components/Button';
import FormLinks from '../components/FormLinks';

export const Register = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center w-72'>
                <h1 className="text-cyan-500 text-lg mb-2.5 max-sm:text-3xl">Aluritter</h1>
                <div className="w-full mb-2">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => <input {...field} className="border-solid border-2 rounded border-grey-500 h-8 w-full pl-1 max-sm:h-10" type="email" placeholder="email@exemplo.com" />}
                    />
                </div>

                <div className="w-full mb-2.5">
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <input {...field} className="border-solid border-2 rounded border-grey-500 h-8 w-full pl-1 max-sm:h-10" type="password" placeholder="Senha" />}
                    />
                </div>

                <Button buttonLabel="Criar uma nova conta" />
                <FormLinks customerStatus="Já tem uma conta?" actionLink="Acesse agora!" />
            </form>
        </>
    );
};
