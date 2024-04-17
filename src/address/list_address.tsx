// in src/posts.jsx
import {ReferenceField, List,ImageField ,Datagrid, TextField, EmailField, BooleanField, DateField, NumberField } from 'react-admin';

export const list_address = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="customer_id" />
            <TextField source="recipient_name" />
            <TextField source="address_line1" />
            <TextField source="city" />
            <TextField source="postal_code" />
            <TextField source="country" />

        </Datagrid>
    </List>
);