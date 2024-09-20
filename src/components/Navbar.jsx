// import React from "react"
import img from "../images/airbnb-logo.png"
// using the path directly inside the src may be give us an Error so we use it like this 
export default function Navbar() {
    return (
        <nav className="navBar">
            <img src={img} className="nav__logo" />
        </nav>
    )
}