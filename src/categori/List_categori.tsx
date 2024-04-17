// in src/posts.jsx
import {ReferenceField, List,ImageField ,Datagrid, TextField, EmailField, BooleanField, DateField } from 'react-admin';

export const list_categori = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="parent_category_id" />
            <DateField source="created_at" />
        </Datagrid>
    </List>
);