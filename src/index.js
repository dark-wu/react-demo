
import Welcome from './welcome.js';
import Clock from './clock.js';
import Toggle from './toggle.js';
import Login from './login.js';



const user = {
    firstName: 'John',
    lastName: 'Doe',
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const element = <div className="index-text">Hello, { formatName(user) }</div>;

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
));
const ref = React.createRef();
  

function tick() {
    function handleClick() {
        alert('clicked');
    }
    const element = (
        <div>

            <h1>Hello World</h1>
            <h2>It is { new Date().toLocaleTimeString() }.</h2>
            <Welcome name='Dark wu' />
            <Welcome name='Sun li' />
            <Clock />
            <Toggle />
            <Login />

            <FancyButton ref={ref}>Click me!</FancyButton>

        </div>
    )
    ReactDOM.createRoot(
        document.getElementById('root')
    ).render(element)
}

// ReactDOM.render(
//     <Index />,
//     document.getElementById('root')
// );
tick();