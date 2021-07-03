exports.seed = function (knex) {
    return knex('projects').insert([
        {
            name: 'Create a book',
            description: 'Create a book from scratch and draw its cover',
            completed: true,
        },
        {
            name: 'Complete Sprint challenge',
            description: 'Complete all tasks included in MVP',
        },

    ]);
};
