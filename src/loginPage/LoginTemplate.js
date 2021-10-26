import LoginErrorMessage from "./LoginErrorMessage";
import ServerErrorMessage from "./ServerErrorMessage";
const LoginTemplate = (props) => {
    return(
        <div className="loginHolder">
            <h2 className="name">
                LogIn
            </h2>
            <form action="#">
                <label htmlFor="userName">Username</label>
                <input type="text" name="userName" defaultValue="" placeholder="name.ta"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" defaultValue="" placeholder="Password"/>
                <input className="button" type="submit" value="Log In"/>
            </form>
            <div className="messages">
                <LoginErrorMessage/>
                <ServerErrorMessage/>
            </div>
        </div>
    )
}

export default LoginTemplate;