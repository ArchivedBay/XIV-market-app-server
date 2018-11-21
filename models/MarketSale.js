const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marketSaleSchema = new Schema({
  itemID: {
    type: Number,
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  serverName: {
    type: String,
    required: true
  },
  pricePerUnit: {
    type: Number,
    required: true
  },
  priceTotal: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  purchaseDate: {
    type: Number,
    required: true,
  },
  isHQ: {
    type: Boolean,
    required: true
  }
})

module.exports = MarketSale = mongoose.model('marketSales', marketSaleSchema)