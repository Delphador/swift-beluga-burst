"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StreamChat = () => {
  const [selectedChat, setSelectedChat] = useState("twitch");

  const chatUrls = {
    twitch: "https://www.twitch.tv/embed/hellisium/chat?parent=localhost",
    youtube: "https://www.youtube.com/live_chat?v=your_youtube_stream_id&embed_domain=localhost", // Replace with actual YouTube Live Chat embed URL
    goodgame: "https://goodgame.ru/chat/hellisium/",
    vkvideo: "https://live.vkvideo.ru/hellisium/chat", // This URL might need adjustment based on VK's actual embed options
  };

  return (
    <Card className="w-full max-w-5xl bg-card text-card-foreground shadow-xl p-6 mt-12 mx-auto">
      <CardHeader className="pb-4">
        <CardTitle className="text-3xl font-bold text-center text-primary-foreground">
          Чат трансляции
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <Button
            variant={selectedChat === "twitch" ? "default" : "outline"}
            onClick={() => setSelectedChat("twitch")}
          >
            Twitch Чат
          </Button>
          <Button
            variant={selectedChat === "youtube" ? "default" : "outline"}
            onClick={() => setSelectedChat("youtube")}
          >
            YouTube Чат
          </Button>
          <Button
            variant={selectedChat === "goodgame" ? "default" : "outline"}
            onClick={() => setSelectedChat("goodgame")}
          >
            GoodGame Чат
          </Button>
          <Button
            variant={selectedChat === "vkvideo" ? "default" : "outline"}
            onClick={() => setSelectedChat("vkvideo")}
          >
            VK Video Чат
          </Button>
        </div>
        <div className="relative w-full pt-[150%] md:pt-[56.25%] bg-muted rounded-lg overflow-hidden"> {/* Adjusted aspect ratio for chat */}
          <iframe
            src={chatUrls[selectedChat as keyof typeof chatUrls]}
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
            title={`${selectedChat} Chat`}
          ></iframe>
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xl">
            Чат {selectedChat.charAt(0).toUpperCase() + selectedChat.slice(1)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreamChat;