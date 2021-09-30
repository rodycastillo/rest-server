const { response } = require('express')
const User = require('../models/user')

const userGet = (req, res=response) => {
    const {q, name = 'not name', apikey, page, limit } = req.query
    res.json({
        msg: 'Get API - controller',
        q, name, apikey, page, limit
    })
}
const userPost = async (req, res=response) => {
    const body = req.body
    const user = new User(body)
    await user.save()

    res.json({
        msg: 'Post API - controller',
        user
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