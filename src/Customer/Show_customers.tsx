import { Show, SimpleShowLayout, BooleanField, TextField, DateField, RichTextField, EmailField } from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="username"/>
            <EmailField source="email"/>
            <TextField source="phone_number"/>
            <DateField source="registration_date" />
            <TextField source="password" />
        </SimpleShowLayout>
    </Show>
    )