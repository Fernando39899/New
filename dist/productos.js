const express = require('express');
const router = express.Router();

let productos = [
  { id: 1, nombre: 'Mouse', cantidad: 25 },
  { id: 2, nombre: 'Teclado', cantidad: 15 }
];

router.get('/', (req, res) => res.json(productos));

module.exports = router;
