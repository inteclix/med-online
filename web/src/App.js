import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";

import { dataProvider, authProvider } from "./feathersProvider";

import { MedicamentList } from "./resources/medicaments";
const App = () => {
  return (
    <Admin
      title="MedOnline"
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource name="medicaments" edit={EditGuesser} list={MedicamentList} />
    </Admin>
  );
};

export default App;
