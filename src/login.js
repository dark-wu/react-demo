import Greeting from './greeting.js';

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}
  
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export default class Login extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            isLoggedIn: true,
        }

    }
    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={ this.handleLogoutClick }></LogoutButton>
        } else {
            button = <LoginButton onClick={ this.handleLoginClick }></LoginButton>
        }
        return (
            <div>
                <Greeting isLoggedIn={ isLoggedIn } />
                { button }
            </div>
        )
    }
}