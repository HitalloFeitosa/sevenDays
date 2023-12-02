import Button from '../components/Button';
import Form from '../components/Form';
import FormLinks from '../components/FormLinks';

export const Register = () => {
    return (
        <>
            <Form />
            <Button buttonLabel="Criar uma nova conta" />
            <FormLinks customerStatus="Já tem uma conta?" actionLink="Acesse agora!" />
        </>
    );
};
