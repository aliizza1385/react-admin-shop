// in src/posts.jsx
import {ReferenceField, List,ImageField ,Datagrid, TextField, EmailField, BooleanField, DateField, SearchInput } from 'react-admin';


const LogFilter = [
    <SearchInput source="name" alwaysOn />,
];

export const List_log = () => (
    <List filters={LogFilter}>
        <Datagrid rowClick="edit">
            <TextField source="action" />
            <DateField label="Publication date" source="action_date" />
            <TextField source="user_id" label="User id"/>
            <TextField source="ip_address" />
        </Datagrid>
    </List>
);