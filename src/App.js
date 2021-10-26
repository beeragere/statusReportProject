import CompanyName from "./loginPage/CompanyName";
import LoginTemplate from "./loginPage/LoginTemplate";
import { useState } from "react";
import './App.css'

const App = () => {
    let [userInput, setUserInput] = useState({username: "", password: ""});
    let [loginError, setLoginError] = useState(false);
    let [serverError, setServerError] = useState(false);
    const formValidation = (e) => {
        if(userInput.username === "hello" && userInput.password === "world"){
            setLoginError(false);
        }
        else{
            setLoginError(true);
        }
       e.preventDefault();
    }
    const updateInputs = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }
    return (
        <div className="app">
                <CompanyName/>
                <LoginTemplate formValidation={formValidation} updateInputs={updateInputs} userInput={userInput} loginError={loginError} serverError={serverError}/>
        </div> 
    )
}

export default App;