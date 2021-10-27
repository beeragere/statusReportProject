import CompanyName from "./loginPage/CompanyName";
import LoginTemplate from "./loginPage/LoginTemplate";
import { useState } from "react";
import './App.css'

const App = () => {
    let [userInput, setUserInput] = useState({username: "", password: ""});
    let [error, setError] = useState(null);

    const fetchData = async () => {
            await fetch("http://localhost:8000/?username=username&password=password")
            .then(
            res => {
                  let data = res.json();
                  return data;
            } 
            )
            .then(
                res => {
                    console.log(res);
                }
            )
    }
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

            fetchData();

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