import { StreamChat } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'
const api_key = "aubh9kt3dvbc";
const api_secret = "ep5smgj88bt8jn22fsxvc94r5jd2szzmq4en5t9mukxpfq45yauh4vqkyzd3nbte";
//static without ngrok for only one user by giving userid before only
// const user_id = "user_2rTqxp7yR2aawcRCZ8LJUTIx2qT";
// export async function GET() {
//     const serverClient = StreamChat.getInstance(api_key, api_secret);
// //Create User Token
//     const token = serverClient.createToken(user_id);
//     console.log(token);
//     return Response.json({ message: 'Hello World' })
//   }
//Dynamic with ngrok for any number of users by giving userid when user registers

export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json()
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    //Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A New User HAS BEEN CREATED.", token);
    console.log("A New User is Registered with ID: " + user.data.id);
    const client = await clerkClient()
    await serverClient.upsertUser({id:user.data.id})
    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token
        },
    })
    //Give access to this user
    const slugs=["python-new2", "javascript-new2", "react-new2", "nodejs-new2", "datascience-new2", "machinelearning-new2"]
    slugs.forEach(async (item)=>{
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: capitalize(item)+' Discussion',
            created_by_id:user.data.id
        }); 
        await channel.create()
        await channel.addMembers([user.data.id])
    })
    return Response.json({ message: 'Hello World' })
}