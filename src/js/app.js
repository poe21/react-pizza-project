var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var Navigation = require('./Navigation');
var Home = require('./Home');
var Order = require('./Order');
var Choose = require('./Choose');
var Custom = require('./Custom');
var Confirm = require('./Confirm');
var Done = require('./Done');
var NotFound = require('./NotFound');

// The main application layout
// this.props.children will be set by React Router depending on the current route
var App = React.createClass({
  render: function() {
    return (
      <main>
        <header>
          <Link to='/'>
            <div className="logotype">
              <i className="ionicons ion-pizza"></i>
              <h1 className="pizza-text">PizzaCat</h1>
            </div>
          </Link>
          <Navigation/>
        </header>
        <img className='pizzacat' src='../img/pizzacat.png'/>
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

/*
The routes. This section says:
  - If the route starts with /, load the App component
  - If the route IS /, load the Home component INSIDE App as this.props.children
  - If the route is /order, load the Order component INSIDE App as this.props.children
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
      <Route path="custom" component={Custom}/>
      <Route path="confirm" component={Confirm}/>
      <Route path="done" component={Done}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// If this line of code is not here, nothing gets displayed!
ReactDOM.render(routes, document.querySelector('#app'));