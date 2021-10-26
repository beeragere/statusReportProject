import CompanyName from "./loginPage/CompanyName";
import LoginTemplate from "./loginPage/LoginTemplate";
import { useState } from "react";
import './App.css'

const App = () => {
    let [userInput, setUserInput] = useState({username: "", password: ""});
    let [loginError, setLoginError] = useState(false);
    let [serverError, setServerError] = useState(false);
    let [blankError, setBlankError] = useState(false);

    ////for validating the form when use clicks on 'login'
    const formValidation = (e) => {
        if(userInput.username === "" || userInput.password === ""){
            setBlankError(true);
        }
        else{
            setBlankError(false);
        }
       e.preventDefault();
    }
    ///for updating input fields in form
    const updateInputs = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }
    return (
        <div className="app">
                <CompanyName/>
                <LoginTemplate formValidation={formValidation} updateInputs={updateInputs} userInput={userInput} loginError={loginError} serverError={serverError} blankError={blankError}/>
        </div> 
    )
}

export default App;