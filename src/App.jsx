import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Owner from './components/OwnerView';
import PetView from './components/PetView';
import PetNavbar from './components/PetNavbar';

function App() {
  return (
   <div>
    <PetNavbar></PetNavbar>
    <Routes>
        <Route path='/'  element={<Home></Home>}></Route>
        <Route path='/owner' element={<Owner></Owner>}></Route>
        <Route path='/pet' element={<PetView></PetView>}></Route>
        <Route></Route>
      </Routes>

   </div>
  )
}

export default App
