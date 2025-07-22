"use client";

import React, { useState } from 'react';

interface GoodgamePlayerEmbedProps {
  channel: string; // Goodgame channel name, e.g., 'HeLLisiuM'
  autoplay?: boolean;
  muted?: boolean;
}

const GoodgamePlayerEmbed: React.FC<GoodgamePlayerEmbedProps> = ({ channel, autoplay = false, muted = false }) => {
  const [error, setError] = useState(false);

  const playerSrc = `https://goodgame.ru/player?id=${channel}&autoplay=${autoplay ? 1 : 0}&muted=${muted ? 1 : 0}`;

  return (
    <div className="relative w-full h-full bg-muted rounded-lg overflow-hidden">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-900 bg-opacity-75 text-white text-center p-4">
          <p>Не удалось загрузить плеер Goodgame.ru. Попробуйте позже.</p>
        </div>
      )}
      <iframe
        src={playerSrc}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        title={`Goodgame Player - ${channel}`}
        onError={() => setError(true)}
        className={error ? "hidden" : ""} // Hide iframe if error
      ></iframe>
    </div>
  );
};

export default GoodgamePlayerEmbed;