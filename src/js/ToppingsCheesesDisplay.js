var React = require('react');

var ToppingsCheesesDisplay = React.createClass({
  render: function() {
    return (
      <li>
        <div>
          {/*<div className='img-container-toppings'>
            <img src={this.props.photo}/>
          </div>*/}
          <ul>
            <li className='toppingName'>{this.props.name}</li>
            <li>{this.props.price}$</li>
          </ul>
        </div>
      </li>
    );
  }
});

module.exports = ToppingsCheesesDisplay;