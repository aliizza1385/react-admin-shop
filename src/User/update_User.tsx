import { Create, SimpleForm, TextInput, PasswordInput, Edit } from 'react-admin';

export const updata_User = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);