"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const SupportSubscription = () => {
  const subscriptionBenefits = [
    "Эксклюзивные смайлы для чата",
    "Уникальная иконка клуба рядом с ником",
    "Приоритет в играх с подписчиками",
    "Доступ к закулисью (в разработке)",
    "Отсутствие рекламы на стримах",
    "Участие в закрытых голосованиях",
  ];

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary-foreground">Поддержка и подписка</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Поддержать стримера</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>
              Ваша поддержка очень важна и помогает мне продолжать делать то, что я люблю – стримить для вас! Каждая донат или подписка мотивирует меня создавать еще больше качественного контента.
            </p>
            <p>
              Вы можете поддержать меня через следующие платформы:
            </p>
            <div className="flex flex-col gap-4">
              <Button className="w-full py-6 text-lg bg-green-600 hover:bg-green-700">
                Поддержать через DonationAlerts
              </Button>
              <Button className="w-full py-6 text-lg bg-purple-600 hover:bg-purple-700">
                Поддержать через Boosty
              </Button>
              <a href="https://goodgame.ru/channel/HeLLisiuM/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full py-6 text-lg bg-blue-800 hover:bg-blue-900"> {/* Using a darker blue for GoodGame */}
                  Поддержать через GoodGame.ru
                </Button>
              </a>
              {/* Add more donation options if needed */}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Все донаты идут на улучшение качества стримов, покупку новых игр и оборудования.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Преимущества подписки</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p>
              Оформите подписку, чтобы получить доступ к эксклюзивным бонусам и стать частью нашего особого клуба!
            </p>
            <ul className="space-y-3">
              {subscriptionBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700">
              Оформить подписку на Twitch
            </Button>
            <a href="https://goodgame.ru/channel/HeLLisiuM/subscribe" target="_blank" rel="noopener noreferrer">
              <Button className="w-full py-6 text-lg bg-blue-800 hover:bg-blue-900 mt-4"> {/* Added margin-top for spacing */}
                Оформить подписку на GoodGame.ru
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Список преимуществ будет постоянно расширяться!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupportSubscription;