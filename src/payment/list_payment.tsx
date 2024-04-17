// in src/posts.jsx
import { List ,Datagrid, TextField, EmailField, DateField, SearchInput } from 'react-admin';

const CustomerFilters = [
    <SearchInput source="name" alwaysOn />,
];



export const list_payment = () => (
    <List filters={CustomerFilters}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="order_id" />
            <TextField source="payment_method" />
            <EmailField source="amount" />
            <DateField source="payment_date" />
        </Datagrid>
    </List>
);
