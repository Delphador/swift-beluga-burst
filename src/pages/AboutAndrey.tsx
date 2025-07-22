"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageCarousel from "@/components/ImageCarousel"; // Импортируем новый компонент карусели

const AboutAndrey = () => {
  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-foreground">О HeLLisiuM</h1> {/* Changed text-primary-foreground to text-foreground */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Биография</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>
              👋 Привет! Я HeLLisiuM, мне 30 лет, и я живу в Подмосковье. Моя страсть к играм началась еще в детстве, и с тех пор она только крепнет.
            </p>
            <p className="font-semibold text-primary">🚀 Игровой путь:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>StarCraft II (2010-2012)</li>
              <li>Совместная рубрика с Vega.JaykiddRa на sc2tv.ru</li>
              <li>[Другие значимые проекты и вехи]</li>
            </ul>
            <p className="font-semibold text-primary mt-4">🔮 Сегодня в фокусе:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Baldur's Gate 3</li>
              <li>Cyberpunk 2077</li>
              <li>Valorant</li>
              <li>[Другие актуальные игры]</li>
            </ul>
            <p>
              Присоединяйтесь к нашему сообществу, и давайте вместе создавать незабываемые моменты!
            </p>
          </CardContent>
        </Card>
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Карусель для фото HeLLisiuM */}
          <ImageCarousel />
          {/* Placeholder for a short video greeting */}
          <div className="w-full max-w-md h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xl">
            [Короткое видео-приветствие 30-60 сек]
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAndrey;