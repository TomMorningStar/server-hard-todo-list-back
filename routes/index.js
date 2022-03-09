const { Router } = require('express');
const router = Router();

router.use('/todos', require('./todos.route'))

module.exports = router