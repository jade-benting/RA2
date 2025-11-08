
import {createTrailbaseProvider} from './ra-trailbase.js';
import {ListGuesser, Resource, Admin, EditGuesser, ShowGuesser} from 'react-admin';
import {AuthorList, AuthorEdit, AuthorCreate, AuthorShow} from './Author.jsx';
import { BookEdit, BookList, BookCreate, BookShow } from './Book.jsx';
const TRAILBASE_URL = 'https://sturdy-eureka-5gpq77vvg55vfx99-4000.app.github.dev/';
const {dataProvider} = await createTrailbaseProvider(TRAILBASE_URL);


const App = () => 
(
<Admin dataProvider = {dataProvider} > 
  <Resource name = 'Author' list={AuthorList} edit={AuthorEdit} create = {AuthorCreate} show={AuthorShow}/>  
  <Resource name = 'Book' list={BookList} edit={BookEdit} create = {BookCreate} show={BookShow}/> 
</Admin>
);
export default App;