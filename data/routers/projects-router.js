const express = require('express');
const router = express.Router();

const projectDb = require('../helpers/projectModel');

router.get('/', async (req, res) => {
  try {
    const projects = await projectDb.get();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'error getting projects' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const projects = await projectDb.get(id);
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'error getting project by id' });
  }
});

module.exports = router;
