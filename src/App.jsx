import {Routes,Route} from 'react-router-dom'
import './App.css'
import AllRest from './components/AllRest'
import Footer from './components/Footer'
import Header from './components/Header'
import ViewRest from './components/ViewRest'

function App() {
 

  return (
    <>
     <Header/>
     {/*localhost:5173 : allRest */}
     <Routes>
      <Route path='/' element={<AllRest/>}/>

      {/*localhost:5173/view/12 : viewRest */}
      <Route path='/view/:id' element={<ViewRest/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
