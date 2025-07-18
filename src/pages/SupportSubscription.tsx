"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Gem, Rocket, Crown, Twitch } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const SupportSubscription = () => {
  const monthlyGoal = {
    description: "Новая камера",
    current: 15000,
    target: 30000,
  };

  const subscriptionTiers = [
    {
      name: "Базовый",
      icon: <Gem className="h-6 w-6 text-yellow-500" />,
      benefits: ["Эксклюзивные смайлы для чата", "Уникальная иконка клуба рядом с ником"],
    },
    {
      name: "Премиум",
      icon: <Rocket className="h-6 w-6 text-blue-500" />,
      benefits: ["Все из Базового", "Приоритет в играх с подписчиками", "Ранний доступ к контенту (в разработке)"],
    },
    {
      name: "VIP",
      icon: <Crown className="h-6 w-6 text-purple-500" />,
      benefits: ["Все из Премиум", "Доступ к закулисью (в разработке)", "Личный Discord канал", "Игра со стримером"],
    },
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
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                💰 Ежемесячная цель: {monthlyGoal.description}
              </h3>
              <Progress value={(monthlyGoal.current / monthlyGoal.target) * 100} className="w-full mb-2" />
              <p className="text-sm text-muted-foreground">
                {monthlyGoal.current.toLocaleString()}₽ из {monthlyGoal.target.toLocaleString()}₽
              </p>
            </div>
            <p>
              Вы можете поддержать меня через следующие платформы:
            </p>
            <div className="flex flex-col gap-4">
              <a href="https://www.donationalerts.com/r/hellisium" target="_blank" rel="noopener noreferrer"> {/* Updated link */}
                <Button className="w-full py-6 text-lg bg-green-600 hover:bg-green-700">
                  Поддержать через DonationAlerts
                </Button>
              </a>
              <a href="https://boosty.to/hellisium" target="_blank" rel="noopener noreferrer"> {/* Updated link */}
                <Button className="w-full py-6 text-lg bg-purple-600 hover:bg-purple-700">
                  Поддержать через Boosty
                </Button>
              </a>
              <a href="https://goodgame.ru/HeLLisiuM/support" target="_blank" rel="noopener noreferrer"> {/* Updated link */}
                <Button className="w-full py-6 text-lg bg-blue-800 hover:bg-blue-900">
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
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-2"></th>
                    {subscriptionTiers.map((tier) => (
                      <th key={tier.name} className="p-2 text-center">
                        <div className="flex flex-col items-center justify-center">
                          {tier.icon}
                          <span className="font-bold text-xl mt-1">{tier.name}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 font-medium">Смайлы</td>
                    <td className="p-2 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-2 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-2 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Иконка клуба</td>
                    <td className="p-2 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-2 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-2 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Приоритет в играх</td>
                    <td className="p-2 text-center"></td>
                    <td className="p-2 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-2 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Ранний доступ</td>
                    <td className="p-2 text-center"></td>
                    <td className="p-2 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="p-2 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Личный Discord</td>
                    <td className="p-2 text-center"></td>
                    <td className="p-2 text-center"></td>
                    <td className="p-2 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Игра со стримером</td>
                    <td className="p-2 text-center"></td>
                    <td className="p-2 text-center"></td>
                    <td className="p-2 text-center"><CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Button className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-3">
              <Twitch className="h-6 w-6" /> Оформить подписку на Twitch
            </Button>
            <a href="https://goodgame.ru/channel/HeLLisiuM/subscribe" target="_blank" rel="noopener noreferrer">
              <Button className="w-full py-6 text-lg bg-blue-800 hover:bg-blue-900 mt-4 flex items-center justify-center gap-3">
                <img src="/goodgame-logo.png" alt="GoodGame Logo" className="h-6 w-6" /> Оформить подписку на GoodGame.ru
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