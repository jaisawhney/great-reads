import prisma from '../../../lib/prisma';

const auth0User = {email: 'john@doe.com'}

export default async function handler(req, res) {
  if (req.method=='GET'){
    const getUser = prisma.User.findUnique({
      where: {
        email: JSON.parse(req.body).email,
      }})
    res.status(200).json(getUser)
  } else {
    const getUser = prisma.User.findUnique({
      where: {
        email: JSON.parse(req.body).email,
      }})
    if(!getUser){
      const newUser = await prisma.User.create({
        data: {
          email: JSON.parse(req.body).email
        }
      })}
      res.status(200).json(req.body)
  }
}
