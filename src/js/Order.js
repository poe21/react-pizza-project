var React = require('react');
var data = require('./data');

var Order = React.createClass({
  getInitialState: function() {
    var info = data.getData('info') || {};
    
    return {
      name: info.name || '',
      email: info.email || '',
      phone: info.phone || '',
      street: info.street || '',
      city: info.city || '',
      province: info.province || '',
      postalcode: info.postalcode || ''
    };
  },
  handleChange: function(changedField, event) {
    this.setState({
      [changedField]: event.target.value                   // es6 object literal
    });
  },
  continueOrder: function() {
    data.setData('info', this.state);
    this.props.history.push('/choose');
  },
  render: function() {
    var disabled = this.state.name.length === 0 || this.state.email.length === 0 || this.state.phone.length === 0 || this.state.street.length === 0 || this.state.city.length === 0 || this.state.province.length === 0 || this.state.postalcode.length === 0;
    var that = this;
    
    return (
      <div className='content'>
        <h1>Order!</h1>
        <form>
          <label>Name</label>
          <input value={this.state.name} onChange={function(event) {that.handleChange('name', event);}} type='text' id='name' />
          <label>Email</label>
          <input value={this.state.email} onChange={function(event) {that.handleChange('email', event);}} type='text' id='email'/>
          <label>Phone Number</label>
          <input value={this.state.phone} onChange={function(event) {that.handleChange('phone', event);}}  type='text' id='phone'/>
          <label>Street Address</label>
          <input value={this.state.street} onChange={function(event) {that.handleChange('street', event);}} type='street' id='name'/>
          <label>City</label>
          <input value={this.state.city} onChange={function(event) {that.handleChange('city', event);}} type='text' id='city'/>
          <label>Province</label>
          <input value={this.state.province} onChange={function(event) {that.handleChange('province', event);}} type='text' id='province'/>
          <label>Postal Code</label>
          <input value={this.state.postalcode} onChange={function(event) {that.handleChange('postalcode', event);}} type='text' id='postalcode'/>
        </form>
        <button onClick={this.continueOrder} type='button' disabled={disabled}>Choose your pizza</button>
      </div>
    );
  }
});

module.exports = Order;