"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Mouse, Keyboard, Monitor, Image } from "lucide-react"; // Removed HelpCircle, added Image
import { Button } from "@/components/ui/button";

const InteractiveFeatures = () => {
  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-foreground">Интерактивные фишки</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Сделайте стрим еще веселее! Эти фишки позволяют вам влиять на игровой процесс и реакции Андрея.
      </p>

      {/* Block 1: Ломай круши */}
      <Card className="w-full max-w-5xl bg-card text-card-foreground shadow-xl p-6 mb-12 mx-auto">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-center text-primary-foreground">
            💥 Ломай круши
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Клавиатура */}
            <Card className="bg-card text-card-foreground shadow-lg flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Keyboard className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-semibold">Клавиатура</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-3 text-lg">
                <p>Временно отключает случайные клавиши на клавиатуре Андрея. Попробуйте, если хотите увидеть его реакцию в самый неподходящий момент!</p>
                <a href="https://streamengine.app/@hellisium" target="_blank" rel="noopener noreferrer" className="block mt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Отключай клавиши
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Мышь */}
            <Card className="bg-card text-card-foreground shadow-lg flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Mouse className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-semibold">Мышь</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-3 text-lg">
                <p>Заставляет курсор мыши Андрея двигаться хаотично или исчезать на короткое время. Идеально для моментов, когда нужна точность!</p>
                <a href="https://streamengine.app/@hellisium" target="_blank" rel="noopener noreferrer" className="block mt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Ломай мышку
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Монитор */}
            <Card className="bg-card text-card-foreground shadow-lg flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Monitor className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-semibold">Монитор</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-3 text-lg">
                <p>Переворачивает изображение на экране Андрея вверх ногами на несколько секунд. Гарантированный хаос!</p>
                <a href="https://streamengine.app/@hellisium" target="_blank" rel="noopener noreferrer" className="block mt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Переворачивай экран
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Скример */}
            <Card className="bg-card text-card-foreground shadow-lg flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Lightbulb className="h-8 w-8 text-primary" /> {/* Используем Lightbulb, так как описание соответствует смене освещения */}
                <CardTitle className="text-2xl font-semibold">Скример</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-3 text-lg">
                <p>Изменяет цвет или яркость освещения в комнате Андрея. Создайте атмосферу или просто отвлеките его!</p>
                <a href="https://streamengine.app/@hellisium" target="_blank" rel="noopener noreferrer" className="block mt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    У-у-у-сюка
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Block 2: Отправь мемас на стрим */}
      <Card className="w-full max-w-5xl bg-card text-card-foreground shadow-xl p-6 mb-12 mx-auto">
        <CardHeader className="pb-4">
          <CardTitle className="text-3xl font-bold text-center text-primary-foreground flex items-center justify-center gap-3">
            <Image className="h-8 w-8" /> Отправь мемас на стрим
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg text-center">
          <p className="max-w-2xl mx-auto">Отправьте свой любимый мем прямо на стрим Андрея! Удивите его и зрителей.</p>
          <a href="https://memealerts.com/hellisium" target="_blank" rel="noopener noreferrer" className="block mt-4">
            <Button className="w-full max-w-xs mx-auto bg-primary hover:bg-primary/90">
              Отправить мемас
            </Button>
          </a>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Как это работает?</h3>
            <div className="w-full max-w-3xl mx-auto h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xl border border-border shadow-md">
              [Место для видео, объясняющего, как отправить мемас]
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <p className="text-lg text-muted-foreground">
          Следите за стримами, чтобы узнать о новых интерактивных возможностях!
        </p>
      </div>
    </div>
  );
};

export default InteractiveFeatures;