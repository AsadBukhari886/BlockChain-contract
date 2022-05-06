import React from 'react';
import {
    List,
    SimpleList,
    Datagrid,
    ReferenceField,
    TextField,
    EditButton,
    Edit,
    Create,
    SelectInput,
    SimpleForm,
    ReferenceInput,
    TextInput,
    useRecordContext
} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post: {record ? `"${record.title}"` : ''}</span>
}
const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];
export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))
    return (
        isSmall ? <List>
            <SimpleList
                primaryText={record => record.title}
                secondaryText={record => `${record.views} views`}
                tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
            />
        </List> :
            <List filters={postFilters} sx={{ width: '100%' }}>
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />

                    <EditButton />
                </Datagrid>
            </List>
    )
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            {/* <TextInput source="id" /> */}
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create >
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            {/* <TextInput source="id" /> */}
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create >
)