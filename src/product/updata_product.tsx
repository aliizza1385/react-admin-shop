import { Edit, ImageField, ImageInput, SimpleForm, TextInput, required } from 'react-admin';

export const update_product = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" fullWidth validate={[required()]}/>
            <TextInput source="price" fullWidth validate={[required()]}/>
            <TextInput source="description" fullWidth validate={[required()]}/>
            <TextInput source="category_id" fullWidth validate={[required()]}/>
            <ImageInput source="image" validate={[required()]}>
               <ImageField source="src" title="title" />
             </ImageInput>
        </SimpleForm>
    </Edit>
);