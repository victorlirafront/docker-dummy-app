import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';

const UserList = (props: any) => {
    return (
        <List {...props} >
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' />
                <EmailField source='email' />
                <EditButton resource='users' />;
                <DeleteButton resource='users'/>
            </Datagrid>
        </List>
    )
}
export default UserList