import prisma from "../../../lib/prisma";

import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async (req, res) => {
  const { user } = getSession(req, res);

  if (req.method === "GET") {
    const allLists = await prisma.Comment.findMany();

    res.status(200).json(allLists);
  } else {
    const body = JSON.parse(req.body);

    const newComment = await prisma.Comment.create({
      data: {
        message: body.comment,
        book: {
          connect: {
            id: body.bookId,
          },
        },
        user: {
          connect: {
            auth0Id: user.sub,
          },
        },
      },
    });

    // Connect the parent if exists - I could not find a way to do this with .create
    if (body.parentId) {
      await prisma.Comment.update({
        where: {
          id: newComment.id,
        },
        data: {
          parent: {
            connect: {
              id: body.parentId,
            },
          },
        },
      });
    }

    res.status(201).json(newComment);
  }
});
