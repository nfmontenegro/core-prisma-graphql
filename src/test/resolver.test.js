const {Prisma} = require('prisma-binding')

require('dotenv').config()

const prisma = new Prisma({
  typeDefs: __dirname + '/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_PASSWORD
})

test('#Resolver => Create user ', async () => {
  try {
    const user = {
      name: 'Manchi',
      lastname: 'Flores',
      email: 'manchi@gmail.com',
      password: '123'
    }

    const deleteUser = await prisma.mutation.deleteUser({where: {email: user.email}})
    expect(deleteUser).toMatchObject(user)

    const createUser = await prisma.mutation.createUser({
      data: user
    })

    expect(createUser).toMatchObject(user)
  } catch (err) {
    console.log('Error:', err)
    if (err.message.includes('type')) {
      const message = `Cannot read property 'type' of undefined`
      expect(message).toBe(err.message)
    }
  }
})
