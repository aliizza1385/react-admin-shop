import { Edit, SimpleForm, TextInput, ReferenceInput, Show, SimpleShowLayout, EmailField, TextField, ImageField } from 'react-admin';

export const Show_product = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="price" />
            <TextField source="description" />
            <ImageField source="image" />
        </SimpleShowLayout>
    </Show>
);