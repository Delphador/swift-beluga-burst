"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Mouse, Keyboard, Monitor } from "lucide-react";

const interactiveFeatures = [
  {
    icon: <Mouse className="h-8 w-8 text-primary" />,
    title: "Ломай мышку",
    description: "Заставляет курсор мыши Андрея двигаться хаотично или исчезать на короткое время. Идеально для моментов, когда нужна точность!",
    howTo: "Активируется за донат в 500 руб. или 5000 баллов канала.",
  },
  {
    icon: <Keyboard className="h-8 w-8 text-primary" />,
    title: "Отключай клавиши",
    description: "Временно отключает случайные клавиши на клавиатуре Андрея. Попробуйте, если хотите увидеть его реакцию в самый неподходящий момент!",
    howTo: "Активируется за донат в 750 руб. или 7500 баллов канала.",
  },
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "Переворачивай экран",
    description: "Переворачивает изображение на экране Андрея вверх ногами на несколько секунд. Гарантированный хаос!",
    howTo: "Активируется за донат в 1000 руб. или 10000 баллов канала.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Смена освещения",
    description: "Изменяет цвет или яркость освещения в комнате Андрея. Создайте атмосферу или просто отвлеките его!",
    howTo: "Активируется за донат в 300 руб. или 3000 баллов канала.",
  },
];

const InteractiveFeatures = () => {
  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary-foreground">Интерактивные фишки</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Сделайте стрим еще веселее! Эти фишки позволяют вам влиять на игровой процесс и реакции Андрея.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interactiveFeatures.map((feature, index) => (
          <Card key={index} className="bg-card text-card-foreground shadow-lg flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              {feature.icon}
              <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-3 text-lg">
              <p>{feature.description}</p>
              <p className="text-sm text-muted-foreground italic">{feature.howTo}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground">
          Следите за стримами, чтобы узнать о новых интерактивных возможностях!
        </p>
      </div>
    </div>
  );
};

export default InteractiveFeatures;