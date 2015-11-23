{"filter":false,"title":"temp.js","tooltip":"/controllers/temp.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":69,"column":0},"action":"insert","lines":["// controllers/book.js","var express = require('express');","var router = express.Router();","","var decorateBooks = require('../viewmodels/book');","","// Konyvlista oldal","router.get('/list', function(req, res) {","    res.render('books/list');","})","/*","router.get('/list', function (req, res) {","    req.app.models.book.find().then(function (books) {","        res.render('books/list', {","            books: decorateBooks(books),","            messages: req.flash('info')","        });","    });","});*/","","// Hiba felvitele","router.get('/new', function(req, res) {","    var validationErrors = (req.flash('validationErrors') || [{}]).pop();","    var data = (req.flash('data') || [{}]).pop();","    ","    res.render('books/new', {","        validationErrors: validationErrors,","        data: data,","    });","})","","// Hiba felvitele POST","router.post('/new', function(req, res) {","   // adatok ellenőrzése","    req.checkBody('cim', 'Hibas konyv cim').notEmpty().withMessage('Kotelezo megadni!');","    req.checkBody('iro', 'Hibas iro').notEmpty().withMessage('Kotelezo megadni!');","    req.sanitizeBody('megjegyzes').escape();","    req.checkBody('megjegyzes');","    ","    var validationErrors = req.validationErrors(true);","    console.log(validationErrors);","    ","    if (validationErrors) {","        // űrlap megjelenítése a hibákkal és a felküldött adatokkal","        req.flash('validationErrors', validationErrors);","        req.flash('data', req.body);","        res.redirect('/books/new');","    }","    else {","        req.app.models.book.create({","            status: 'new',","            cim: req.body.cim,","            iro: req.body.iro,","            description: req.body.leiras","        })","        .then(function (book) {","            //siker","            req.flash('info', 'Könyv sikeresen felvéve!');","            res.redirect('/books/list');","        })","        .catch(function (err) {","            //hiba","            console.log(err)","        });","    }","})","","module.exports = router;","",""],"id":1}]]},"ace":{"folds":[],"scrolltop":258.5,"scrollleft":0,"selection":{"start":{"row":51,"column":30},"end":{"row":51,"column":30},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1446235400000,"hash":"09771f4fa7fa281170aa70999099abc894154594"}