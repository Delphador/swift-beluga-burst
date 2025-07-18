"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

const StreamSchedule = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const upcomingStreams = [
    { id: 1, game: "Cyberpunk 2077", time: "Сегодня, 20:00 МСК", description: "Продолжаем приключения в Найт-Сити!" },
    { id: 2, game: "Baldur's Gate 3", time: "Завтра, 19:00 МСК", description: "Новая глава в мире Фаэруна." },
    { id: 3, game: "Valorant", time: "Пятница, 21:00 МСК", description: "Ранкеды с подписчиками!" },
  ];

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary-foreground">Расписание стримов</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Календарь</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow"
            />
          </CardContent>
        </Card>
        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Предстоящие трансляции</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingStreams.length > 0 ? (
              upcomingStreams.map((stream) => (
                <div key={stream.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-medium text-primary">{stream.game}</h3>
                  <p className="text-muted-foreground">{stream.time}</p>
                  <p className="mt-1">{stream.description}</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Добавить в календарь
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground">Пока нет запланированных стримов. Следите за обновлениями!</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StreamSchedule;