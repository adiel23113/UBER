const express= requird ('express');

const router = express.router();

const {body} = requird("express-validator")


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.fastname').islength({min:3}).withMessage('fast name must be at least 3 characters'),
    body('password').islength({min:6}).withMessage('password must be at least 6 characters')

],
userController.registerUser
)
module.export = router;