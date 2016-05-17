var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var userInfo = {};

// A simple navigation component
var Navigation = React.createClass({
  render: function() {
    return (
      <nav className="main-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/choose">Choose</Link>
          </li>
        </ul>
      </nav>
    );
  }
});

// The main application layout
// this.props.children will be set by React Router depending on the current route
var App = React.createClass({
  render: function() {
    return (
      <main>
        <header>
          <Link to='/'><div className="logotype">
            <i className="ionicons ion-pizza"></i>
            <h1 className="pizza-text">PizzaCat</h1><i className="ionicons ion-social-octocat"></i>
          </div></Link>
          <Navigation/>
        </header>
          <img className='pizzacat' src='https://b.thumbs.redditmedia.com/Afwa4gXgbau0iIbab9_HEOj5KdsJ9Gvwa-LvPlznJhU.png'/>
        <section>
          {this.props.children}
        </section>
        <footer>
          <p>&copy; PizzaCat 2016</p>
        </footer>
      </main>
    );
  }
});

// home "page"
var Home = React.createClass({
  render: function() {
    return (
      <div className='content'>
        <h1>Welcome to PizzaCat!</h1>
        <Link to='/order'>Order</Link>
      </div>
    );
  }
});

// order "page"
var Order = React.createClass({
  render: function() {
    return (
      <div className='content'>
        <h1>Order!</h1>
        <form>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder='please enter your name' />
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' placeholder='please enter your email address' />
          <label htmlFor='phone'>Phone Number</label>
          <input type='text' id='phone' placeholder='please enter your phone number' />
          <div className='address'>
            <label htmlFor='street'>Street Address</label>
            <input type='street' id='name' placeholder='please enter your address' />
            <label htmlFor='city'>City</label>
            <input type='text' id='city' placeholder='please enter your city' />
            <label htmlFor='province'>Province</label>
            <input type='text' id='province' placeholder='please enter your province' />
            <label htmlFor='postalcode'>Postal Code</label>
            <input type='text' id='postalcode' placeholder='please enter your postal code' />
          </div>
        </form>
        <Link to='/choose'>Choose your toppings</Link>
      </div>
    );
  }
});

// choose "page"
var Choose = React.createClass({
  render: function() {
    return (
      <div className='content'>
        <h1>Choose your toppings!</h1>
        <p>...</p>
      </div>
    );
  }
});

// not found "page"
var NotFound = React.createClass({
  render: function() {
    return (
      <div>Not Found!</div>
    );
  }
});

/*
The routes. This section says:
  - If the route starts with /, load the App component
  - If the route IS /, load the Home component INSIDE App as this.props.children
  - If the route is /about, load the About component INSIDE App as this.props.children
  - If the route is /team, load the Team component INSIDE App as this.props.children
  - If the route is /about, load the About component INSIDE App as this.props.children
  - If the route is anything else, load the NotFound component INSIDE App as this.props.children

The whole process lets us create **complex, nested user interfaces** with minimal effort,
by simply nesting `Route` components.
*/

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="order" component={Order}/>
      <Route path="choose" component={Choose}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// If this line of code is not here, nothing gets displayed!
ReactDOM.render(routes, document.querySelector('#app'));
