
exports.seed = function(knex) {
    return knex('resources').insert([
        {
            name: 'paper',
            description: 'Hard paper'
        },
        {
            name: 'felt pen',
        },
        {
            name: 'glue',
        },
        {
            name: 'IDEA',
        },
        {
            name: 'computer',
        },
        {
            name: 'internet',
        },
    ]);
};