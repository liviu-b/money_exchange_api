# Money Exchange API

A simple and efficient REST API for currency exchange rates and conversions. This API allows users to fetch current exchange rates and convert amounts between different currencies.

## Features

- Get latest exchange rates for any base currency
- Convert amounts between different currencies
- Simple REST API interface
- Error handling and validation
- Environment variables support

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- An API key from a currency exchange rate provider

## Installation
```
1. Clone the repository:
bash
git clone https://github.com/yourusername/money-exchange-api.git
cd money-exchange-api


2. Install dependencies:

bash
npm install


3. Create a `.env` file in the root directory and add your API key and server port:

plaintext
EXCHANGE_RATE_API_KEY=your_api_key_here
PORT=3000


4. Start the server:

bash
node src/server.js
```



## Usage

### Get Exchange Rates

- **Endpoint**: `/api/rates/:base`
- **Method**: GET
- **Example**: `/api/rates/USD`

### Convert Currency

- **Endpoint**: `/api/convert`
- **Method**: GET
- **Query Parameters**:
  - `from`: Currency code to convert from (e.g., USD)
  - `to`: Currency code to convert to (e.g., EUR)
  - `amount`: Amount to convert
- **Example**: `/api/convert?from=USD&to=EUR&amount=100`

## Error Handling

The API provides meaningful error messages for invalid requests or server errors. Ensure to check the response status and message for troubleshooting.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.