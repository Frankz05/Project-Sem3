//Depemndencies
const express = require('express')
const postRouter = require('./posts/posts.router')
const db = require('./utils/database')


//*Initial config
const app = express()

app.use(express.json())


db.authenticate()
    .then(() => {
        console.log('Database authenticate');
    })
    .catch((err) => {
        console.log(err);
    })
db.sync()
    .then(() => {
        console.log('Database synced successfully');
    })
    .catch((err) => {
        console.log(err);
    })



app.get('/', (req, res) => {
    res.json({
        message: 'My server is Ok'
    })
})



//Router blogs
app.use('/api/v1', postRouter)

app.listen(9000, () => {
    console.log('Server started at port 9000');
})


module.exports = app
