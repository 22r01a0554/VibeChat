import { Chat, useCreateChatClient } from 'stream-chat-react';
// your Stream app information
const apiKey = 'dz5f4d5kzrue';
const userId = 'shiny-wildflower-8';
const userName = 'shiny';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic2hpbnktd2lsZGZsb3dlci04IiwiZXhwIjoxNzM2NzcyNTU4fQ.ZZ12lKScGBmM-p3ZJtdmMrIvmINmARivmCj7nrpnZq0';
export default async function Page({ params }) {
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: { id: userId },
      });
      const slug = (await params).slug;
      if (!client) return <div>Setting up client & connection...</div>;
      return <Chat client={client}>Chat with client is ready!</Chat>;
}