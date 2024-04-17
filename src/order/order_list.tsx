// in src/posts.jsx
import {ReferenceField, List,ImageField ,Datagrid, TextField, EmailField, BooleanField, DateField } from 'react-admin';

export const list_order = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="order_date" />
            <TextField source="total_amount" />
            <TextField source="status" />
            <TextField source="customer" />
        </Datagrid>
    </List>
);