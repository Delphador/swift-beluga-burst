"use client";

// ... предыдущие импорты остаются без изменений ...

const Index = () => {
  // ... предыдущий код состояния ...

  // Стили для полноэкранного режима
  const theaterModeStyles = `
    .theater-mode {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: hsl(var(--background));
      z-index: 1000;
      display: grid;
      grid-template-columns: 70% 30%;
      grid-template-rows: 1fr;
      gap: 0;
      padding: 0;
      margin: 0;
      overflow: hidden;
      animation: fadeIn 0.3s ease-out;
    }

    .theater-mode .player-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: hsl(var(--muted));
    }

    .theater-mode .chat-container {
      width: 100%;
      height: 100%;
      background: hsl(var(--muted));
      border-left: 1px solid hsl(var(--border));
      overflow: hidden;
    }

    .theater-mode .toggle-theater {
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 1001;
      backdrop-filter: blur(10px);
      background: hsla(var(--background)/0.8);
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @media (max-width: 768px) {
      .theater-mode {
        grid-template-columns: 1fr;
        grid-template-rows: 60% 40%;
      }
      .theater-mode .chat-container {
        border-left: none;
        border-top: 1px solid hsl(var(--border));
      }
    }
  `;

  const toggleTheaterMode = () => {
    setIsTheaterMode(!isTheaterMode);
  };

  return (
    <div className={rootDivClasses}>
      {/* Добавляем стили для театрального режима */}
      <style dangerouslySetInnerHTML={{ __html: theaterModeStyles }} />

      {/* ... предыдущий код до кнопки переключения режима ... */}

      <Button
        size="lg"
        variant="outline"
        onClick={toggleTheaterMode}
        className={theaterModeButtonClasses}
      >
        {isTheaterMode ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
        {isTheaterMode ? "Выйти из режима кинотеатра" : "Режим кинотеатра"}
      </Button>

      {/* Театральный режим */}
      {isTheaterMode && (
        <div className="theater-mode">
          <div className="player-container">
            {selectedPlayer === "twitch" && (
              <TwitchPlayerEmbed channel="hellisium" parent={['localhost']} autoplay={true} />
            )}
            {selectedPlayer === "goodgame" && (
              <GoodgamePlayerEmbed channel="HeLLisiuM" autoplay={true} />
            )}
            {selectedPlayer === "youtube" && (
              <iframe
                src={playerUrls.youtube}
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Featured Stream"
              ></iframe>
            )}
          </div>

          <div className="chat-container">
            {selectedPlayer === "twitch" && (
              <TwitchChatEmbed channel="hellisium" parent={['localhost']} />
            )}
            {selectedPlayer === "goodgame" && (
              <GoodgameChatEmbed channel="HeLLisiuM" />
            )}
            {selectedPlayer === "youtube" && (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xl">
                Чат YouTube недоступен для встраивания напрямую.
              </div>
            )}
          </div>

          <Button
            size="lg"
            variant="outline"
            onClick={toggleTheaterMode}
            className="toggle-theater"
          >
            <Minimize2 className="h-5 w-5" /> Выйти из режима кинотеатра
          </Button>
        </div>
      )}

      {/* Остальной контент страницы */}
      {!isTheaterMode && (
        <>
          {/* ... существующий код для обычного режима ... */}
        </>
      )}
    </div>
  );
};

export default Index;