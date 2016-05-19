var React = require('react');

var PizzaDisplay = React.createClass({
  render: function() {
    return (
      <li className='pizzaItems'>
        <div className='pizzas'>
          <div className='img-container'>
            <img src={this.props.photo}/>
          </div>
          <ul>
            <li className='pizzaName'>{this.props.name}</li>
            <li>{this.props.price}$</li>
          </ul>
          <ul className='pizzaIngredients'>
            <li>{this.props.cheese}</li>
            <li className='toppings'>{this.props.toppings}</li>
          </ul>
        </div>
      </li>
    );
  }
});

module.exports = PizzaDisplay;