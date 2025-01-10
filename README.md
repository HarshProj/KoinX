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
git clone https://github.com/HarshProj/cryptocurrency-data-fetcher.git
cd cryptocurrency-data-fetcher
