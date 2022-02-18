import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password:bcrypt.hashSync('123456', 10),
        isAdmin:true
    },
    {
        name: 'Jone Doe',
        email: 'Jone@example.com',
        password:bcrypt.hashSync('123456', 10)
        
    },
    {
        name: 'motiour',
        email: 'motiour@example.com',
        password:bcrypt.hashSync('123456', 10)
        
    }
]

export default users