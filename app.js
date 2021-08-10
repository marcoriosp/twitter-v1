import setMiddlewares from './src/middlewares/index.js';
import express from 'express';
import apicache from 'apicache';

let cache = apicache.middleware

const app = express();
setMiddlewares(app);

// Static resources
//app.use(express.static('public')); 
app.use('/', express.static('public'));

// cache Interface data cache for 2 minutes
app.use(cache('2 minutes', (req, res) => res.statusCode === 200));

let server;

const PORT = process.env.PORT || 3002;
const HOST = process.env.HOST || '';

if (process.env.NODE_ENV !== 'test') {
  server = (app.listen(PORT, () => {
    console.log(`Server running @ http://${HOST ? HOST : 'localhost'}:${PORT}`)
  }));
}

export default function() { app };