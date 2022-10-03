import prisma from "../../../../../lib/prisma";

export default async function handler(req, res) {
    const userId = parseInt(req.query.userId);

    if (req.method === "GET") {
        // Get the user's shelves
        const userShelves = await prisma.BookList.findMany({
            where: {
                User: {
                    id: userId,
                },
            },
            include: { User: true },
        });

        res.status(200).json(userShelves);
    }
}
