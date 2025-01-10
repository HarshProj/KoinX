require('dotenv').config()
const express = require('express');
const axios = require('axios');
const cron = require('node-cron');
const Crypto = require('./models/crypto')
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
const cors=require("cors");
app.use(cors());
const db=require('./db')
db();

//Sccheduling

   
cron.schedule('0 */2 * * *', async () => {
    // const save=async()=>{
    const coins = ['bitcoin', 'matic-network', 'ethereum'];
    console.log("job Started")
    try {
      const responses = await Promise.all(
        coins.map((coin) =>
          axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
          )
        )
      );
  
      for (let i = 0; i < coins.length; i++) {
        const data = responses[i].data[coins[i]];
        await Crypto.create({
          coin: coins[i],
          price: data.usd,
          marketCap: data.usd_market_cap,
          change24h: data.usd_24h_change,
        });
      //   await Cr
      }
      console.log('Data fetched and stored successfully.');
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  });
// }
//   save();
app.get('/',(req,res)=>{
    res.json({msg:"Welcome to User-Transaction field",
      stats:"use this url : /api/stats?coin=coin_name",
      pagination:":  /api/deviation?coin=coin_name"
    });
  } );
app.use('/api',require('./Routes/stats'));

// Route: /deviation
app.use('/api',require("./Routes/deviation"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
