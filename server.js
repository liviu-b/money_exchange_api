const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your actual API key and endpoint
const EXCHANGE_RATE_API_URL = 'https://api.exchangerate-api.com/v4/latest/';
const API_KEY = 'your_api_key_here'; // If required by the API

// Endpoint to get exchange rates for a base currency
app.get('/api/rates/:base', async (req, res) => {
  const baseCurrency = req.params.base.toUpperCase();
  try {
    const response = await axios.get(`${EXCHANGE_RATE_API_URL}${baseCurrency}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching exchange rates' });
  }
});

// Endpoint to convert an amount from one currency to another
app.get('/api/convert', async (req, res) => {
  const { from, to, amount } = req.query;
  if (!from || !to || !amount) {
    return res.status(400).json({ error: 'Missing required query parameters' });
  }

  try {
    const response = await axios.get(`${EXCHANGE_RATE_API_URL}${from.toUpperCase()}`);
    const rates = response.data.rates;
    const rate = rates[to.toUpperCase()];

    if (!rate) {
      return res.status(400).json({ error: 'Invalid target currency' });
    }

    const convertedAmount = (amount * rate).toFixed(2);
    res.json({ from, to, amount, convertedAmount });
  } catch (error) {
    res.status(500).json({ error: 'Error converting currency' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});