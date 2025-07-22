"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import ThanksForGifts from "@/components/ThanksForGifts"; // Обновленный импорт
import TwitchChatEmbed from "@/components/TwitchChatEmbed";
import TwitchPlayerEmbed from "@/components/TwitchPlayerEmbed";
import GoodgamePlayerEmbed from "@/components/GoodgamePlayerEmbed";
import GoodgameChatEmbed from "@/components/GoodgameChatEmbed";
import { cn } from "@/lib/utils";

const Index = () => {
  const [selectedPlayer, setSelectedPlayer] = useState("twitch");
  const [isTheaterMode, setIsTheaterMode] = useState(false);

  const playerUrls = {
    youtube: "https://www.youtube.com/embed/your_youtube_stream_id?autoplay=0",
  };

  const channelUrls = {
    twitch: "https://www.twitch.tv/hellisium",
    youtube: "https://www.youtube.com/your_youtube_stream_id",
    goodgame: "https://goodgame.ru/channel/HeLLisiuM",
  };

  const twitchPopoutChatUrl = "https://www.twitch.tv/popout/hellisium/chat";
  const goodgamePopoutChatUrl = "https://goodgame.ru/chat/HeLLisiuM";

  const rootDivBaseClasses = "flex flex-col items-center justify-center";
  const rootDivDynamicClasses = isTheaterMode ? 'min-h-screen p-0' : 'min-h-[calc(100vh-160px)] bg-background text-foreground p-8';
  const rootDivClasses = cn(rootDivBaseClasses, rootDivDynamicClasses);

  const theaterModeButtonBaseClasses = "text-lg px-8 py-4 border-primary text-primary hover:bg-primary/10 flex items-center gap-2";
  const theaterModeButtonDynamicClasses = isTheaterMode ? 'absolute top-4 right-4 z-50 bg-background/80 backdrop-blur-sm' : 'mb-12';
  const theaterModeButtonClasses = cn(theaterModeButtonBaseClasses, theaterModeButtonDynamicClasses);

  // Классы для основного контейнера плеера и чата
  const mainContentGridClasses = cn(
    "w-full mx-auto grid grid-cols-1 gap-4 mb-12 transition-all duration-500 ease-in-out",
    isTheaterMode ? 'lg:grid-cols-[7fr_3fr] lg:max-w-full lg:h-screen lg:mb-0' : 'lg:grid-cols-[4fr_1fr] lg:max-w-5xl'
  );

  // Классы для контейнеров плеера и чата внутри сетки
  const playerChatContainerClasses = cn(
    "relative w-full h-full bg-muted rounded-lg overflow-hidden",
    isTheaterMode ? "rounded-none" : "" // Убираем скругления в режиме кинотеатра
  );

  return (
    <div className={rootDivClasses}>
      {!isTheaterMode && (
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-extrabold mb-6 text-foreground leading-tight">
            🔥 Добро пожаловать на канал HeLLisiuM!
          </h1>
          <p className="text-xl text-foreground mb-8">
            Здесь мы вместе погружаемся в захватывающие игровые вселенные, делимся эмоциями и создаем незабываемые моменты.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/schedule">
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
                Расписание стримов
              </Button>
            </Link>
            <a href="https://www.donationalerts.com/r/hellisium" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary/10">
                Поддержать стримера
              </Button>
            </a>
          </div>
        </div>
      )}

      <Button
        size="lg"
        variant="outline"
        onClick={() => setIsTheaterMode(!isTheaterMode)}
        className={theaterModeButtonClasses}
      >
        {isTheaterMode ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
        {isTheaterMode ? "Выйти из режима кинотеатра" : "Режим кинотеатра"}
      </Button>

      <div className={mainContentGridClasses}>
        {/* Player */}
        {isTheaterMode ? (
          <div className={playerChatContainerClasses}>
            {selectedPlayer === "twitch" && (
              <TwitchPlayerEmbed channel="hellisium" parent={['localhost']} autoplay={true} />
            )}
            {selectedPlayer === "youtube" && (
              <iframe
                src={playerUrls.youtube}
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Featured Stream"
              ></iframe>
            )}
            {selectedPlayer === "goodgame" && (
              <GoodgamePlayerEmbed channel="HeLLisiuM" autoplay={true} />
            )}
          </div>
        ) : (
          <Card className="w-full bg-card text-card-foreground shadow-xl p-4">
            <CardContent>
              <div className="flex justify-center gap-4 mb-6 flex-wrap">
                <Button
                  variant={selectedPlayer === "twitch" ? "default" : "outline"}
                  onClick={() => setSelectedPlayer("twitch")}
                >
                  Twitch
                </Button>
                <Button
                  variant={selectedPlayer === "youtube" ? "default" : "outline"}
                  onClick={() => setSelectedPlayer("youtube")}
                  disabled
                >
                  YouTube
                </Button>
                <Button
                  variant={selectedPlayer === "goodgame" ? "default" : "outline"}
                  onClick={() => setSelectedPlayer("goodgame")}
                >
                  GoodGame.ru
                </Button>
              </div>
              <div className="relative w-full h-[520px] bg-muted rounded-lg overflow-hidden">
                {selectedPlayer === "twitch" && (
                  <TwitchPlayerEmbed channel="hellisium" parent={['localhost']} autoplay={false} />
                )}
                {selectedPlayer === "youtube" && (
                  <>
                    <iframe
                      src={playerUrls.youtube}
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full border-0"
                      title="Featured Stream"
                    ></iframe>
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xl">
                      Здесь будет встроенный плеер YouTube
                    </div>
                  </>
                )}
                {selectedPlayer === "goodgame" && (
                  <GoodgamePlayerEmbed channel="HeLLisiuM" autoplay={false} />
                )}
              </div>
              <div className="mt-4 text-center">
                {selectedPlayer === "twitch" && (
                  <a href={channelUrls.twitch} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Перейти на канал Twitch
                  </a>
                )}
                {selectedPlayer === "youtube" && (
                  <a href={channelUrls.youtube} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Перейти на канал YouTube
                  </a>
                )}
                {selectedPlayer === "goodgame" && (
                  <a href={channelUrls.goodgame} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Перейти на канал GoodGame.ru
                  </a>
                )}
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
                <p className="text-center sm:text-left text-muted-foreground">
                  ▶️ Последний стрим: "Эпические приключения в Baldur's Gate 3"
                  <br />
                  <a href="#" className="text-primary hover:underline">
                    [Ссылка на запись]
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Chat */}
        {isTheaterMode ? (
          <div className={playerChatContainerClasses}>
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
        ) : (
          <Card className="w-full bg-card text-card-foreground shadow-xl p-4">
            <CardContent>
              <div className="relative w-full h-[670px] bg-muted rounded-lg overflow-hidden">
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
              <div className="mt-4 text-center">
                {selectedPlayer === "twitch" && (
                  <a href={twitchPopoutChatUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="w-full">
                      Открыть чат Twitch в новом окне
                    </Button>
                  </a>
                )}
                {selectedPlayer === "goodgame" && (
                  <a href={goodgamePopoutChatUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="w-full">
                      Открыть чат Goodgame в новом окне
                    </Button>
                  </a>
                )}
                {selectedPlayer === "youtube" && (
                  <Button variant="secondary" className="w-full" disabled>
                    Чат YouTube недоступен
                  </Button>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  Для полноценного участия в чате, возможно, потребуется войти в аккаунт соответствующей платформы.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {!isTheaterMode && (
        <>
          <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-center mt-12">
            <Link to="/about">
              <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">О HeLLisiuM</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Моя история, увлечения и путь в стриминге.</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/rules">
              <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Правила сообщества</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Как сделать наше общение приятным для всех.</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/contacts">
              <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Контакты и соцсети</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Где меня найти и как связаться.</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/highlights">
              <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">🎬 Топ-моменты</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Лучшие моменты со стримов и голосования.</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <ThanksForGifts />
        </>
      )}
    </div>
  );
};

export default Index;