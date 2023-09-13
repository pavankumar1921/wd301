import React from "react";
import { useNavigate } from "react-router-dom";

 const Notfound : React.FC = () =>{
    const navigate = useNavigate()
    return (
        <div>
            <h2>404 Error</h2>
            <button id="backToHomeButton" onClick={()=>navigate('/home')}>Go Back</button>
        </div>
    )
 }

 export default Notfound