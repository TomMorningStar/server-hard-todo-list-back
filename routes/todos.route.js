const { Router } = require('express');
const { todoController } = require('../controllers/todo.controllers');

const router = Router();

router.get('/', todoController.getTodo);
router.post('/', todoController.addTodo);
router.patch('/:id', todoController.editTodo);
router.delete('/:id', todoController.deleteTodo);
router.get('/:id', todoController.getTodoById);

module.exports = router;
