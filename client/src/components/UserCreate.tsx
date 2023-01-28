import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const UserCreate = (props: any) => {
    return (
        <Create title="Create a user" {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput multiline source='email' />
            </SimpleForm>
        </Create>
    )
}
export default UserCreate;