exports.up = function (knex) {
    return knex.schema
        .createTable('resources', tbl => {
            //id
            tbl.increments();
            //a name. This column is required
            tbl.string('name', 128)
                .notNullable()
                .unique();
            //a description. Optional
            tbl.text('description');
        })

        .createTable('projects', tbl => {
            //id
            tbl.increments();
            //a name. This column is required
            tbl.string('name', 128)
                .notNullable()
                .unique();
            // a description, Optional
            tbl.text('description');
            //a boolean that indicates if the task has been completed
            tbl.boolean('completed')
                .defaultTo(false)
        })

        .createTable('tasks', tbl => {
            //id
            tbl.increments();
            //
            tbl.integer('task_number')
                .unsigned()
                .notNullable();
            //description of what needs to be done. This column is required
            tbl.text('description')
                .notNullable();
            // notes column to add additional information. Optional
            tbl.text('notes');
            //a boolean that indicates if the task has been completed
            tbl.boolean('completed')
                .defaultTo('false');
            //the id of an existing project
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })

        .createTable('resources_projects', tbl => {
            tbl
                .integer('resource_id')
                .unsigned()
                .references('id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            tbl
                .integer('project_id')
                .unsigned()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            tbl.primary([' resource_id', ' project_id']);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources_projects');
};
