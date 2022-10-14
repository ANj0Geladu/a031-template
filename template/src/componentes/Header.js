import React from "react"
import logo from "../img/logo.png"

function Header(){
    return(
        <div>
            <h1 className="Headder" >Header</h1>
            <img className="LOGO-LBN" src={logo}/>
        </div>
    )
}

export default Header