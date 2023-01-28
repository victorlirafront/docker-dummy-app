import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const PostCreate = (props: any) => {
    return (
        <Create title="Create a post" {...props}>
            <SimpleForm>
                <TextInput source='title' />
                <TextInput multiline source='body' />
                <DateInput label="Published" source='publishedAt' />
            </SimpleForm>
        </Create>
    )
}
export default PostCreate;