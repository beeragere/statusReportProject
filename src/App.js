import CompanyName from "./loginPage/CompanyName";
import LoginTemplate from "./loginPage/LoginTemplate";
import { useEffect, useState } from "react";
import './App.css'

const App = () => {
    let [userInput, setUserInput] = useState({username: "", password: ""});
    let [error, setError] = useState({loginError: false, serverError: false, blankError: false});

    ////for validating the form when user clicks on 'login'
    const formValidation = (e) => {
        if(userInput.username === "" || userInput.password === ""){
            // setError({...error, blankError: true});
            setError(error => {
                return {...error, blankError: true};
            })
            console.log("here");
        }
        else{

        }

        if((userInput.username !== "name" || userInput.password !== "pass") && error.blankError === false){
            setError(error => {
                return {...error, loginError: true};
            });
            console.log("login error");
            console.log(error);
        }
        else{
            console.log("no login error");
            setError({...error, loginError: false});
        }
       e.preventDefault();
    }
    ///for updating input fields in form
    const updateInputs = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }
    ///useEffect to update synchronously...
    return (
        <div className="app">
                <CompanyName/>
                <LoginTemplate formValidation={formValidation} updateInputs={updateInputs} userInput={userInput} error={error}/>
        </div> 
    )
}

export default App;