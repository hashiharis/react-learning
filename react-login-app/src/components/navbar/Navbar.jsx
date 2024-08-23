import './navbar.css'
import { useNavigate } from 'react-router-dom'

export const Navbar=()=>{

    const navigate=useNavigate()

    
    return(
        <nav className="navbar">
            <div className="left-section">
                <button onClick={()=>{
                     navigate('/')
                }} >Home</button>
            </div>
            <div className="right-section">
                <button onClick={()=>{
                    navigate('/login')
                }}>Login</button>
                <button onClick={()=>{
                    navigate('/signup')
                }}>Sign Up</button>
            </div>
        </nav>
    )
}