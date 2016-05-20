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
  handleSelection: function(event) {
    var box = event.target;
    var isChecked = box.checked;
    var value = box.value;
    
    if (isChecked) {
      this.setState({
        pizzas: this.state.pizzas.concat(value)
      });
    }
    else {
      var index = this.state.pizzas.indexOf(value);
      var oldState = this.state.pizzas;
      var newState = oldState.slice(0, index).concat(oldState.slice(index + 1));
      
      this.setState({
        pizzas: newState
      });
    }
  },
  customPizza: function() {
    this.props.history.push('/custom');
  },
  continueOrder: function() {
    data.setData('pizzas', this.state.pizzas);
    this.props.history.push('/done');
  },
  render: function() {
    var disabled = this.state.pizzas.length === 0;
    var that = this;
    
    var pizzasList = pizzas.map(function(result) {
      return (
        <label>
          <input className='pizzaCheckbox' onChange={that.handleSelection} type='checkbox' name='pizza' value={result.name} />
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
          <button onClick={this.customPizza} type='button'>Create a custom pizza</button>
          <button onClick={this.continueOrder} type='button' disabled={disabled}>Place your order</button>
        </div>
      </div>
    );
  }
});

module.exports = Choose;