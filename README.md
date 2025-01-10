# Cryptocurrency Data Fetcher and Deviation Calculator

This project is a Node.js application that fetches cryptocurrency data every 2 hours, stores it in a MongoDB database, and provides API endpoints for querying the data. It also calculates the standard deviation of cryptocurrency prices over the last 100 records for a specified coin.

## Features

- Fetches real-time cryptocurrency data for Bitcoin, Matic, and Ethereum from the CoinGecko API.
- Stores cryptocurrency data (price, market cap, 24-hour change) in a MongoDB database.
- Provides an API to fetch the latest data for a requested cryptocurrency.
- Calculates and returns the standard deviation of the last 100 cryptocurrency prices for a specified coin.
- Cron job runs every 2 hours to fetch new data.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Scheduler**: node-cron
- **API Integration**: Axios (to fetch data from CoinGecko API)
- **Environment Variables**: dotenv
- **CORS**: For cross-origin requests

## Setup and Installation

### 1. Clone the repository

```bash
git clone https://github.com/HarshProj/KoinX.git
```
### Home page
![image](https://github.com/user-attachments/assets/ddda5505-278e-4cf8-9d06-396d34183625)

### Coin Stats
![image](https://github.com/user-attachments/assets/7a8ca39a-3f06-4b42-b607-e22bdb546956)

### Deviation
![image](https://github.com/user-attachments/assets/cedc2b15-3340-4bcb-8899-2d2de014e6f4)

### extra
## Top 15 entries
![image](https://github.com/user-attachments/assets/bfe1f9d9-d409-4d4d-9144-508311ac79c2)


