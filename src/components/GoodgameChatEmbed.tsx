"use client";

import React, { useState } from 'react';

interface GoodgameChatEmbedProps {
  channel: string; // Goodgame channel name, e.g., 'HeLLisiuM'
}

const GoodgameChatEmbed: React.FC<GoodgameChatEmbedProps> = ({ channel }) => {
  const [error, setError] = useState(false);

  const chatSrc = `https://goodgame.ru/${channel}/chat`;

  return (
    <div className="relative w-full h-full bg-muted rounded-lg overflow-hidden">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-900 bg-opacity-75 text-white text-center p-4">
          <p>Не удалось загрузить чат Goodgame.ru. Попробуйте позже.</p>
        </div>
      )}
      <iframe
        src={chatSrc}
        width="100%"
        height="100%"
        frameBorder="0"
        title={`Goodgame Chat - ${channel}`}
        onError={() => setError(true)}
        className={error ? "hidden" : ""} // Hide iframe if error
      ></iframe>
    </div>
  );
};

export default GoodgameChatEmbed;