// ... (предыдущие импорты остаются без изменений)

const Index: React.FC<IndexProps> = ({ isTheaterMode, setIsTheaterMode }) => {
  // ... (предыдущий код состояния остается без изменений)

  return (
    <div className={rootDivClasses}>
      {/* ... (остальной код до ResizablePanelGroup остается без изменений) */}

      {isTheaterMode ? (
        <ResizablePanelGroup 
          direction="horizontal" 
          className="w-full h-screen fixed top-0 left-0 bg-background"
        >
          <ResizablePanel 
            defaultSize={70} 
            minSize={50}
            className="!overflow-hidden"
          >
            <div className={playerChatContainerClasses}>
              {selectedPlayer === "twitch" && (
                <TwitchPlayerEmbed channel="hellisium" parent={['localhost']} autoplay={true} />
              )}
              {/* ... (остальные варианты плеера) */}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-border h-screen" />
          <ResizablePanel 
            defaultSize={30} 
            minSize={20}
            className="!overflow-hidden"
          >
            <div className={playerChatContainerClasses}>
              {selectedPlayer === "twitch" && (
                <TwitchChatEmbed channel="hellisium" parent={['localhost']} />
              )}
              {/* ... (остальные варианты чата) */}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      ) : (
        // ... (обычный режим остается без изменений)
      )}

      {/* ... (остальной код компонента) */}
    </div>
  );
};