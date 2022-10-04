import prisma from '../../../lib/prisma';


const user1 = {email: 'john@doe.com'}

export const ServerSideProps = async () => {

}



// export default async function handler(req, res) {
//   if(auth0User){
//       const getUser = await prisma.User.findUnique({
//         where: {
//           email: auth0User.email,
//         }
//       })
//       //check if user is in db, if not add it
//       if(getUser != null){
//         let currentUser = getUser
//         console.log(currentUser)
//         res.status(200).json(currentUser);
//       }
//       else{
//         const newUser = await prisma.User.create({
//           data: {
//             email: auth0User.email
//           }
//         })
//         //save user to session when working
//         let currentUser = newUser
//         console.log(currentUser)
//         res.status(200).json(currentUser);
//       }
//     }
//   } catch (error) {
//     console.log(error)
//     res.status(400)
//   }}
  
// } 

