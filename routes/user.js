const router = require('express').Router()
const UserController = require('../controllers/UserController')
const FeedController = require('../controllers/FeedController')
const multer  = require('multer')
const upload = multer({ dest: 'public/images' })
const checkLogin = require('../middlewares/checkLogin')
const redirectIfLogin = require('../middlewares/redirectIfLogin')



router.get('/', redirectIfLogin, UserController.loginPage)
router.post('/', UserController.login)
router.get('/register', UserController.registerPage)
router.post('/register', UserController.register)
router.get('/page', checkLogin, UserController.userPage)
router.post('/page', FeedController.addFeed)
router.get('/edit', UserController.editPage)
router.post('/edit', UserController.edit)
router.post('/profile', upload.single('avatar'), UserController.uploadImage)

module.exports = router