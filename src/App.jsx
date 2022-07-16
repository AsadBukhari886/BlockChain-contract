import * as React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './PostList';
// import { PostEdit } from './Posts';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import DashBoard from './Dashboard.jsx';
import AuthProvider from './AuthProvider';





const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => (
  <Admin dashboard={DashBoard} dataProvider={dataProvider} authProvider={AuthProvider} >
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  </Admin >

);

export default App;