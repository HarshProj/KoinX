const express=require("express");
const router=express.Router();
const Crypto = require('../models/crypto')
router.get('/stats', async (req, res) => {
    const { coin } = req.query;
    if (!coin) return res.status(400).json({ error: 'Coin parameter is required' });
  
    try {
      const latestData = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
      if (!latestData) return res.status(404).json({ error: 'Data not found for the requested coin' });
  
      res.json({
        price: latestData.price,
        marketCap: latestData.marketCap,
        '24hChange': latestData.change24h,
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  router.get('/stats/all',async(req,res)=>{
    try {
        const latestData = await Crypto.find().sort({ timestamp: -1 })  // Sort by timestamp in descending order
        .limit(15); ;
        // console.log(latestData);
        if (!latestData) return res.status(404).json({ error: 'Data not found for the requested coin' });
        const info=latestData.map((data)=>{
           return {
                "coin":data.coin,
              "price": data.price,
              "marketCap": data.marketCap,
              '24hChange': data.change24h,
            }
        })
        res.json({msg:"top 15 entries are",info});
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
  })
module.exports=router;