"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Gamepad, Clock, Info } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const StreamSchedule = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const upcomingStreams = [
    { id: 1, game: "Cyberpunk 2077", time: "Сегодня, 20:00 МСК", description: "Продолжаем приключения в Найт-Сити!", progress: 75 },
    { id: 2, game: "Baldur's Gate 3", time: "Завтра, 19:00 МСК", description: "Новая глава в мире Фаэруна.", progress: 50 },
    { id: 3, game: "Valorant", time: "Пятница, 21:00 МСК", description: "Ранкеды с подписчиками!", progress: 25 },
  ];

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-foreground">Расписание стримов</h1> {/* Changed text-primary-foreground to text-foreground */}
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
                  <h3 className="text-xl font-medium text-primary flex items-center gap-2">
                    <Gamepad className="h-5 w-5" /> {stream.game}
                  </h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {stream.time}
                  </p>
                  <p className="mt-1">{stream.description}</p>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground mb-1">Прогресс до начала:</p>
                    <Progress value={stream.progress} className="w-full" /> {/* Placeholder progress bar */}
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    Добавить в календарь
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground flex items-center gap-2">
                <Info className="h-4 w-4" /> Пока нет запланированных стримов. Следите за обновлениями!
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StreamSchedule;