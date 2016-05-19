/* global localStorage */

var data = {};

function getData(key) {
    return data[key];
}

function setData(key, value) {
    data[key] = value;
    
    localStorage.setItem(key, JSON.stringify(value));
}

// Pizzas
var pizzas = [
  {
    name: 'Pepperoni, Cat & Cheese',
    cheese: 'mozzarella',
    toppings: ['pepperoni', 'cat hair'],
    price: 15,
    photo: '../img/pizzas/pepperoni-cheese.jpg'
  },
  {
    name: 'The Italian',
    cheese: 'parmesan',
    toppings: ['basil', 'tomatoes', 'prosciutto', 'olive oil'],
    price: 20,
    photo: '../img/pizzas/italian.jpg'
  },
  {
    name: 'The Fancy Pants',
    cheese: 'goat cheese',
    toppings: ['ham', 'pepperoni', 'onion', 'red pepper', 'jalapeno peppers', 'black olives', 'basil', 'tomatoes'],
    price: 25,
    photo: '../img/pizzas/olives-pizz.jpg'
  },
  {
    name: 'The Hawaiian Cat',
    cheese: 'mozzarella',
    toppings: ['ham', 'pineapple', 'onion'],
    price: 15,
    photo: '../img/pizzas/hawaii.jpg'
  }
];

module.exports = {
    setData: setData,
    getData: getData,
    pizzas: pizzas
};