var React = require('react');
var data = require('./data');
var BoughtPizzasDisplay = require('./BoughtPizzasDisplay');
var BoughtToppingsDisplay = require('./BoughtToppingsDisplay');

var allPizzas = data.pizzas;
var cheeses = data.cheeses;
var toppings = data.toppings;
var allToppings = cheeses.concat(toppings);
var basePrice = data.basePrice;

var Confirm = React.createClass({
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
      userInfo: userInfo || {},
      chosenPizzas: chosenPizzas || [],
      chosenToppings: chosenToppings || []
    });
  },
  confirmOrder: function() {
    data.setData('toppings', this.state.choices);
    
    this.props.history.push('/done');
  },
  render: function() {
    var userInfo = this.state.userInfo;
    var chosenPizzas = this.state.chosenPizzas;
    var chosenToppings = this.state.chosenToppings;
    
    // PIZZAS: getting pizza objects from the 'database', which names match the user's choices
    var chosenPizzasObjectsArray = []; 
    allPizzas.forEach(function(pizza) {
      if (chosenPizzas.indexOf(pizza.name) !== -1) {
        chosenPizzasObjectsArray.push(pizza);
      }
    });
    
    var pizzasList = chosenPizzasObjectsArray.map(function(pizza) {
      return (
        <BoughtPizzasDisplay name={pizza.name} price={pizza.price} cheese={pizza.cheese}/>
      );
    });
    
    // TOPPINGS: getting cheese and toppings objects from the 'database', which names match the user's choices
    var chosenToppingsObjectsArray = []; 
    allToppings.forEach(function(topping) {
      if (chosenToppings.indexOf(topping.name) !== -1) {
        chosenToppingsObjectsArray.push(topping);
      }
    });
    
    var toppingsList = chosenToppingsObjectsArray.map(function(topping) {
      return (
          <BoughtToppingsDisplay name={topping.name} price={topping.price}/>
      );
    });
    
    
    // PRICE: calculating the total price according to the choices made by the user
    var allPurchases = chosenPizzasObjectsArray.concat(chosenToppingsObjectsArray); 
    var pricesArray = [];
    
    if (chosenToppingsObjectsArray.length > 0) {
      pricesArray.push(basePrice.price);
    }
    
    allPurchases.forEach(function(item) {
      pricesArray.push(item.price);
    });

    var totalPrice = pricesArray.reduce(function(acc, curr) {
      return acc + curr;
    }, 0);

    return (
      <div className='content'>
        <h1>Please confirm your order:</h1>
        <div>
          <h2>Your personal informations:</h2>
          <ul>
            <li>{userInfo.name}</li>
            <li>{userInfo.email}</li>
            <li>{userInfo.phone}</li>
            <li>{userInfo.street}</li>
            <li>{userInfo.city}</li>
            <li>{userInfo.province}</li>
            <li>{userInfo.postalcode}</li>
          </ul>
        </div>
        <div>
          {(chosenPizzas.length > 1) ? <h2>Your pizzas:</h2> : null}
          {(chosenPizzas.length === 1) ? <h2>Your pizza:</h2> : null}
          {pizzasList ? pizzasList : null}
        </div>
        <div>
          {(chosenToppings.length >= 1) ? <div><h2>Your pizza:</h2><p>Custom pizza</p></div> : null}
          {(chosenToppings.length > 1) ? <h2>Your toppings: </h2> : null}
          {(chosenToppings.length === 1) ? <h2>Your topping: </h2> : null}
          {toppingsList ? toppingsList : null}
        </div>
        <div>
          <h2>Total Price:</h2>
          {totalPrice} $
        </div>
        <button onClick={this.confirmOrder} type='button'>Confirm</button>
      </div>
    );
  }
});


module.exports = Confirm;