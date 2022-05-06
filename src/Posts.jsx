import * as React from 'react';
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput
} from 'react-admin'
export const PostEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);