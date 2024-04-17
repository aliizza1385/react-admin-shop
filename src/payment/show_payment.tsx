import { Show, SimpleShowLayout, BooleanField, TextField, DateField, RichTextField, EmailField, DeleteButton, DELETE } from 'react-admin';

export const payment_show = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="payment_method"/>
            <EmailField source="amount"/>
            <TextField source="payment_date"/>
        </SimpleShowLayout>
    </Show>
    )