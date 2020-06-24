const express = require('express');
const ideasRouter = express.Router();
module.exports = ideasRouter;

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db');


ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

ideasRouter.post('/', (req, res, next) => {
    const toR = addToDatabase('ideas', req.body);
    res.status(201).send(toR);
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    const toR = getFromDatabaseById('ideas', req.ideaId);
    if (toR) {
        res.send(toR);
    } else {
        res.status(404).send();
    }
});

ideasRouter.put('/:ideaId', (req, res, next) => {
    const toC = updateInstanceInDatabase('idea', req.body);
    if (toC) {
        res.send(toC);
    } else  {
        res.status(404).send();
    }
});


minionRouter.delete('/:idName', (req,res,next) => {
    if (deleteFromDatabasebyId('ideas', req.params.idName)) {
        res.status(204);
    } else {
        res.status(500);
    } 
    res.send();
});