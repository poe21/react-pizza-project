var React = require('react');

var Custom = React.createClass({
  getInitialState: function() {
    return {
      toppings: []
    };
  },
  handleChange: function(event) {
    // var obj = {name: event.target.name, price: event.target.price};
    
    // this.setState({
    //   toppings: this.state.toppings.concat([obj])
    // });
  },
  render: function() {
    return (
      <div className='content'>
        <h1>Customize your pizza</h1>
        <p>...</p>
      </div>
    );
  }
});

module.exports = Custom;