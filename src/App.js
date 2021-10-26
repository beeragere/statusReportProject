import CompanyName from "./loginPage/CompanyName";
import LoginTemplate from "./loginPage/LoginTemplate";
import { useEffect, useState } from "react";
import './App.css'

const App = () => {
    let [userInput, setUserInput] = useState({username: "", password: ""});
    let [loginError, setLoginError] = useState(false);
    let [serverError, setServerError] = useState(false);
    let [blankError, setBlankError] = useState(false);

    ////for validating the form when use clicks on 'login'
    function formValidation(e){
        if(userInput.username === "" || userInput.password === ""){
            setBlankError(true);
        }
        else{
            setBlankError(false);
        }

        if(userInput.username !== "hello" && userInput.password !== "world" && blankError === false){
            setLoginError(true);
        }
        else{
            setLoginError(false);
        }
       e.preventDefault();
    }
    ///for updating input fields in form
    function updateInputs(e){
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