const express = require('express');
const server = express();
const body_parser = require('body-parser');
const axios = require('axios');
const cors = require('cors')
const port = 3000;

server.use(body_parser.json());
server.use(cors());

server.post("/quote", (req, res) => {
    const customer_id = 'cus_Mo0orRQuvEjVIF';
    const token = 'MTM0MGFjMzMtZGQ1ZS00ZTY3LTgzMzEtNGYzODY3ZWVlNjZhOg=='
    const quoteUrl = 'https://api.postmates.com/v1/customers/' + customer_id + '/delivery_quotes';
    axios.post(quoteUrl, req.body, {
        headers: {
            'Authorization': `Basic ${token}`
        }
    }).then((response) => {
        // console.log(response.data);
        res.json(response.data);
    }).catch((err) => {
        console.error(err);
        res.json(err)
    })
});


server.post("/delivery_request", (req, res) => {
    const customer_id = 'cus_Mo0orRQuvEjVIF';
    const token = 'MTM0MGFjMzMtZGQ1ZS00ZTY3LTgzMzEtNGYzODY3ZWVlNjZhOg=='
    const quoteUrl = 'https://api.postmates.com/v1/customers/' + customer_id + '/deliveries';
    axios.post(quoteUrl, req.body, {
        headers: {
            'Authorization': `Basic ${token}`
        }
    }).then((response) => {
        // console.log(response.data);
        res.json(response.data);
    }).catch((err) => {
        console.error(err);
        res.json(err)
    })
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});