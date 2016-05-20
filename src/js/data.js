/* global localStorage */

var data = {};

function getData(key) {
  if(key){
     return data[key];
  } else {
    return data;
  }
   
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

// Cheeses

var cheeses = [
  {
    name: 'mozzarella',
    price: 3,
    photo: ''
  },
  {
    name: 'parmesan',
    price: 4,
    photo: ''
  },
  {
    name: 'goat cheese',
    price: 6,
    photo: ''
  }
];

// Toppings

var toppings = [
  {
    name: 'Pepperoni',
    price: 2,
    photo: ''
  },
  {
    name: 'Ham',
    price: 3,
    photo: ''
  },
  {
    name: 'Prosciutto',
    price: 5,
    photo: ''
  },
  {
    name: 'Olive oil',
    price: 4,
    photo: ''
  },
  {
    name: 'Tomato sauce',
    price: 2,
    photo: ''
  },
  {
    name: 'Basil',
    price: 1,
    photo: ''
  },
  {
    name: 'Tomatoes',
    price: 3,
    photo: ''
  },
  {
    name: 'Onion',
    price: 2,
    photo: ''
  },
  {
    name: 'Red Pepper',
    price: 2,
    photo: ''
  },
  {
    name: 'Jalapeno Peppers',
    price: 4,
    photo: ''
  },
  {
    name: 'Black olives',
    price: 3,
    photo: ''
  },
  {
    name: 'Pineapple',
    price: 4,
    photo: ''
  }
];

module.exports = {
    setData: setData,
    getData: getData,
    pizzas: pizzas,
    cheeses: cheeses,
    toppings: toppings
};