import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method=='GET'){
    console.log(req.query);
    const { userId } = req.query

    const user = await prisma.user.findUnique({
      'where': {
        id: parseInt(userId)
      }
    });

    res.status(200).json(user)
  } else {
    // Update or Delete
  }
}
