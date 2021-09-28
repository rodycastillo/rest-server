const { response } = require('express')

const userGet = (req, res=response) => {
    res.json({
        msg: 'Get API - controller'
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
    res.json({
        msg: 'Put API - controller'
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