
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments();

        users
            .string('first_name', 128)
            .notNullable();

        users
            .string('last_name', 128)
            .notNullable();

        users
            .string('email', 128)
            .notNullable()

        users
            .string('password', 128)
            .notNullable()

        users
            .string('city', 128)
            .notNullable()

        users
            .string('state', 128)
            .notNullable()

        users
            .string('github_url', 128)
            .notNullable()

    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
