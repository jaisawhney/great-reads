// Nextjs.org/docs/api-routes/response-helpers
import prisma from '../../../lib/prisma';

const user1 = {username: 'john doe', email: 'a@a.a', password: 'lmfsdf'}

export default async function handler(req, res) {
  if (req.method=='GET'){

    // TODO: Add pagination
    const users = await prisma.user.findMany();

    res.status(200).json(users)
  } else {
    console.log('post')
    const r = req.body;

    const user = await prisma.user.create({
      data: user1,
    });

    res.status(200).json(user)
  }
}
