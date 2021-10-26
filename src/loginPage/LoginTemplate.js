import LoginErrorMessage from "./LoginErrorMessage";
import ServerErrorMessage from "./ServerErrorMessage";
const LoginTemplate = ({userInput, formValidation, updateInputs, loginError, serverError}) => {
    return(
        <div className="loginHolder">
            <h2 className="name">
                LogIn
            </h2>
            <form onSubmit={formValidation}>
                <label htmlFor="userName">Username</label>
                <input type="text" name="username" value={userInput.username} onChange={updateInputs} placeholder="name.ta"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={userInput.password} onChange={updateInputs} placeholder="Password"/>
                <input className="button" type="submit" value="Log In"/>
            </form>
            <div className="messages">
               {loginError && <LoginErrorMessage/>} 
               {serverError && <ServerErrorMessage/>}
            </div>
        </div>
    )
}

export default LoginTemplate;