import { StreamChat } from "stream-chat";
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
    //Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A New User HAS BEEN CREATED.");
    console.log("A New User is Registered with ID: "+user.id);
    return Response.json({ message: 'Hello World' })
  }