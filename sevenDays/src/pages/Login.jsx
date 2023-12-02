import Button from '../components/Button';
import Form from '../components/Form';
import FormLinks from '../components/FormLinks';

export const Login = () => {
    return (
        <>
            <Form />
            <Button buttonLabel="Acessar plataforma" />
            <FormLinks customerStatus="Não possui uma conta?" actionLink="Crie uma agora!" />
        </>
    );
};
