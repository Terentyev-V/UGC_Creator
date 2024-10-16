import logo from '../logo.svg';
import './App.css';
import Root from '../components/Root';



import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={ <Root />}>
    
  </Route>


) )

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
