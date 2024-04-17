// in src/posts.jsx
import {ReferenceField, List,ImageField ,Datagrid, TextField, EmailField, BooleanField, DateField, SearchInput } from 'react-admin';
const CustomerFilters = [
    <SearchInput source="name" alwaysOn />,
];



export const List_feedback = () => (
    <List filters={CustomerFilters}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="usernmae" />
            <TextField source="order_id" />
            <EmailField source="comment" />
            <EmailField source="rating" />
            <DateField source="feedback_date" />
        </Datagrid>
    </List>
);