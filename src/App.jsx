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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBspagSrD9pbGkQWpecn27Jhf4OwLdotOw",
  authDomain: "asadbukhari-to-anthigh.firebaseapp.com",
  projectId: "asadbukhari-to-anthigh",
  storageBucket: "asadbukhari-to-anthigh.appspot.com",
  messagingSenderId: "463728681800",
  appId: "1:463728681800:web:57bec3fb8ed34f46e1097d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App = () => (
  <Admin dashboard={DashBoard} dataProvider={dataProvider} authProvider={AuthProvider} >
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  </Admin >

);

export default App;