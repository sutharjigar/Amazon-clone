const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'sk_test_51NYlLHSA71Dhs944iqvroC0TJh7BbhMAky2FcWRrkSg255VY9R52TLj0YkYOYtmFXB8sVRBqNMLfttmpkA9d68Zr00FT2vqh9x'
)

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (req, res) => res.status(200).send('hello jiiiii'))

app.post('/payments/create', async (req, res) => {
  const total = req.query.total

  console.log('Payment Request Recieved GG >>>', total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  })

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})
exports.api = functions.https.onRequest(app)

// http://127.0.0.1:5001/challange-4efa0/us-central1/api
