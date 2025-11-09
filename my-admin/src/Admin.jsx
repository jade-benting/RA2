import { DataTable, List } from 'react-admin';
import { Edit, NumberInput, SimpleForm, TextInput, Create } from 'react-admin';
import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const AdminShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <NumberField source="permissionLevel" />
        </SimpleShowLayout>
    </Show>
);

export const AdminCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <NumberInput source="permissionLevel" />
        </SimpleForm>
    </Create>
);

export const AdminEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <NumberInput source="permissionLevel" />
        </SimpleForm>
    </Edit>
);

export const AdminList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.NumberCol source="permissionLevel" />
        </DataTable>
    </List>
);