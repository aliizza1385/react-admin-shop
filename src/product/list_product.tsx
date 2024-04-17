// in src/posts.jsx
import { List,ImageField ,Datagrid, TextField, EmailField, BooleanField, ImageInput } from 'react-admin';

export const list_product = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="category_id"  reference="category"/>
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="price" />
            <ImageField source="image" />
        </Datagrid>
    </List>
);