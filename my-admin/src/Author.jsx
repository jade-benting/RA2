import { DataTable, DateField, List } from 'react-admin';
import { DateInput, Edit, NumberInput, SimpleForm, TextInput, Create } from 'react-admin';
import {NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const AuthorShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="fullName" />
            <DateField source="dob" />
            <TextField source="authorBiography" />
            <NumberField source="profileID" />
        </SimpleShowLayout>
    </Show>
);


export const AuthorCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="fullName" />
            <DateInput source="dob" />
            <TextInput source="authorBiography" />
            <NumberInput source="profileID" />
        </SimpleForm>
    </Create>
);


export const AuthorEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="fullName" />
            <DateInput source="dob" />
            <TextInput source="authorBiography" />
            <NumberInput source="profileID" />
        </SimpleForm>
    </Edit>
);



export const AuthorList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="fullName" />
            <DataTable.Col source="dob">
                <DateField source="dob" />
            </DataTable.Col>
            <DataTable.Col source="authorBiography" />
            <DataTable.NumberCol source="profileID" />
        </DataTable>
    </List>
);