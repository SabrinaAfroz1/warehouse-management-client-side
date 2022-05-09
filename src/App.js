import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Inventory from './Pages/Inventory/Inventory';
import AddItem from './Pages/AddItem/AddItem';
import ManageItem from './Pages/ManageItem/ManageItem';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:itemId' element={
          <RequireAuth>
            <Inventory>

            </Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem>

            </AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/manageItem' element={
          <RequireAuth>
            <ManageItem>

            </ManageItem>
          </RequireAuth>
        }></Route>


      </Routes>

    </div>
  );
}

export default App;
