var React = require('react');
var data = require('./data');
var ToppingsCheesesDisplay = require('./ToppingsCheesesDisplay');

var cheeses = data.cheeses;
var toppings = data.toppings;

var Custom = React.createClass({
  getInitialState: function() {
    return {
      choices: []
    };
  },
  handleSelection: function(event) {
    var box = event.target;
    var isChecked = box.checked;
    var value = box.value;

    if (isChecked) {
      this.setState({
        choices: this.state.choices.concat(value)
      });
    }
    else {
      var index = this.state.choices.indexOf(value);
      var oldState = this.state.choices;
      oldState.splice(index, 1);
      
      if (index > -1) {
        this.setState({
          choices: oldState
        });
      }
    }
  },
  continueOrder: function() {
    data.setData('toppings', this.state.choices);
    
    this.props.history.push('/done');
  },
  render: function() {
    var disabled = this.state.choices.length === 0;
    var that = this;
    
    var cheesesList = cheeses.map(function(result) {
      var disabledCheckboxes = that.state.choices.length > 3 && that.state.choices.indexOf(result.name) === -1;
      return (
        <label>
          <input disabled={disabledCheckboxes} onChange={that.handleSelection} type='checkbox' name='cheeses' value={result.name} />
          <ToppingsCheesesDisplay photo={result.photo} name={result.name} price={result.price}/>
        </label>
      );
    });
    
    var toppingsList = toppings.map(function(result) {
      var disabledCheckboxes = disabledCheckboxes = that.state.choices.length > 3 && that.state.choices.indexOf(result.name) === -1;
      return (
        <label>
          <input disabled={disabledCheckboxes} onChange={that.handleSelection} type='checkbox' name='toppings' value={result.name} />
          <ToppingsCheesesDisplay photo={result.photo} name={result.name} price={result.price}/>
        </label>
      );
    });
    
    var basePrice = {name: 'basePrice', price: 10};   // pizza base price
    var choices = this.state.choices;                 // choices of toppings and cheese selected by the user
    var all = cheeses.concat(toppings);               // make an array of both the cheeses and toppings list
    var pricesArray = [basePrice.price];              // make a new array that takes prices (basePrice already included)
    
    all.forEach(function(index) {                     // loop over each items available
      if (choices.indexOf(index.name) !== -1) {       // check if the name of the choice of the user is the same as one in the list (hint: it is)
        pricesArray.push(index.price);                // push the PRICE of that specific item object with the matching name in the prices array
      }
    });
    
    var totalPrice = pricesArray.reduce(function(acc, curr) {   // reduce that pricesArray to a single total value
      return acc + curr;
    }, 0);
    
    return (
      <div className='content'>
        <h1>Customize your pizza!</h1>
        <p>You can choose up to 4 toppings. The base price is 10$.</p>
        <p>Your pizza will cost: {totalPrice} $</p>
        <form>
          <ul className="results">
            {cheesesList}
            {toppingsList}
          </ul>
        </form>
        <button onClick={this.continueOrder} type='button' disabled={disabled}>Place your order</button>
      </div>
    );
  }
});

module.exports = Custom;