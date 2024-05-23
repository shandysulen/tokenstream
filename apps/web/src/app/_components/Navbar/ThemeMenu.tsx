"use client";

import {
  NavigationMenuContent,
  NavigationMenuContentButtonItem,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@tokenstream/components";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTriggerFix } from "@/hooks/useTriggerFix";

export const ThemeMenu: React.FC = () => {
  const fix = useTriggerFix();
  const [iconTrigger, setIconTrigger] = useState(<></>);
  const { theme, setTheme } = useTheme();

  /** Set icon based on theme */
  useEffect(() => {
    let icon = <></>;
    switch (theme) {
      case "dark":
        icon = <Moon size={20} />;
        break;
      case "light":
        icon = <Sun size={20} />;
        break;
      default:
        icon = <Monitor size={20} />;
        break;
    }

    setIconTrigger(icon);
  }, [theme]);

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger {...fix}>{iconTrigger}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuContentButtonItem
          icon={<Sun size={20} />}
          onClick={() => setTheme("light")}
        >
          Light
        </NavigationMenuContentButtonItem>
        <NavigationMenuContentButtonItem
          icon={<Moon size={20} />}
          onClick={() => setTheme("dark")}
        >
          Dark
        </NavigationMenuContentButtonItem>
        <NavigationMenuContentButtonItem
          icon={<Monitor size={20} />}
          onClick={() => setTheme("system")}
        >
          System
        </NavigationMenuContentButtonItem>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
