import { NavigationMenuContentButtonItem } from "@tokenstream/components";
import { LogOut } from "lucide-react";
import React from "react";
import { useDisconnect } from "wagmi";

export const LogOutMenuItem: React.FC = () => {
  const { disconnect } = useDisconnect();

  return (
    <NavigationMenuContentButtonItem
      icon={<LogOut />}
      onClick={() => disconnect()}
    >
      Log out
    </NavigationMenuContentButtonItem>
  );
};
