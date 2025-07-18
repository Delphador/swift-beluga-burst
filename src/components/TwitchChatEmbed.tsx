"use client";

import React from 'react';
import { TwitchChat } from 'react-twitch-embed';

interface TwitchChatEmbedProps {
  channel: string;
  parent: string[];
}

const TwitchChatEmbed: React.FC<TwitchChatEmbedProps> = ({ channel, parent }) => {
  return (
    <div className="relative w-full h-full bg-muted rounded-lg overflow-hidden">
      <TwitchChat
        channel={channel}
        parent={parent}
        width="100%"
        height="100%"
        theme="dark" // Можно настроить тему, если нужно
        id={`twitch-chat-${channel}`}
      />
    </div>
  );
};

export default TwitchChatEmbed;