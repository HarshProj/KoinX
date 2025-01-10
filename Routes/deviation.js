const express=require('express');
const router=express.Router();
const Crypto=require('../models/crypto')
router.get('/deviation', async (req, res) => {
    const { coin } = req.query;
    if (!coin) return res.status(400).json({ error: 'Coin parameter is required' });
  
    try {
      const records = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);
      if (records.length === 0) return res.status(404).json({ error: 'No data available for the requested coin' });
  
      const prices = records.map((record) => record.price);
      const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
      const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
      const standardDeviation = Math.sqrt(variance);
        // console.log(prices,mean,variance,standardDeviation);
      res.json({ deviation: standardDeviation.toFixed(2) });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  module.exports=router;