import React from 'react'
//import {Link} from 'react-router-dom'
import './App.css';

function Navbar() {
    
    return (
        <ol className="nav">
            <li>
             <a href="/sort">Article Sort</a> 
             </li><li>
             <a href="/slider">Slider</a>  
             </li><li>
             <a href="/football">Football Match</a>  
             </li><li>
             <a href="/author">Article Author</a>   
            </li>
            
        </ol>
    )
}

export default Navbar
