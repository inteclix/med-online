import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const MedicamentList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="CODE" />
      <TextField source="DENOMINATION_COMMUNE_INTERNATIONALE" />
      <TextField source="NOM_DE_MARQUE" />
      <TextField source="FORME" />
    </Datagrid>
  </List>
);
