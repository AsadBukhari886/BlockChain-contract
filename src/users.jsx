import * as React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField, useRecordContext } from 'react-admin';
import { Link } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
const MyUrlField = ({ source }) => {
    const record = useRecordContext();
    return record ? (
        <Link href={record[source]} sx={{ textDecoration: 'none', display: 'flex', alignItems: 'centerr' }}>
            {record[source]}
            <LaunchIcon sx={{ width: '.9rem', height: '.9rem' }} />
        </Link>) : null
}
export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);