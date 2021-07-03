const db = require('./projectsDB');

const express = require('express');
const router = express.Router();



router.post('/resources', (req, res) => {
    const resource = req.body;
    db.addResource(resource)
        .then(([resource]) => res.status(201).json(resource))
        .catch(error => res.status(500)
            .json({error: 'Server error, can not insert resource'}))
});

router.get('/resources', (req, res) => {
    db.getResources()
        .then(resource => res.status(200).json(resource))
        .catch(error => res.status(500)
            .json({error: 'Server error, can not retrieve resources'}))
});

router.post('/', (req, res) => {
    const project = req.body;
    db.addProject(project)
        .then(([project]) => res.status(201).json(project))
        .catch(error => res.status(500)
            .json({error: 'Server error, can not insert project'}))
});

router.get('/', (req, res) => {
    db.getProjects()
        .then(projects => res.status(200).json(projects))
        .catch(error => res.status(500).json({error: 'Server error, can not retrieve projects'}))
});

router.post('/tasks', (req, res) => {
    const task = req.body;
    db.addTask(task)
        .then(([task]) => res.status(201).json(task))
        .catch(error => res.status(500)
            .json({error: 'Server error, can not insert task'}))
});

router.get('/tasks', (req, res) => {
    db.getTasks()
        .then(tasks => res.status(200).json(tasks))
        .catch(error => res.status(500)
            .json({error: 'Server error, can not retrieve tasks'}))
});

module.exports = router;