const express = require('express');
const router = express.Router();
const MarketSale = require('../../models/MarketSale');

// @route   GET to: 'api/marketSales/:serverName/:itemID'
// @desc    market history for given item
// @access  Public
router.get('/:serverName/:itemID', (req, res) => {
  MarketSale.find({
    serverName: req.body.serverName,
    itemID: req.body.itemID
  })
  .then(marketSales => res.json(
    marketSales ? marketSales : res.json( {message: 'no results were found in the database'} )
  ))
  .catch( error => console.log(error) ); 
});

router.post('/:serverName/:itemID', (req, res) => {
  MarketSale.findOne({
    itemID: req.body.itemID,
    serverName: req.body.serverName,
    saleDate: req.body.saleDate
  }).then(marketSale => {

    if(marketSale) return res.json({
      message: 'this sale already exists',
      marketSale: marketSale
    });

    // make a new Market Sale document
    const newMarketSale = new MarketSale({
      serverName:   req.body.serverName,
      itemID:       req.body.itemID,
      itemName:     req.body.itemName,
      isHQ:         req.body.IsHQ,
      pricePerUnit: req.body.PricePerUnit,
      priceTotal:   req.body.PriceTotal,
      purchaseDate: req.body.PurchaseDate,
      quantity:     req.body.Quantity
    });

    // save the new document in the DB.
    newMarketSale.save()
      .then(marketSale => res.json('successfully added new sale to the database'))
      .catch(error => res.status(400).json({
        message: 'Unable to save this market sale, check your formatting!'
      }));
    
  })
  .catch( error => console.log(error) );
});


module.exports = router;

