function GuestGreeting() {
    return <h1>Please sign in!</h1>
}
function UserGreeting() {
    return <h1>Welcome back!</h1>
}
export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

// export default class Greeting extends React.Component {

//     constructor(props) {

//         super(props);
//         this.state = {
//             isLoggedIn: props.isLoggedIn,
//         }
//     }
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         if (isLoggedIn) {
//             return <UserGreeting />;
//         }
//         return <GuestGreeting />;
//     }
// }