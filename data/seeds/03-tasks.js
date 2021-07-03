exports.seed = function (knex) {
    return knex('tasks').insert([
        {
            task_number: 1,
            description: 'Take paper and glue',
            completed: true,
            project_id: 1
        },
        {
            task_number: 2,
            description: 'Glue all paper',
            notes: 'Draw a pick on first sheet',
            completed: true,
            project_id: 1
        },
        {
            task_number: 1,
            description: 'Clone repo from github',
            notes: 'add PM as a collaborator',
            completed: true,
            project_id: 2
        },
        {
            task_number: 2,
            description: 'Complete MVP',
            notes: 'push to github',
            completed: true,
            project_id: 2
        },
    ]);
};
