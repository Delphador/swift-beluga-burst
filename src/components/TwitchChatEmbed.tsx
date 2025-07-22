"use client";

import React from 'react';
import { TwitchChat } from 'react-twitch-embed';

interface TwitchChatEmbedProps {
  channel: string;
  parent: string[];
}

const TwitchChatEmbed: React.FC<TwitchChatEmbedProps> = ({ channel, parent }) => {
  return (
    <div className="w-full h-full"> {/* Убраны relative, bg-muted, rounded-lg и overflow-hidden */}
      <TwitchChat
        channel={channel}
        parent={parent}
        width="100%"
        height="100%"
        id={`twitch-chat-${channel}`}
      />
    </div>
  );
};

export default TwitchChatEmbed;