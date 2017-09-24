const express = require('express');
const router = express.Router();
const authHelpers = require('../dao/auth');
const dao = require('../dao/scores');

module.exports = (table, authRequired) => {

  if (authRequired) router.all('*', authHelpers.checkAuthentication);

  router.get(`/scores/bathroom/:id`, (req, res, next) => {
    const bathroomId = req.params.id;
    dao.getAllScoresForBathroom(bathroomId)
    .then((data) => {
      res.status(200).json({data});
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: `There was an error retrieving the Scores for bathroom ${bathroomId}`
      });
    });
  });

  router.get(`/scores/user/:id`, (req, res, next) => {
    const userId = req.params.id;
    dao.getAllScoresForUser(userId)
    .then((data) => {
      res.status(200).json({data});
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: `There was an error retrieving the Scores for user ${userId}`
      });
    });
  });

  router.post(`/scores`, (req, res, next) => {
    const newScore = req.body;
    dao.addOneScore(newScore)
    .then((result) => {
      res.status(200).json({data: `Created new Score`});
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: `There was an error creating a row in Scores`
      });
    });
  });

  router.put(`/scores/:id`, (req, res, next) => {
    const id = req.params.id;
    const editedFields = req.body;
    dao.editOneScore(id, editedFields)
    .then(() => res.status(200).json({data: `Edited ${id} in Scores`}))
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: `There was an error editing the row in Scores`
      });
    });
  });

  router.delete(`/scores/:id`, (req, res, next) => {
    const id = req.params.id;
    dao.deleteOneScore(id)
    .then(() => res.status(200).json({data: `Deleted ${id} in Scores`}))
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: `There was an error deleting the row in Scores`
      });
    });
  });

  return router;
};
