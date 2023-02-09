const postServices = require('./posts.services')

const router = require('express').Router()


//*Routes
router.get('/posts', postServices.getAllPosts)

router.post('/posts', postServices.postNewPost)

router.get('/posts', postServices.getPostById)

router.patch('/posts', postServices.patchPost)

router.put('/posts', postServices.putPost)

router.delete('/posts', postServices.deletePost)



module.exports = router