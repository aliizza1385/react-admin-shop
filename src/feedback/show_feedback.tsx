import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const show_feedback = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="usernmae"/>
            <TextField source="rating"/>
            <TextField source="comment"/>
        </SimpleShowLayout>
    </Show>
    )