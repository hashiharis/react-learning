
import './App.css'
import { Banner } from './components/banner/Banner'
import {FeaturedWrapper } from './components/featured/FeaturedWrapper'
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
    <Navbar/>
    <Banner/>
    <FeaturedWrapper/>
    <Footer/>
    </>
  )
}

export default App
