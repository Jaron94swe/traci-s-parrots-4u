import express  from "express"
import db from './models'
import bodyParser from 'body-parser';
import crypto from 'crypto';
import squareConnect from 'square-connect';
// const sequelize = require("sequelize");
import routes from "./controllers/inventoryController";
const app = express();
const PORT = process.env.PORT || 3003;

const accessToken = 'EAAAECmm4SjwD11FAGgHF8apvflRrQlyLJCD5rZ4-78K_EY7_9NrOEU0w5TOeLtL';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

// Set Square Connect credentials and environment
const defaultClient = squareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken;

// Set 'basePath' to switch between sandbox env and production env
// sandbox: https://connect.squareupsandbox.com
// production: https://connect.squareup.com
defaultClient.basePath = 'https://connect.squareupsandbox.com';

app.post('/process-payment', async (req, res) => {
  const request_params = req.body;

  // length of idempotency_key should be less than 45
  const idempotency_key = crypto.randomBytes(22).toString('hex');

  // Charge the customer's card
  const payments_api = new squareConnect.PaymentsApi();
  const request_body = {
    source_id: request_params.nonce,
    amount_money: {
      amount: 100, // $1.00 charge
      currency: 'USD'
    },
    idempotency_key: idempotency_key
  };

  try {
    const response = await payments_api.createPayment(request_body);
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response
    });
  } catch(error) {
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    });
  }
});


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);
routes(app);

// Start the API server
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
}).catch(function (err) {
    console.log(err)
});
