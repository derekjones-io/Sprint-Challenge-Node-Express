const express = require('express');
const router = express.Router();

const actionDb = require('../helpers/actionModel');

router.get('/', async (req, res) => {
  try {
    const actions = await actionDb.get();
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ error: 'error getting actions' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const actions = await actionDb.get(id);
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ error: 'error getting action by id' });
  }
});

module.exports = router;
