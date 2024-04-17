import { Create, SimpleForm, TextInput, PasswordInput, Edit, RadioButtonGroupInput, TextField } from 'react-admin';

export const updata_status = () => (
    <Edit>
        <SimpleForm>
            <RadioButtonGroupInput source="status" choices={[
                { id: 'cart', name: 'cart' },
                { id: 'Packing', name: 'Packing' },
                { id: 'Delivery to skin agent', name: 'Delivery to skin agent' },
                { id: 'On the way', name: 'On the way' },
                { id: 'Home delivery', name: 'Home delivery' },
            ]} />

        </SimpleForm>
    </Edit>
);