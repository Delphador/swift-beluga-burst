// ... (предыдущие импорты остаются без изменений)

const Index: React.FC<IndexProps> = ({ isTheaterMode, setIsTheaterMode }) => {
  // ... (предыдущий код состояния остается без изменений)

  return (
    <div className={rootDivClasses}>
      {/* ... (предыдущий код кнопки и заголовка остается без изменений) */}

      {isTheaterMode ? (
        <ResizablePanelGroup 
          direction="horizontal" 
          className="w-full h-[calc(100vh-4rem)]" // Учитываем высоту кнопки
        >
          <ResizablePanel 
            defaultSize={70} 
            minSize={50}
            className="flex" // Добавляем flex для правильного растягивания
          >
            <div className={playerChatContainerClasses + " flex-1"}> {/* Добавляем flex-1 */}
              {/* ... (код плеера остается без изменений) */}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel 
            defaultSize={30} 
            minSize={20}
            className="flex" // Добавляем flex для правильного растягивания
          >
            <div className={playerChatContainerClasses + " flex-1"}> {/* Добавляем flex-1 */}
              {/* ... (код чата остается без изменений) */}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      ) : (
        // ... (обычный режим остается без изменений)
      )}

      {/* ... (остальной код компонента остается без изменений) */}
    </div>
  );
};

export default Index;