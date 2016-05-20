var React = require('react');

var BoughtPizzasDisplay = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li className='pizzaName'>{this.props.name}</li>
          <li>{this.props.price}$</li>
          <li>{this.props.cheese}</li>
          <li>{this.props.toppings}</li>
        </ul>
      </div>
    );
  }
});

module.exports = BoughtPizzasDisplay;