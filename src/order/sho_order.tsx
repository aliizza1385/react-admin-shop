import { Show, SimpleShowLayout, BooleanField, TextField, DateField, DeleteWithConfirmButton, useRecordContext, Button, DeleteButton } from 'react-admin';

export const OrderShow = () => (
    <Show>
        <SimpleShowLayout>
            <DateField source="order_date"/>
            <TextField source="total_amount"/>
            <TextField source="status"/>
            <TextField source="customer"/>
            <TextField  source="items" component="pre"/>
            {/* <DeleteButton label='Cancel Order' fullWidth/> */}

        </SimpleShowLayout>
    </Show>
    )