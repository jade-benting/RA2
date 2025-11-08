import { DataTable, List } from 'react-admin';
import { DateInput, Edit, NumberInput, SimpleForm, TextInput, Create } from 'react-admin';
import { DateField, NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const BookShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <DateField source="title" />
            <TextField source="description" />
            <TextField source="coverImageURL" />
            <DateField source="publicationDate" />
            <NumberField source="pageCount" />
            <NumberField source="avgRating" />
            <NumberField source="genreID" />
        </SimpleShowLayout>
    </Show>
);

export const BookCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="description" />
            <TextInput source="coverImageURL" />
            <DateInput source="publicationDate" />
            <NumberInput source="pageCount" />
            <NumberInput source="avgRating" />
            <TextInput source="genreID" />
        </SimpleForm>
    </Create>
);

export const BookEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="description" />
            <TextInput source="coverImageURL" />
            <DateInput source="publicationDate" />
            <NumberInput source="pageCount" />
            <NumberInput source="avgRating" />
            <TextInput source="genreID" />
        </SimpleForm>
    </Edit>
);

export const BookList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="title" />
            <DataTable.Col source="description" />
            <DataTable.Col source="coverImageURL" />
            <DataTable.Col source="publicationDate" />
            <DataTable.NumberCol source="pageCount" />
            <DataTable.NumberCol source="avgRating" />
            <DataTable.NumberCol source="genreID" />
        </DataTable>
    </List>
);