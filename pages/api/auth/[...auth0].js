import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";
import prisma from "../../../lib/prisma";

// The below runs after the auth callback
const afterCallback = async (req, res, session) => {
  const user = session.user;

  // Create the user if not exist
  const prismaUser = await prisma.User.upsert({
    where: {
      auth0Id: user.sub,
    },
    update: {},
    create: {
      auth0Id: user.sub,
      email: user.email,
      bookList: {
        create: [
          { title: "Reading", description: "Books you are reading" },
          { title: "Past Reads", description: "Books you've read" },
          { title: "To-Read", description: "Books you plan to read" },
          { title: "Recommended", description: "Recommended books" },
        ],
      },
    },
  });

  user.internalId = prismaUser.id;
  return session;
};

// Handle authentication
export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (err) {
      res.status(err.status || 500).end(err.message);
    }
  },
});
