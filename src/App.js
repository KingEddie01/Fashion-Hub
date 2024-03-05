import './App.css';
import {ROUTE} from './route/route'
import { useRoutes } from 'react-router-dom';


function App (){
 return (
  useRoutes(ROUTE)
 )
}

export default App;
