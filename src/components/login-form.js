import React from 'react';
import CheckCredentials from './checkCredentials'
import ForgotPassword from './resetPassword';
import Register from './registration';

export default class LoginForm extends React.Component {
    render() {   
        return (  
            //onClick funtions return nothing and act only as placeholders
            <div className='card align-self-center border-primary border-5 shadow-lg m-auto p-2 container w-50'>
                <div className='card-header'>
                    <h3>Log In</h3>
                </div>
                <div className='card-body'>
                    <form className='row justify-content-end'>
                        <input type='text' id='username' className='form-control col-12 m-1' placeholder='Username' required></input>
                        <input type='password' id='user-password' className='form-control col-12 m-1' placeholder='Password' required></input>
                        <button type='submit' id='login' className='btn btn-primary col-4 m-2' onClick={CheckCredentials()}>Login</button>
                        <span className='col-1'></span>  
                    </form>
                </div>
                <div className='row text-center justify-content-around p-1'>
                    <span className='col-4 link-primary' onClick={<ForgotPassword/>}>I forgot my password...</span>  
                    <span className='col-4 link-primary'  onClick={<Register/>}>Create an account</span>
                </div>
            </div>
        )
    }
}