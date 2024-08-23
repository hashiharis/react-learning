import './App.css'
import { SignupForm } from './components/form/SignupForm'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './components/home/Home'
import { LoginForm } from './components/form/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductDetails } from './components/products/ProductDetails'


function App() {

  return (
    <BrowserRouter>
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/signup' element={<SignupForm/>}/>
         <Route path='/login' element={<LoginForm/>}/>
         <Route path="/products/:productId" element={<ProductDetails />} />
    </Routes>  
  </BrowserRouter>
  )
}

export default App
