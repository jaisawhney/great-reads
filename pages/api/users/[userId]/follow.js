import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    if (req.method === "GET") {
        //If get then just return ok
        res.status(200)
    } else {
       
        const userToFollow = req.query.userId


      

        // Check if this user is already following
        const existingFolow = await prisma.follows.findFirst({
          
        });

        // User exists (200)
        if (existingFolow) return res.status(200).end();

        //Add to the follows table
    
        const newFollow = await prisma.follows.create({
            data: {
             
              follower: {
                connect: {
                  id: sampleUserId
                }
              },
              following: {
                connect: {
                  id: sampleBookId
                }
              }
            },
          });
      

        // Follow added added (201)
        return res.status(201).end();
    }
}
