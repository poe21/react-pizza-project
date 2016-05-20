var React = require('react');

var BoughtToppingsDisplay = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li className='toppingName'>{this.props.name}</li>
          <li>{this.props.price}$</li>
        </ul>
      </div>
    );
  }
});

module.exports = BoughtToppingsDisplay;