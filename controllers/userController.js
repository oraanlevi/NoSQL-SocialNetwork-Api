const {User, Thought} = require('../models');

module.exports = {
  //  createUser
  createUser(req, res) {
    User.create(req.body)
    .then(newUser => res.json(newUser))
    .catch(err => {
        console.log(err);
        return res.status(500).json(err);
        });
  },
};