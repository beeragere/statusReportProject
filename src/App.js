import CompanyName from "./loginPage/CompanyName";
import LoginTemplate from "./loginPage/LoginTemplate";
import { useState } from "react";
import './App.css'

const App = () => {
    let [userInput, setUserInput] = useState({username: "", password: ""});
    let [error, setError] = useState(null);

    ////for validating the form when user clicks on 'login'
    const formValidation = (e) => {
        e.preventDefault();
        try{
            if(userInput.username === "" || userInput.password === ""){
                throw new Error("You Can't Leave The Inputs Blank");
            }
            else{
                setError(null);
            }

            fetch("google.com")
            .then(
                
            )
            if(userInput.username !== "name" || userInput.password !== "pass"){
                throw new Error("Username or Password Is Wrong");
            }
            else{
                setError(null);
            }
        }
        catch(error){
            setError(error.message);
        }
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