const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const messages = require('./controllers/messages_controller');
app.use(bodyParser.json());
const port = 3000;

    const messageBaseUrl = "/api/messages";
    app.post(messageBaseUrl, messages.create);

    app.get(messageBaseUrl, messages.get);

    app.put(`${messageBaseUrl}/:id`, messages.update);

    app.delete(`${messageBaseUrl}/:id`, messages.delete);

app.listen(port, () => `Listening to port ${port}`);