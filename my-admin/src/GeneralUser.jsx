import { DataTable, List } from 'react-admin';
import { Edit, NumberInput, SimpleForm, TextInput, Create } from 'react-admin';
import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const GeneraluserShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="profileID" />
            <NumberField source="numberOfBooksRead" />
            <TextField source="favouriteAuthor" />
        </SimpleShowLayout>
    </Show>
);

export const GeneraluserCreate = () => (
    <Credit>
        <SimpleForm>
            <NumberInput source="profileID" />
            <NumberInput source="numberOfBooksRead" />
            <TextInput source="favouriteAuthor" />
        </SimpleForm>
    </Credit>
);

export const GeneraluserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <NumberInput source="profileID" />
            <NumberInput source="numberOfBooksRead" />
            <TextInput source="favouriteAuthor" />
        </SimpleForm>
    </Edit>
);

export const GeneraluserList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.NumberCol source="profileID" />
            <DataTable.NumberCol source="numberOfBooksRead" />
            <DataTable.Col source="favouriteAuthor" />
        </DataTable>
    </List>
);