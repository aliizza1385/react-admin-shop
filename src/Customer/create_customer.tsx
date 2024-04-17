import { InferProps, Requireable, ReactElementLike, ReactNodeLike } from 'prop-types';
import { ReactNode } from 'react';
import { Create, CreateProps, PasswordInput, SimpleForm, TextInput, required } from 'react-admin';
import { JSX } from 'react/jsx-runtime';

export const customer_creaete = (props: JSX.IntrinsicAttributes & Pick<CreateProps<any, Error, any> & { children: ReactNode; }, "children" | keyof CreateProps<any, Error, any>> & Pick<InferProps<{ actions: Requireable<NonNullable<boolean | ReactElementLike>>; aside: Requireable<ReactElementLike>; children: Requireable<ReactNodeLike>; className: Requireable<string>; disableAuthentication: Requireable<boolean>; hasEdit: Requireable<boolean>; hasShow: Requireable<boolean>; redirect: Requireable<NonNullable<string | boolean | ((...args: any[]) => any)>>; resource: Requireable<string>; title: Requireable<ReactNodeLike>; record: Requireable<object>; mutationOptions: Requireable<object>; transform: Requireable<(...args: any[]) => any>; sx: Requireable<any>; }>, never> & Pick<CreateProps<any, Error, any> & { children: ReactNode; }, "component">) => (
    <Create {...props} resource="customer_creaete" redirect={false}>
        <SimpleForm>
            <TextInput source="username" validate={[required()]} fullWidth/>
            <TextInput source="email" validate={[required()]} fullWidth/>
            <PasswordInput source="password" validate={[required()]} fullWidth/>
            <TextInput source="phone_number" validate={[required()]} fullWidth/>
        </SimpleForm>
    </Create>
);