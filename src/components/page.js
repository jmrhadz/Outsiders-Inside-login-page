import React from "react";
import Navbar from './navbar'
import LoginForm from "./login-form";

export default class Page extends React.Component {
    render() {
        return (
            <div className="h-100">
                <Navbar/>
             
                <div className="d-flex flex-column h-75 container m-auto">
                   
                    <LoginForm/>
                  
                </div>
            </div>
        )
    }
}