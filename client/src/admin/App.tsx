// in src/admin/App.jsx
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import restProvider from 'ra-data-json-server';
import PostList from '../components/PostList';

const dataProvider = restProvider('http://localhost:5000');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    <Resource name="comments" list={PostList} />
  </Admin>
);

export default App;