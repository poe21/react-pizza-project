var React = require('react');
var Link = require('react-router').Link;

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

module.exports = Navigation;