import bcrypt from 'bcryptjs'
const users = [
    { 
        name: 'Admin User',
        email: 'admin@qq.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    { 
        name: 'Summer',
        email: 'summer@qq.com',
        password:bcrypt.hashSync('123456',10),
    },
    { 
        name: 'Wang',
        email: 'wang@qq.com',
        password:bcrypt.hashSync('123456',10),
    }
]

export default users