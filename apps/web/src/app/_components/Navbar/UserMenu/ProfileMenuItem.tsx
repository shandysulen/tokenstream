"use client";

import { NavigationMenuContentButtonItem } from "@tokenstream/components";
import { User2 } from "lucide-react";

export const ProfileMenuItem: React.FC = () => {
  return (
    <NavigationMenuContentButtonItem
      icon={<User2 />}
      onClick={() => alert("showing profile")}
    >
      Profile
    </NavigationMenuContentButtonItem>
  );
};
