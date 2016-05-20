var React = require('react');
var data = require('./data');
var BoughtPizzasDisplay = require('./BoughtPizzasDisplay');
var BoughtToppingsDisplay = require('./BoughtToppingsDisplay');

var allPizzas = data.pizzas;
var cheeses = data.cheeses;
var toppings = data.toppings;
var allToppings = cheeses.concat(toppings);
var basePrice = {name: 'basePrice', price: 10};

var Done = React.createClass({
  getInitialState: function() {
    return {
      allInfo: {}
    };
  },
  componentWillMount: function() {
    var userInfo = data.getData('info');
    var chosenPizzas = data.getData('pizzas');
    var chosenToppings = data.getData('toppings');
    
    this.setState({
      userInfo: userInfo,
      chosenPizzas: chosenPizzas,
      chosenToppings: chosenToppings
    });
  },
  render: function() {
    var that = this;
    var pizzasList;
    var toppingsList;
    
    if (this.state.chosenPizzas) {
      var chosenPizzasObjectsArray = []; 
      
      allPizzas.forEach(function(pizza) {
        if (that.state.chosenPizzas.indexOf(pizza.name) !== -1) {
          chosenPizzasObjectsArray.push(pizza);
        }
      });
      
      pizzasList = chosenPizzasObjectsArray.map(function(pizza) {
        return (
            <BoughtPizzasDisplay name={pizza.name} price={pizza.price} cheese={pizza.cheese} toppings={pizza.toppings}/>
        );
      });
    } 
    
    else if (this.state.chosenToppings) {
      var chosenToppingsObjectsArray = []; 
      
      allToppings.forEach(function(topping) {
        if (that.state.chosenToppings.indexOf(topping.name) !== -1) {
          chosenToppingsObjectsArray.push(topping);
        }
      });
      
      toppingsList = chosenToppingsObjectsArray.map(function(topping) {
        return (
            <BoughtToppingsDisplay name={topping.name} price={topping.price}/>
        );
      });
    }
    
    return (
      <div className='content'>
        <h1>Done!</h1>
        <div>
          <h2>Your personal informations:</h2>
          <ul>
            <li>{that.state.userInfo.name}</li>
            <li>{that.state.userInfo.email}</li>
            <li>{that.state.userInfo.phone}</li>
            <li>{that.state.userInfo.street}</li>
            <li>{that.state.userInfo.city}</li>
            <li>{that.state.userInfo.province}</li>
            <li>{that.state.userInfo.postalcode}</li>
          </ul>
        </div>
        <div>
          <h2>Your pizza(s):</h2>
          {pizzasList}
        </div>
        <div>
          {toppings ? toppings : null}
        </div>
      </div>
    );
  }
});

module.exports = Done;