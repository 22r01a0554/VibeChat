"use client"
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';    
const apiKey = 'aubh9kt3dvbc';
//const userId = 'user_2rTqxp7yR2aawcRCZ8LJUTIx2qT';
//const userName = 'SLavanya';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yclRxeHA3eVIyYWF3Y1JDWjhMSlVUSXgycVQifQ._YwEJ0FstJb0Nfpu88zim4SUYApsB0miHLu809EihYU';
export default function ChatForum({slug}) {
    const {isLoaded,clerkUser}=useUser();
    const [user, setuser] = useState();
    useEffect(() => {
        const userId = clerkUser?.id
        const userName = clerkUser?.firstName;
        if (isLoaded){
            const user= {
                id: userId,
                name: userName,
                image: `https://getstream.io/random_png/?name=${userName}`,
            };
            setuser(user);
        }
    },[isLoaded])
    function toTitleCase(str) {
        return str.replace(
            /\b[a-z]/g,
            (char)=>char.toUpperCase()
        );
    }
    const [channel, setChannel] = useState();
    const client = useCreateChatClient({
    apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });
    useEffect(() => {
        if (!client) return;
        const channel = client.channel('messaging',slug, {
          image: 'https://getstream.io/random_png/?name=react',
          name: toTitleCase(slug.replace(/-/g, " "))+' Discussion',
          members: [userId],
        });
        setChannel(channel);
    }, [client]);
    if (!client) return <div>Setting up client & connection...</div>;
    return (
        <Chat client={client}>
          <Channel channel={channel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
    );
};
    