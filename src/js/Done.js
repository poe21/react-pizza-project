var React = require('react');

// done "page"
var Done = React.createClass({
  render: function() {
    return (
      <div className='content'>
        <h1>Thank you for your order!</h1>
        <p>Your pizza should arrive in 45 minutes.</p>
      </div>
    );
  }
});

module.exports = Done;