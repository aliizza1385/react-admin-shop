// in src/posts.jsx
import {ReferenceField, List,ImageField ,Datagrid, TextField, EmailField, BooleanField, DateField } from 'react-admin';

export const list_customer = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="phone_number" />
            <EmailField source="email" />
            <DateField source="registration_date" />
        </Datagrid>
    </List>
);