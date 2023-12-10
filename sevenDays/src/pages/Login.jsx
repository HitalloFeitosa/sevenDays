import Button from '../components/Button';
import Form from '../components/Form';
import FormLinks from '../components/FormLinks';

export const Login = () => {
    return (
        <div className="h-full w-72 m-auto flex flex-col justify-center">
            <Form />
            <Button buttonLabel="Acessar plataforma" />
            <FormLinks customerStatus="Não possui uma conta?" actionLink="Crie uma agora!" />
        </div>
    );
};
