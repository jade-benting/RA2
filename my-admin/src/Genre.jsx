import { DataTable, List } from 'react-admin';
import { Edit, SimpleForm, TextInput, Create } from 'react-admin';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const GenreShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);

export const GenreCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);

export const GenreEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const GenreList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="name" />
        </DataTable>
    </List>
);