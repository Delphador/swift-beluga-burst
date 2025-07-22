"use client";

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Gamepad, User, Calendar, ScrollText, Monitor, Heart, Sparkles, Mail, Video } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  isTheaterMode?: boolean;
}

const navLinks = [
  { name: "Главная", path: "/", icon: <Gamepad className="h-5 w-5" /> },
  { name: "О HeLLisiuM", path: "/about", icon: <User className="h-5 w-5" /> },
  { name: "Расписание", path: "/schedule", icon: <Calendar className="h-5 w-5" /> },
  { name: "Правила", path: "/rules", icon: <ScrollText className="h-5 w-5" /> },
  { name: "Сетап", path: "/setup", icon: <Monitor className="h-5 w-5" /> },
  { name: "Поддержка", path: "/support", icon: <Heart className="h-5 w-5" /> },
  { name: "Фишки", path: "/features", icon: <Sparkles className="h-5 w-5" /> },
  { name: "Контакты", path: "/contacts", icon: <Mail className="h-5 w-5" /> },
  { name: "Топ-моменты", path: "/highlights", icon: <Video className="h-5 w-5" /> },
];

const Navbar: React.FC<NavbarProps> = ({ isTheaterMode = false }) => {
  const isMobile = useIsMobile();

  if (isTheaterMode) return null; // Скрываем навбар в режиме кинотеатра

  return (
    <nav className="bg-background text-foreground p-4 shadow-md sticky top-0 z-50">
      {/* Остальной код Navbar без изменений */}
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <img src="/placeholder-logo.png" alt="HeLLisiuM Лого" className="h-8 w-8" />
          HeLLisiuM
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-sidebar text-sidebar-foreground">
              <nav className="flex flex-col gap-4 pt-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2 text-lg font-medium transition-colors whitespace-nowrap ${
                        isActive ? "text-sidebar-primary" : "text-sidebar-foreground hover:text-sidebar-primary"
                      }`
                    }
                  >
                    {link.icon}
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-lg font-medium transition-colors whitespace-nowrap ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;