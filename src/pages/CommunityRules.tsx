"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, ArrowRight, AlertTriangle } from "lucide-react"; // Changed HandRight to ArrowRight

const CommunityRules = () => {
  const rules = [
    "Уважайте всех участников сообщества: стримера, модераторов и других зрителей. Оскорбления, дискриминация и троллинг строго запрещены.",
    "Не спойлерите игры, фильмы или сериалы, если это не разрешено стримером. Дайте другим насладиться контентом без преждевременного раскрытия сюжета.",
    "Мат разрешен только в режиме '18+'. В остальное время старайтесь использовать цензурную лексику.",
    "Не рекламируйте другие каналы, продукты или услуги без явного разрешения стримера.",
    "Сохраняйте позитивную и дружелюбную атмосферу. Любые действия, нарушающие комфорт сообщества, могут привести к предупреждению или бану.",
  ];

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary-foreground">📜 Правила сообщества</h1>
      <div className="grid md:grid-cols-1 gap-8">
        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Наши правила</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg">
            <p className="mb-4">
              Чтобы наше сообщество оставалось приятным и дружелюбным местом для всех, пожалуйста, ознакомьтесь с нашими правилами:
            </p>
            <ol className="list-decimal list-inside space-y-3">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" /> {/* Changed HandRight to ArrowRight */}
                  <span>{rule}</span>
                </li>
              ))}
            </ol>
            <Alert className="mt-6 bg-accent text-accent-foreground">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Нарушения и апелляции</AlertTitle>
              <AlertDescription>
                Нарушение правил может привести к предупреждению, временному или постоянному бану. Если вы считаете, что были забанены несправедливо, пожалуйста, свяжитесь с модераторами или HeLLisiuM через раздел "Контакты".
              </AlertDescription>
            </Alert>
            <div className="mt-6 text-center">
              {/* Placeholder for a meme/gif about positive atmosphere */}
              <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xl">
                [Мем/гифка про позитивную атмосферу]
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommunityRules;