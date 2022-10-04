import prisma from '../../../lib/prisma';

const auth0User = {email: 'john@doe.com'}

export default async function handler(req, res) {
  if (req.method=='GET'){
    const getUser = prisma.User.findUnique({
      where: {
        email: req.body.email,
      }})
      console.log(newUser)
    res.status(200).json(users)
  } else {
    const newUser = prisma.User.create({
      data: {
        email: req.body.email
      }})
      console.log(newUser)
    res.status(200).json(newUser)
  }
}
