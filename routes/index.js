
var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz', errors: [] });
});

router.param('quizId', quizController.load);


router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/new', quizController.new);
router.get('/quizes/create', quizController.create);


module.exports = router;