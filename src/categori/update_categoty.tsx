import { Edit, ImageField, ImageInput, SimpleForm, TextInput, required } from 'react-admin';

export const update_category = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" fullWidth />
            <TextInput source="description" fullWidth />
            <TextInput source="parent_category_id" fullWidth />
        </SimpleForm>
    </Edit>
);