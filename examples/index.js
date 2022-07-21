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
function Header() {
  return (
    <div className="header">Header</div>
  )
}

class Content extends React.Component {
  render() {
    return (
      <div className="content">Content</div>
    )
  }
}

const app = (
  <div className="wrapper">
    <Header/>
    <Content/>
    <div className="footer">Footer</div>
  </div>
)

root.render(app)

// Props
