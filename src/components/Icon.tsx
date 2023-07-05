import React from "react";
import { ReactComponent as LogoIcon } from "../assets/images/logo.svg";
import { ReactComponent as DarkModeIcon } from "../assets/images/icon-moon.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/images/icon-arrow-down.svg";
import { ReactComponent as SearchIcon } from "../assets/images/icon-search.svg";
import { ReactComponent as NewWindowIcon } from "../assets/images/icon-new-window.svg";

type IconProps = {
  name: "logo" | "darkMode" | "arrowDown" | "search" | "newWindow";
  className?: string;
};

function Icon({ name, className }: IconProps) {
  const attributes = {
    className,
    "aria-hidden": "true" as const,
  };

  const Icons: Record<IconProps["name"], React.JSX.Element> = {
    logo: <LogoIcon {...attributes} />,
    darkMode: <DarkModeIcon {...attributes} />,
    arrowDown: <ArrowDownIcon {...attributes} />,
    search: <SearchIcon {...attributes} />,
    newWindow: <NewWindowIcon {...attributes} />,
  };

  return Icons[name];
}

export default Icon;
