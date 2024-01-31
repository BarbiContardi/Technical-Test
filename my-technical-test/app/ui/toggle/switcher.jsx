import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { MoonIcon } from "./moonIcon";
import { SunIcon } from "./sunIcon";

export default function Switcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSwitch = (isSelected, className) => {
    if (isSelected) {
      setTheme("dark");
      return <MoonIcon className={className} />;
    } else {
      setTheme("light");
      return <SunIcon className={className} />;
    }
  };
  if (!mounted) return null;

  return (
    <Switch
      defaultSelected={theme === "dark" ? true : false}
      size="md"
      color="default"
      thumbIcon={({ isSelected, className }) =>
        handleSwitch(isSelected, className)
      }
    />
  );
}
