import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'aliahmad@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ali Ahmad',
    email: 'ali@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
