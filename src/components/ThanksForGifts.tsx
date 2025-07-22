"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react"; // Используем иконку подарка

const ThanksForGifts = () => {
  const gifts = [
    { user: "Teraon", description: "Благодарность за AVGN Adventures, Dark souls: Prepare to Die edition, Factorio." },
    { user: "Omn1Fant", description: "Благодарность за Breath of Death VII, Cthulhu Saves the World, Super Hexagon." },
    { user: "E.Wolf", description: "Благодарность за The Hat Man: Shadow Ward" },
    { user: "MilitaryRainbow", description: "Благодарность за Slain: Back from Hell" },
    { user: "Operator74ru", description: "Благодарность за AoE II: Definitive Edition, Loop Hero" },
    { user: "Kamia666", description: "Благодарность за Diablo III: Reaper of Souls, Diablo II: Resurrected, Dark Souls III, Elden Ring + DLC (Shadow of the Erdtree), Warhammer 40,000: Space Marine 2, DOOM Eternal(2020), DOOM: The Dark Ages(2025)" },
    { user: "Delphador", description: "Благодарность за Skul: The Hero Slayer, Trials of Fire, Legend of Keepers" },
    { user: "Shuba666", description: "Благодарность за Rezrog" },
  ];

  return (
    <Card className="w-full max-w-sm bg-card text-card-foreground shadow-lg p-4 mt-12 mx-auto">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <Gift className="h-6 w-6 text-purple-500" /> Ваши подарки
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {gifts.length > 0 ? (
          gifts.map((gift, index) => (
            <p key={index} className="text-muted-foreground">
              <span className="font-medium text-primary">{gift.user}:</span> {gift.description}
            </p>
          ))
        ) : (
          <p className="text-muted-foreground">Пока нет записей о подарках.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ThanksForGifts;