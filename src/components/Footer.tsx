"use client";

import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground p-6 text-center border-t border-border mt-8">
      <div className="container mx-auto">
        <p className="text-sm text-muted-foreground mb-2">
          &copy; {new Date().getFullYear()} HeLLisiuM. Все права защищены.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <a 
            href="https://www.twitch.tv/hellisium" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Twitch
          </a>
          <a 
            href="https://www.youtube.com/@HeLLisiuM" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            YouTube
          </a>
          <a 
            href="https://vk.com/hellisium" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            VK
          </a>
        </div>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;