const {Schema, model} = require('mongoose')

const UserSchema = Schema({

    name: {
        type: String,
        require: [true, 'name is required'],
    },
    email: {
        type: String,
        require: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'password is required'],
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        require: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    status: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    }

})

module.exports = model('Usuario', UserSchema)