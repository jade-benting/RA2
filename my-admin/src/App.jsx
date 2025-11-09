
import {createTrailbaseProvider} from './ra-trailbase.js';
import {ListGuesser, Resource, Admin, EditGuesser, ShowGuesser, EditActions} from 'react-admin';
import {AuthorList, AuthorEdit, AuthorCreate, AuthorShow} from './Author.jsx';
import { BookEdit, BookList, BookCreate, BookShow } from './Book.jsx';
import{GeneraluserEdit, GeneraluserList, GeneraluserCreate, GeneraluserShow} from './GeneralUser.jsx';
import { GenreList, GenreEdit, GenreCreate, GenreShow } from './Genre.jsx';
import{AdminCreate, AdminEdit, AdminList, AdminShow} from './Admin.jsx'
import { radiantLightTheme, radiantDarkTheme } from 'react-admin';

const TRAILBASE_URL = 'https://sturdy-eureka-5gpq77vvg55vfx99-4000.app.github.dev/';
const {dataProvider, authProvider} = await createTrailbaseProvider(TRAILBASE_URL);


const App = () => 
(
<Admin dataProvider = {dataProvider} authProvider={authProvider} theme={radiantLightTheme} darkTheme={radiantDarkTheme}> 
  <Resource name = 'Author' list={AuthorList} edit={AuthorEdit} create = {AuthorCreate} show={AuthorShow}/>  
  <Resource name = 'Book' list={BookList} edit={BookEdit} create = {BookCreate} show={BookShow}/> 
  <Resource name = 'GeneralUser' list={GeneraluserList} edit ={GeneraluserEdit} create={GeneraluserCreate} show ={GeneraluserShow}/>
  <Resource name = 'Genre' list={GenreList} edit={GenreEdit} create={GenreCreate} show ={GenreShow}/>
  <Resource name = 'Admin' list={AdminList} edit={AdminEdit} create={AdminCreate} show ={AdminShow}/>
</Admin>
);
export default App;