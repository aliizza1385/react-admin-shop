import { Create, SimpleForm, TextInput, PasswordInput, Edit } from 'react-admin';

export const updata_address = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="recipient_name" fullWidth/>
            <TextInput source="address_line1" fullWidth/>
            <TextInput source="address_line2" fullWidth/>
            <TextInput source="city" fullWidth/>
            <TextInput source="state" fullWidth/>
            <TextInput source="postal_code" fullWidth/>
        </SimpleForm>
    </Edit>
);