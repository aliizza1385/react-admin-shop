import { Edit, SimpleForm, TextInput, ReferenceInput, Show, SimpleShowLayout, EmailField, TextField, ImageField } from 'react-admin';

export const Show_category = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="parent_category_id" />
        </SimpleShowLayout>
    </Show>
);