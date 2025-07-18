"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, ThumbsUp, ThumbsDown } from "lucide-react";

const HighlightsGallery = () => {
  const highlightVideos = [
    { id: 1, title: "Эпический клатч в Valorant", embedUrl: "https://www.youtube.com/embed/video_id_1", votes: 120 },
    { id: 2, title: "Невероятный момент в Baldur's Gate 3", embedUrl: "https://www.youtube.com/embed/video_id_2", votes: 95 },
    { id: 3, title: "Смешной баг в Cyberpunk 2077", embedUrl: "https://www.youtube.com/embed/video_id_3", votes: 80 },
    { id: 4, title: "Победа над боссом в Elden Ring", embedUrl: "https://www.youtube.com/embed/video_id_4", votes: 150 },
    { id: 5, title: "Забавный фейл на стриме", embedUrl: "https://www.youtube.com/embed/video_id_5", votes: 70 },
  ];

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary-foreground">🎬 Топ-моменты за месяц</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">
        Здесь собраны самые яркие и запоминающиеся моменты с моих стримов. Голосуйте за любимые!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlightVideos.map((video) => (
          <Card key={video.id} className="bg-card text-card-foreground shadow-lg flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold flex items-center gap-2">
                <Video className="h-6 w-6 text-primary" /> {video.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-3">
              <div className="relative w-full pt-[56.25%] bg-muted rounded-lg overflow-hidden">
                <iframe
                  src={video.embedUrl}
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                  title={video.title}
                ></iframe>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-muted-foreground">Голосов: {video.votes}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Голосование "Лучший момент месяца"</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Выберите момент, который, по вашему мнению, был самым лучшим в этом месяце!
        </p>
        <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
          Проголосовать
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          (Эта функция требует интеграции с базой данных для голосования)
        </p>
      </div>
    </div>
  );
};

export default HighlightsGallery;