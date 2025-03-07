import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ShoppingPage from './Pages/ShoppingPage';


function App() {

  return (  
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomePage />}/>
          <Route path='/shop' element={<ShoppingPage />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
