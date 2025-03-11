import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ShoppingPage from './Pages/ShoppingPage';
import GridLoader from "react-spinners/GridLoader"
import { useEffect,useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [Loading,setLoading] = useState(true)

  useEffect(()=>{

      setLoading(true)

      setTimeout(()=>{
        setLoading(false)
      },1900)

  },[])

  return (  
    <>
          <ToastContainer position="top-center" autoClose={3000} />

      {Loading ? (

            <div className="loader"> 
            <GridLoader
              color={'#2b3e34'}
              loading={true}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            </div>
  ):(
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomePage />}/>
          <Route path='/shop' element={<ShoppingPage />}/>

        </Routes>
      </BrowserRouter>
    )}
    </>
  )
}

export default App
