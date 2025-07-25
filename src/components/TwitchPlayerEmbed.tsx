"use client";

import React from 'react';
import { TwitchPlayer } from 'react-twitch-embed';

interface TwitchPlayerEmbedProps {
  channel: string;
  parent: string[];
  autoplay?: boolean;
  muted?: boolean;
}

const TwitchPlayerEmbed: React.FC<TwitchPlayerEmbedProps> = ({ channel, parent, autoplay = false, muted = false }) => {
  return (
    <div className="w-full h-full"> {/* Убраны relative, bg-muted, rounded-lg и overflow-hidden */}
      <TwitchPlayer
        channel={channel}
        parent={parent}
        width="100%"
        height="100%"
        autoplay={autoplay}
        muted={muted}
        id={`twitch-player-${channel}`}
      />
    </div>
  );
};

export default TwitchPlayerEmbed;