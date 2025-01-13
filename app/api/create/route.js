import { StreamChat } from "stream-chat";
const api_key = "aubh9kt3dvbc";
const api_secret = "ep5smgj88bt8jn22fsxvc94r5jd2szzmq4en5t9mukxpfq45yauh4vqkyzd3nbte";
const user_id = "john";
export async function GET() {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const token = serverClient.createToken(user_id);
    return Response.json({ message: 'Hello World' })
  }