import ThemeSwitch from "./ThemeSwitch";
import Icon from "./Icon";
import FontDropDown from "./FontDropdown";

const Header = () => {
  return (
    <header className="mb-6 flex items-stretch gap-2 md:mb-12 md:gap-4">
      <Icon name="logo" className="mr-auto h-8 text-neutral-500 md:h-9" />
      <FontDropDown />
      <div className="mr-2 inline-block w-px bg-neutral-400"></div>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
