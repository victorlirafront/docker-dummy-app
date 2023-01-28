import { Edit, SimpleForm, TextInput } from 'react-admin';

const UserEdit = (props: any) => {
    return (
        <Edit title="Edit User" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput source='email' />
            </SimpleForm>
        </Edit>
    )
}
export default UserEdit;