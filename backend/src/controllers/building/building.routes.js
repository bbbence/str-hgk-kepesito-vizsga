/**
 * @Todo két végpont implementálása egy put és get metódusra
 *
 */
const express = require('express');
const router = express.Router();
const controller = require('./building.controller');

// read
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next);
  });
  
  router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next);
  });
  
  // update
  router.put('/:id', (req, res, next) => {
    return controller.update(req, res, next);
  });

module.exports = router;