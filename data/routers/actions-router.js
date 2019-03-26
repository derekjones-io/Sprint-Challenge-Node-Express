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

router.post('/', async (req, res) => {
  const action = req.body;

  if (action.project_id && action.description && action.notes) {
    try {
      const actions = await actionDb.insert(action);
      res.status(201).json(actions);
    } catch (error) {
      res.status(500).json({ error: 'error adding action' });
    }
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const action = req.body;

  if (action.project_id && action.description && action.notes) {
    try {
      const actions = await actionDb.update(id, action);
      res.status(200).json(actions);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(500).json({ error: 'error updating action' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const actions = actionDb.remove(id);
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json({ error: 'error deleting action' });
  }
});

module.exports = router;
