
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: "Ryan",
          last_name: "Ziegenfus",
          email: "ryan@gmail.com",
          password: "qwerty",
          city:"Fort Myers",
          state:"Florida",
          github_url:"github.com/ryan",
        },
        {
          first_name: "Jared",
          last_name: "Rivera",
          email: "jared@gmail.com",
          password: "qwerty",
          city:"Austin",
          state:"Texas",
          github_url:"github.com/jared",
        },
        {
          first_name: "Austin",
          last_name: "Peterson",
          email: "austin@gmail.com",
          password: "qwerty",
          city:"Phoenix",
          state:"Arizona",
          github_url:"github.com/austin",
        },
      ]);
    });
};
