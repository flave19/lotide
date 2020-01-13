const assertEqual = require('../assertEqual');

const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(tail(words).length, 2); // original array should still have 3 elements!