"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground p-6 text-center border-t border-border mt-8">
      <div className="container mx-auto">
        <p className="text-sm text-muted-foreground mb-2">
          &copy; {new Date().getFullYear()} Андрей Стример. Все права защищены.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          {/* Placeholder for social media icons */}
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Twitch
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            YouTube
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            VK
          </a>
        </div>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;