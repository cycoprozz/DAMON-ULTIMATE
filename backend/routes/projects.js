const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth');

const prisma = new PrismaClient();

// @route   GET api/projects
// @desc    Get all projects for authenticated user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        user_id: req.user.id
      },
      include: {
        files: true,
        payments: true
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/projects
// @desc    Create a new project
// @access  Private
router.post('/', auth, async (req, res) => {
  const { title, type, description, budget, delivery_date, requirements } = req.body;

  try {
    const project = await prisma.project.create({
      data: {
        title,
        type,
        description,
        budget: budget ? parseFloat(budget) : null,
        delivery_date: delivery_date ? new Date(delivery_date) : null,
        requirements: requirements ? JSON.parse(requirements) : {},
        user_id: req.user.id
      }
    });

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/projects/:id
// @desc    Get project by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const project = await prisma.project.findFirst({
      where: {
        id: parseInt(req.params.id),
        user_id: req.user.id
      },
      include: {
        files: true,
        payments: true
      }
    });

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/projects/:id
// @desc    Update project
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { title, type, description, budget, delivery_date, requirements, status, progress_percentage } = req.body;

  try {
    const project = await prisma.project.findFirst({
      where: {
        id: parseInt(req.params.id),
        user_id: req.user.id
      }
    });

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    const updatedProject = await prisma.project.update({
      where: { id: parseInt(req.params.id) },
      data: {
        title: title || project.title,
        type: type || project.type,
        description: description || project.description,
        budget: budget ? parseFloat(budget) : project.budget,
        delivery_date: delivery_date ? new Date(delivery_date) : project.delivery_date,
        requirements: requirements ? JSON.parse(requirements) : project.requirements,
        status: status || project.status,
        progress_percentage: progress_percentage ? parseInt(progress_percentage) : project.progress_percentage
      }
    });

    res.json(updatedProject);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/projects/:id
// @desc    Delete project
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await prisma.project.findFirst({
      where: {
        id: parseInt(req.params.id),
        user_id: req.user.id
      }
    });

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    await prisma.project.delete({
      where: { id: parseInt(req.params.id) }
    });

    res.json({ msg: 'Project removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router; 