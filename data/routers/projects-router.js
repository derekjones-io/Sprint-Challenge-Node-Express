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

router.post('/', async (req, res) => {
  const { name, description, completed } = req.body;

  if ((name, description, completed)) {
    try {
      const projects = await projectsDb.insert(name, description, completed);
      res.status(201).json(projects);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(500).json({ error: 'error adding project' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, completed } = req.body;

  if ((name, description, completed)) {
    try {
      const projects = await projectsDb.update(id);
      res.status(201).json(projects);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(500).json({ error: 'error updating project' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const projects = await projectsDb.remove(id);
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'error deleting project' });
  }
});

module.exports = router;
