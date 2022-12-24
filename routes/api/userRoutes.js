const router = require('express').Router();
const { createUser } = require('../../controllers/userController');


router.route('/').post(createUser);


// /api/users/:userId
//router.route('/:userId').get(getSingleUser);

module.exports = router;
