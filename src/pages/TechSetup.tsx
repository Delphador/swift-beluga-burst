"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const TechSetup = () => {
  const streamPC = [
    { item: "Материнская плата", spec: "ASUS ROG Strix Z690-F Gaming WiFi" },
    { item: "Процессор", spec: "Intel Core i9-12900K" },
    { item: "Видеокарта", spec: "NVIDIA GeForce RTX 3080" },
    { item: "Оперативная память", spec: "32GB DDR5 6000MHz" },
    { item: "Накопитель", spec: "1TB NVMe SSD" },
  ];

  const gamingPC = [
    { item: "Материнская плата", spec: "MSI MPG B550 Gaming Plus" },
    { item: "Процессор", spec: "AMD Ryzen 7 5800X3D" },
    { item: "Видеокарта", spec: "AMD Radeon RX 6800 XT" },
    { item: "Оперативная память", spec: "16GB DDR4 3600MHz" },
    { item: "Накопитель", spec: "500GB NVMe SSD + 2TB HDD" },
  ];

  const peripherals = [
    { item: "Монитор 1", spec: "Dell Alienware AW2521HFL (240Hz)" },
    { item: "Монитор 2", spec: "LG 27GL850-B (144Hz)" },
    { item: "Клавиатура", spec: "HyperX Alloy Origins Core" },
    { item: "Мышь", "spec": "Logitech G Pro X Superlight" },
    { item: "Геймпад", spec: "Xbox Wireless Controller" },
    { item: "Микрофон", spec: "Shure MV7" },
    { item: "Наушники", spec: "Beyerdynamic DT 770 Pro" },
    { item: "Веб-камера", spec: "Logitech C920" },
  ];

  return (
    <div className="container mx-auto p-8 min-h-[calc(100vh-160px)]">
      <h1 className="text-4xl font-bold text-center mb-10 text-foreground">💻 Мое оборудование</h1> {/* Changed text-primary-foreground to text-foreground */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Стрим-ПК</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {streamPC.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium">{item.item}:</span>
                <span className="text-muted-foreground">{item.spec}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Игровой ПК</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {gamingPC.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium">{item.item}:</span>
                <span className="text-muted-foreground">{item.spec}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground shadow-lg col-span-full lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Периферия</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {peripherals.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="font-medium">{item.item}:</span>
                <span className="text-muted-foreground">{item.spec}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 text-center">
        {/* Placeholder for photo of real setup */}
        <div className="w-full max-w-3xl mx-auto h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xl mb-8">
          [Фото реального сетапа HeLLisiuM]
        </div>
        {/* Placeholder for interactive scheme */}
        <div className="w-full max-w-3xl mx-auto h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xl mb-8">
          [Интерактивная схема сетапа (наведите на компонент → информация)]
        </div>

        <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Партнерские ссылки</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Хотите собрать похожий сетап? Вот ссылки на некоторые из моих любимых компонентов:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
            Купить Процессор
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
            Купить Видеокарту
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
            Купить Микрофон
          </a>
          {/* Add more partner links as needed */}
        </div>
      </div>
    </div>
  );
};

export default TechSetup;