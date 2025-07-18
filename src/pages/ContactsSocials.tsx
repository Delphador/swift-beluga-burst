"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Twitch, Youtube, Vk, Mail } from "lucide-react";

const ContactsSocials = () => {
  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary-foreground">Контакты и соцсети</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Наши соцсети</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>
              Будьте в курсе всех новостей, анонсов и закулисных моментов, подписавшись на мои социальные сети:
            </p>
            <div className="flex flex-col gap-4">
              <a href="https://www.twitch.tv/your_andrey_twitch" target="_blank" rel="noopener noreferrer">
                <Button className="w-full py-6 text-lg flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700">
                  <Twitch className="h-6 w-6" /> Twitch
                </Button>
              </a>
              <a href="https://www.youtube.com/your_andrey_youtube" target="_blank" rel="noopener noreferrer">
                <Button className="w-full py-6 text-lg flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700">
                  <Youtube className="h-6 w-6" /> YouTube
                </Button>
              </a>
              <a href="https://vk.com/your_andrey_vk" target="_blank" rel="noopener noreferrer">
                <Button className="w-full py-6 text-lg flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700">
                  <Vk className="h-6 w-6" /> ВКонтакте
                </Button>
              </a>
              {/* Add more social media links as needed */}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Обратная связь</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>
              Для деловых предложений, сотрудничества или других важных вопросов, пожалуйста, используйте форму ниже или напишите мне на почту.
            </p>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Ваше имя</Label>
                <Input id="name" type="text" placeholder="Имя" />
              </div>
              <div>
                <Label htmlFor="email">Ваш Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea id="message" placeholder="Ваше сообщение..." rows={5} />
              </div>
              <Button type="submit" className="w-full py-6 text-lg">
                Отправить сообщение
              </Button>
            </form>
            <p className="text-center text-muted-foreground mt-4">
              Или напишите напрямую: <a href="mailto:andrey.streamer@example.com" className="text-primary hover:underline">andrey.streamer@example.com</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactsSocials;