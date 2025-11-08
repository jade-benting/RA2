
import {createTrailbaseProvider} from './ra-trailbase.js';
import {ListGuesser, Resource, Admin, EditGuesser, ShowGuesser} from 'react-admin';
import {AuthorList, AuthorEdit, AuthorCreate} from './Author.jsx';
const TRAILBASE_URL = 'https://sturdy-eureka-5gpq77vvg55vfx99-4000.app.github.dev/';
const {dataProvider} = await createTrailbaseProvider(TRAILBASE_URL);


const App = () => 
(
<Admin dataProvider = {dataProvider} > 
  <Resource name = 'Author' list={AuthorList} edit={AuthorEdit} create = {AuthorCreate} show={ShowGuesser}/>  
  
</Admin>
);
export default App;