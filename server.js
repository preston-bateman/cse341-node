const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Ben Midgley');
});

app.listen(port, () => {
  console.log(`This is running on port ${port}`)
})