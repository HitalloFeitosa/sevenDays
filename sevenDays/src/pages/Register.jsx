import Button from '../components/Button';
import Form from '../components/Form';
import FormLinks from '../components/FormLinks';

export const Register = () => {
    return (
        <div className="h-full w-72 m-auto flex flex-col justify-center">
            <Form />
            <Button buttonLabel="Criar uma nova conta" />
            <FormLinks customerStatus="Já tem uma conta?" actionLink="Acesse agora!" />
        </div>
    );
};
