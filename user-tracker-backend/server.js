const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

// ... other middleware and routes

app.listen(5432, () => {
  console.log('Server is running on port 5432');
});
