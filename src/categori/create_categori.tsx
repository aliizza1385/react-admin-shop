import { InferProps, Requireable, ReactElementLike, ReactNodeLike } from 'prop-types';
import { ReactNode } from 'react';
import { Create, CreateProps, SimpleForm, TextInput, required } from 'react-admin';
import { JSX } from 'react/jsx-runtime';

export const create_categori = (props: JSX.IntrinsicAttributes & Pick<CreateProps<any, Error, any> & { children: ReactNode; }, "children" | keyof CreateProps<any, Error, any>> & Pick<InferProps<{ actions: Requireable<NonNullable<boolean | ReactElementLike>>; aside: Requireable<ReactElementLike>; children: Requireable<ReactNodeLike>; className: Requireable<string>; disableAuthentication: Requireable<boolean>; hasEdit: Requireable<boolean>; hasShow: Requireable<boolean>; redirect: Requireable<NonNullable<string | boolean | ((...args: any[]) => any)>>; resource: Requireable<string>; title: Requireable<ReactNodeLike>; record: Requireable<object>; mutationOptions: Requireable<object>; transform: Requireable<(...args: any[]) => any>; sx: Requireable<any>; }>, never> & Pick<CreateProps<any, Error, any> & { children: ReactNode; }, "component">) => (
    <Create {...props} resource="category"  redirect={false}>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} fullWidth/>
            <TextInput source="description" validate={[required()]} fullWidth/>
            <TextInput source="parent_category_id"  fullWidth/>
        </SimpleForm>
    </Create>
);