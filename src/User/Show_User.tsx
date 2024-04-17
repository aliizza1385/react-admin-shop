import { Show, SimpleShowLayout, BooleanField, TextField, DateField, RichTextField, EmailField } from 'react-admin';

export const show_user = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="username"/>
            <EmailField source="email"/>
            <EmailField source="password"/>
            <EmailField source="email"/>
        </SimpleShowLayout>
    </Show>
    )