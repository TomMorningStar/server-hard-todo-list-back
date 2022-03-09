const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());
app.use(require('./routes'));

mongoose.connect("mongodb+srv://into:1234@cluster0.7eunh.mongodb.net/Todo-List?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'));

app.listen(3567, () => {
    console.log('Работаем ребята');
}) 