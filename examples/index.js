const domContainer = document.querySelector('#react-examples');
const root = ReactDOM.createRoot(domContainer)

const heading = React.createElement('h1', {
  title: 'Hello',
  className: 'heading'
},
  'Hello world!'
)
// root.render(heading)

// JSX
const name = 'Josh Perez';
const exJSXElement1 = <h1>Hello, {name}</h1>

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const exJSXElement2 = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function getGreeting(user) {
  if (user) {
    return <h1>Hi, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
const result = getGreeting(user.name)
// root.render(result)

const exJSXElement3 = <a href="https://www.reactjs.org">link</a>;
root.render(exJSXElement3)

const exJSXElement4 = <img src={user.avatarUrl}></img>


const exJSXElement5 = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);

// Components and Props
// Function and Class Components
// function Header() {
//   return (
//     <div className="header">Header</div>
//   )
// }

// class Content extends React.Component {
//   render() {
//     return (
//       <div className="content">Content</div>
//     )
//   }
// }

// const app = (
//   <div className="wrapper">
//     <Header/>
//     <Content/>
//     <div className="footer">Footer</div>
//   </div>
// )

// root.render(app)

// Props
function Content(props) {
  return (
    <div className="content">
      <h3 className="title">{props.title}</h3>
      <p className="des">{props.des}</p>
    </div>
  )
}

const demoProps = (
  <div className="wrapper">
    <Content
    title="This is title 1"
    des="This is des 1"
    />
    <Content
    title="This is title 2"
    des="This is des 2"
    />
  </div>
)

root.render(demoProps)

// State and Lifecycle
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log('call dimount')
    this.timerID = setInterval(
      () => this.tick(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    console.log('call unmout')
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log('call render')
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
// root.render(<Clock />);

// Handling Events
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
root.render(<Form/>)

// Conditional Rendering
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }
    <div>
    {isLoggedIn
      ? button = <LogoutButton onClick={this.handleLogoutClick} />
      : button = <LoginButton onClick={this.handleLoginClick} />
    }
  </div>

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

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
 
root.render(<LoginControl />);

// Rest/Spread props
function Input({label, ...inputProps}) {
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps}></input>
    </div>
  )
}

const demoRestSpreadProps = (
    <div id="wrapper">
      <Input 
      label="Name"
      type="text"
      placeholder="Enter name"
      onFocus={() => {
        console.log('hello')
      }}
      />
    </div>
)
root.render(demoRestSpreadProps)

// Lists and Keys
const numbers = [1, 2, 3, 4, 5];
const listItem = numbers.map((number) => 
  <li key={number.toString()}
  >{number}
  </li>
);
root.render(listItem)