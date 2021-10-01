const { response } = require('express')
const bcryptjs = require('bcryptjs')

const User = require('../models/user')

const userGet = (req, res=response) => {
    const {q, name = 'not name', apikey, page, limit } = req.query
    res.json({
        msg: 'Get API - controller',
        q, name, apikey, page, limit
    })
}
const userPost = async (req, res=response) => {
    const {name, email, password, role} = req.body
    const user = new User({name, email, password, role})

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt)


    await user.save()

    res.json({
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