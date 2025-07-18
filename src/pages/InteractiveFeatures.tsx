"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Mouse, Keyboard, Monitor, Image, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const interactiveFeatures = [
  {
    icon: <Mouse className="h-8 w-8 text-primary" />,
    title: "Ломай мышку",
    description: "Заставляет курсор мыши Андрея двигаться хаотично или исчезать на короткое время. Идеально для моментов, когда нужна точность!",
    link: "https://streamengine.app/@hellisium",
  },
  {
    icon: <Keyboard className="h-8 w-8 text-primary" />,
    title: "Отключай клавиши",
    description: "Временно отключает случайные клавиши на клавиатуре Андрея. Попробуйте, если хотите увидеть его реакцию в самый неподходящий момент!",
    link: "https://streamengine.app/@hellisium",
  },
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "Переворачивай экран",
    description: "Переворачивает изображение на экране Андрея вверх ногами на несколько секунд. Гарантированный хаос!",
    link: "https://streamengine.app/@hellisium",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Смена освещения",
    description: "Изменяет цвет или яркость освещения в комнате Андрея. Создайте атмосферу или просто отвлеките его!",
    link: "https://streamengine.app/@hellisium",
  },
  {
    icon: <Image className="h-8 w-8 text-primary" />,
    title: "Отправь мемас на стрим",
    description: "Отправьте свой любимый мем прямо на стрим Андрея! Удивите его и зрителей.",
    link: "https://memealerts.com/hellisium",
  },
];

const InteractiveFeatures = () => {
  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-foreground">Интерактивные фишки</h1>
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
              <a href={feature.link} target="_blank" rel="noopener noreferrer" className="block mt-4">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Активировать
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary-foreground flex items-center justify-center gap-3">
          <HelpCircle className="h-8 w-8" /> Как это работает?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Интерактивные фишки активируются через специальные сервисы, которые синхронизируются с моей трансляцией. Вы можете использовать для активации этих эффектов и влиять на происходящее в прямом эфире!
        </p>
        <div className="w-full max-w-3xl mx-auto h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xl border border-border shadow-md">
          [Место для видеоклипа, объясняющего, как работают фишки]
        </div>
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