const db = require('../models')
const User = db.User

const getUsers = async () => {
    try {
        const users = await User.findAll()
        if (!users) {
            throw new Error('No users found in controller')
        }
        return users
    }   catch (error) {
        console.log('Error at `getUsers controller` ' + error.message)
    }
}

const getUserById = async (id) => {
    try {
        if (!id) {
            return 'id not specified at getUserById controller'
        }
        const user = await User.findOne({ where: { id } })
        if (!user) {
            return 'User not found in controller `getUserById`'
        }
        return user
    }   catch (error) {
        console.log('Error at `getUserById controller` ' + error.message)
    }
}

const updateUser = async (id, newData) => {
    try {
        if (!id || newData) {
            return 'id or newData not specified at updateUser controller'
        }
        const user = await User.findOne({ where: {id} })
        if (!user) {
            return 'User not found'
        }
        const updatedUser = await User.update(newData, { where: { id } })
        if (!updatedUser) {
            return 'User could not be updated at updateUser controller'
        }
        return updatedUser
    }   catch (error) {
        console.log('Error at `updateUser` controller ' + error.message)
    }
}

const getUserByEmail = async (email) => {
    try {
        if (!email) {
            return 'Email not specified at getUserByEmail controller'
        }
        const user = await User.findOne({ where: { email: email } })
        return user
    }   catch (error) {
        console.log('Error at `getUserByEmail` controller ' + error.message)
    }
}

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    getUserByEmail,
}