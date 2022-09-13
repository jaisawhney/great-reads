import prisma from '../../../lib/prisma';

const user1 = {username: 'john doe', email: 'a@a.a', password: 'lmfsdf'}

export default async function handler(req, res) {
  if (req.method=='GET'){
    const users = await prisma.user.findMany(); // TODO: Add pagination

    res.status(200).json(users)
  } else {
    const newUser = await prisma.user.create({
      data: user1,
    });

    res.status(200).json(newUser)
  }
}
