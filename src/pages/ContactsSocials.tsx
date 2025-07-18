"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Twitch, Youtube, Link, Mail, Send, MessageSquare } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const ContactsSocials = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted!");
    toast.success("Ваше сообщение успешно отправлено! HeLLisiuM скоро свяжется с вами.");
    // Reset form fields if needed
  };

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-foreground">Контакты и соцсети</h1> {/* Changed text-primary-foreground to text-foreground */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">📱 Наши соцсети</CardTitle>
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
                  <Link className="h-6 w-6" /> ВКонтакте
                </Button>
              </a>
              <a href="https://goodgame.ru/channel/HeLLisiuM/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full py-6 text-lg flex items-center justify-center gap-3 bg-blue-800 hover:bg-blue-900">
                  GoodGame.ru
                </Button>
              </a>
              <a href="https://t.me/your_andrey_telegram" target="_blank" rel="noopener noreferrer">
                <Button className="w-full py-6 text-lg flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600">
                  <Send className="h-6 w-6" /> Telegram
                </Button>
              </a>
              <a href="https://discord.gg/your_andrey_discord" target="_blank" rel="noopener noreferrer">
                <Button className="w-full py-6 text-lg flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700">
                  <MessageSquare className="h-6 w-6" /> Discord
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Ваше имя <span className="text-destructive">*</span></Label>
                <Input id="name" type="text" placeholder="Имя" required />
              </div>
              <div>
                <Label htmlFor="email">Ваш Email <span className="text-destructive">*</span></Label>
                <Input id="email" type="email" placeholder="email@example.com" required />
              </div>
              <div>
                <Label htmlFor="subject">Тема</Label>
                <Select>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Выберите тему" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="collaboration">Сотрудничество</SelectItem>
                    <SelectItem value="business">Деловое предложение</SelectItem>
                    <SelectItem value="question">Вопрос по стриму/игре</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Textarea id="message" placeholder="Ваше сообщение..." rows={5} />
              </div>
              <Button type="submit" className="w-full py-6 text-lg flex items-center justify-center gap-3">
                <Send className="h-6 w-6" /> Отправить сообщение
              </Button>
            </form>
            <p className="text-center text-muted-foreground mt-4">
              Или напишите напрямую: <a href="mailto:hellisium.streamer@example.com" className="text-primary hover:underline">hellisium.streamer@example.com</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactsSocials;