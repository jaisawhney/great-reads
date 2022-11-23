import { generateUsername } from "unique-username-generator";
import prisma from "./prisma";

export async function uniqueUsername() {
  let username = generateUsername("-", 0, 20);
  const userFound = await prisma.User.findFirst({ where: { username: username } });

  // If collision dandle generating usernames recursively.
  if (userFound) {
    username = uniqueUsername();
  } else {
    return username;
  }
}
