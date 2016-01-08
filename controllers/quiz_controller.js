var models = require('../models/models.js');

exports.load = function (req, res, next, quizId) {
    models.Quiz.findById(quizId).then(
            function (quiz) {
                if (quiz) {
                    req.quiz = quiz;
                    next();
                } else {
                    next(new Error('No existe quizId = ' + quizId));
                }
            }
    ).catch(function (error) {
        next(error);
    });
};

//GET /quizes/new

exports.new = function (req, res) {
    var quiz = models.Quiz.build(// crea objeto quiz
            {pregunta: 'Pregunta', respuesta: 'Respuesta'}
    );
    res.render('quizes/new', {quiz: quiz});
};

// POST /quizes/create

 exports.create = function(req, res) {
   var quiz = models.Quiz.build( req.body.quiz );
   // save: guarda en DB campos pregunta y respuesta de quiz
   quiz.save({fields: ["pregunta", "respuesta"]})
         .then( function(){ res.redirect('/quizes');
       });      // res.redirect: Redirección HTTP a lista de preguntas
 };
 
 // GET /quizes

exports.index = function (req, res) {
    models.Quiz.findAll().then(function (quizes) {
        res.render('quizes/index', {quizes: quizes});
    });
};

// GET /quizes/question
exports.show = function (req, res) {
    models.Quiz.findById(req.params.quizId).then(function (quiz) {
        res.render('quizes/show', {quiz: req.quiz});
    });
};


exports.answer = function (req, res) {
    models.Quiz.findById(req.params.quizId).then(function (quiz) {
        if (req.query.respuesta === req.quiz.respuesta) {
            res.render('quizes/answer',
                    {quiz: quiz, respuesta: 'Correcto'});
        } else {
            res.render('quizes/answer',
                    {quiz: req.quiz, respuesta: 'Incorrecto'});
        }
    });
};

