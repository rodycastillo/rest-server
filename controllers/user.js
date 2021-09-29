const { response } = require('express')

const userGet = (req, res=response) => {
    const {q, name = 'not name', apikey, page, limit } = req.query
    res.json({
        msg: 'Get API - controller',
        q, name, apikey, page, limit
    })
}
const userPost = (req, res=response) => {
    const { name, age, id} = req.body
    res.json({
        msg: 'Post API - controller',
        name,
        age,
        id
    })
}
const userPut = (req, res=response) => {
    const id = req.params.id
    res.json({
        msg: 'Put API - controller',
        id
    })
}
const userDelete = (req, res=response) => {
    res.json({
        msg: 'Delete API - controller'
    })
}



module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}