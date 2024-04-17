import { Create, SimpleForm, TextInput, PasswordInput, Edit } from 'react-admin';

export const updata_customer = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="username" fullWidth/>
            <TextInput source="email" fullWidth/>
            <TextInput source="password" fullWidth/>
            <TextInput source="phone_number" fullWidth/>
        </SimpleForm>
    </Edit>
);