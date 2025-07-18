"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutAndrey = () => {
  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary-foreground">Об Андрее</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Биография</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>
              Привет! Я Андрей, мне 30 лет, и я живу в Подмосковье. Моя страсть к играм началась еще в детстве, и с тех пор она только крепнет.
            </p>
            <p>
              Мой игровой путь начался с StarCraft II, где я активно стримил с 2010 по 2012 год. Это было невероятное время, полное азарта и развития сообщества. Я даже вел совместную рубрику с Vega.JaykiddRa на sc2tv.ru, что дало мне бесценный опыт и множество ярких воспоминаний.
            </p>
            <p>
              Сегодня я играю во множество различных игр, исследуя новые миры и делясь своими приключениями с вами. Мои стримы — это место, где мы вместе погружаемся в игровые вселенные, обсуждаем стратегии и просто хорошо проводим время.
            </p>
            <p>
              Присоединяйтесь к нашему сообществу, и давайте вместе создавать незабываемые моменты!
            </p>
          </CardContent>
        </Card>
        <div className="flex justify-center items-center">
          {/* Placeholder for Andrey's photo or video */}
          <div className="w-full max-w-md h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xl">
            Фото Андрея / Видео сетапа
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAndrey;