const EventEmitter = require('events');

const myEmmiter = new EventEmitter();

myEmmiter.on('newSale', () => {
  console.log('There was a new sale!');
});

myEmmiter.on('newSale', () => {
  console.log('Customer name: Jonas');
});

myEmmiter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

myEmmiter.emit('newSale', 9);
