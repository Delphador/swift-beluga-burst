"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

const DonationWidget = () => {
  const latestDonations = [
    { id: 1, name: "Иван", amount: 500, time: "10 мин назад" },
    { id: 2, name: "Мария", amount: 300, time: "25 мин назад" },
    { id: 3, name: "Алексей", amount: 1000, time: "1 час назад" },
  ];

  return (
    <Card className="w-full max-w-sm bg-card text-card-foreground shadow-lg p-4 mt-12 mx-auto">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-green-500" /> Последние поддержавшие
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {latestDonations.length > 0 ? (
          latestDonations.map((donation) => (
            <p key={donation.id} className="text-muted-foreground">
              • {donation.name} - {donation.amount}₽ ({donation.time})
            </p>
          ))
        ) : (
          <p className="text-muted-foreground">Пока нет недавних донатов.</p>
        )}
        <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
          Поддержать
        </Button>
      </CardContent>
    </Card>
  );
};

export default DonationWidget;