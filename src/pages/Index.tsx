"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { BellRing } from "lucide-react";
import DonationWidget from "@/components/DonationWidget";
import StreamChat from "@/components/StreamChat"; // Import the new StreamChat component

const Index = () => {
  const [selectedPlayer, setSelectedPlayer] = useState("twitch"); // Default to Twitch

  const playerUrls = {
    twitch: "https://player.twitch.tv/?channel=hellisium&parent=localhost&autoplay=false", // Example Twitch channel
    youtube: "https://www.youtube.com/embed/your_youtube_stream_id?autoplay=0", // Example YouTube stream
    goodgame: "https://goodgame.ru/player?id=your_goodgame_channel_id&autoplay=0", // Example GoodGame channel
  };

  // Direct channel URLs for linking
  const channelUrls = {
    twitch: "https://www.twitch.tv/hellisium",
    youtube: "https://www.youtube.com/your_youtube_stream_id", // Replace with actual YouTube channel URL
    goodgame: "https://goodgame.ru/channel/your_goodgame_channel_id", // Replace with actual GoodGame channel URL
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center bg-background text-foreground p-8">
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
          {/* Изменена ссылка для кнопки 'Поддержать стримера' */}
          <a href="https://www.donationalerts.com/r/hellisium" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary/10">
              Поддержать стримера
            </Button>
          </a>
        </div>
      </div>

      <Card className="w-full max-w-5xl bg-card text-card-foreground shadow-xl p-6 mb-12">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-center text-primary-foreground">
            Последний стрим / Избранное видео
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center gap-4 mb-6">
            <Button
              variant={selectedPlayer === "twitch" ? "default" : "outline"}
              onClick={() => setSelectedPlayer("twitch")}
            >
              Twitch
            </Button>
            <Button
              variant={selectedPlayer === "youtube" ? "default" : "outline"}
              onClick={() => setSelectedPlayer("youtube")}
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
          <div className="relative w-full pt-[56.25%] bg-muted rounded-lg overflow-hidden">
            {/* Реальный встроенный плеер Twitch/YouTube/GoodGame */}
            <iframe
              src={playerUrls[selectedPlayer as keyof typeof playerUrls]}
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
              title="Featured Stream"
            ></iframe>
            {/* Placeholder for when the iframe might not load or for initial state */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xl">
              Здесь будет встроенный плеер {selectedPlayer.charAt(0).toUpperCase() + selectedPlayer.slice(1)}
            </div>
          </div>
          {/* Добавлены прямые ссылки на каналы под плеером */}
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
            <Button variant="secondary" className="flex items-center gap-2">
              <BellRing className="h-4 w-4" /> Уведомить о начале стрима {/* Requires backend integration */}
            </Button>
          </div>
        </CardContent>
      </Card>

      <StreamChat /> {/* Integrated StreamChat component */}

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

      <DonationWidget />
    </div>
  );
};

export default Index;