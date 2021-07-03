const db = require('../data/dbConfig');

module.exports = {
    getProjects,
    addProject,
    addTask,
    getTasks,
    addResource,
    getResources
};

//add tasks
function addTask(task) {
    return db('tasks')
        .insert(task)
}

// retrieve a list of tasks
function getTasks() {
    return db('tasks')
}

//add projects
function addProject(project) {
    return db('projects').insert(project)
}

// retrieve a list of projects
function getProjects() {
    return db('projects')
}
//add resources
function addResource(resource) {
    return db('resources').insert(resource)
}

//retrieve a list of resources
function getResources(resource) {
    return db('resources')
}
