import { Switch } from "@headlessui/react";
import { useTheme } from "../hooks/useTheme";
import Icon from "./Icon";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const enabled = theme === "dark";

  return (
    <div className="flex items-center">
      <Switch
        checked={enabled}
        onChange={toggleTheme}
        className={`${
          enabled ? "bg-purple" : "bg-neutral-500"
        } relative mr-3 inline-flex h-[20px] w-[40px] cursor-pointer items-center rounded-full border-[3px] border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-opacity-75 md:mr-5`}
      >
        <span className="sr-only">Toggle light/dark mode</span>
        <span
          aria-hidden="true"
          className={`${
            enabled ? "translate-x-5" : "translate-x-0"
          } inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out`}
        />
      </Switch>
      <Icon name="darkMode" className="w-5 text-neutral-500 dark:text-purple" />
    </div>
  );
};
export default ThemeSwitch;
