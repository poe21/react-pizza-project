var React = require('react');
var data = require('./data');
var PizzaDisplay = require('./PizzaDisplay');

var pizzas = data.pizzas;

var Choose = React.createClass({
  getInitialState: function() {
    return {
      pizzas: []
    };
  },
  handleChange: function(changedField, event) {
    var obj = {name: event.target.name, price: event.target.price};
    
    this.setState({
      pizzas: this.state.pizzas.concat([obj])
    });
  },
  customPizza: function() {
    this.props.history.push('/custom');
  },
  continueOrder: function() {
    data.setData('pizzas', this.state);
    this.props.history.push('/done');
  },
  render: function() {
    var disabled = true;  // change this
    var that = this;
    
    var pizzasList = pizzas.map(function(result, i) {
      return (
        <label>
          <input onChange={that.handleChange} type='checkbox' id='{result.name} + i' name={result.name} value={result.price} />
          <PizzaDisplay photo={result.photo} name={result.name} price={result.price} cheese={result.cheese} toppings={result.toppings}/>
        </label>
      );
    });
    
    return (
      <div className='content'>
        <h1>Choose your pizza</h1>
        <form>
          <ul className="results">
            {pizzasList}
          </ul>
        </form>
        <div className='buttonSet'>
          <button onClick={this.customPizza} type='button' disabled={disabled}>Create a custom pizza</button>
          <button onClick={this.continueOrder} type='button' disabled={disabled}>Place your order</button>
        </div>
      </div>
    );
  }
});

module.exports = Choose;