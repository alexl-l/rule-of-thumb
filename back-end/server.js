// =======================================================================================
// Developed By           : Jhon Alexander López Bohórquez
// Email                  : jalb.23@hotmail.com
// Creation Date          : 2021-02-15 22:36:41
// =======================================================================================
// Version    Description
// [1.0.0]    This class configures the server and calls the different controllers
// =======================================================================================

const express = require('express');
const dotenv = require('dotenv');
const ruling = require('./routes/ruling.routes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/error');
const connectDB =  require('./config/db');
var cors = require('cors')

dotenv.config({path: './config/config.env'});

connectDB();
 
const app = express();

app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(logger);
app.use('/api/v1/rulings', ruling);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});