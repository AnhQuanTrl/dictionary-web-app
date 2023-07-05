import { Menu } from "@headlessui/react";
import { fontFamilies } from "../data/fontFamilies";
import { useFont } from "../hooks/useFont";
import Icon from "./Icon";

const FontDropDown = () => {
  const { font, setFont } = useFont();

  return (
    <Menu as="div" className="relative ml-auto">
      <Menu.Button className="inline-flex h-full items-center gap-4 rounded-md border border-transparent px-2 font-bold transition duration-200 ease-in-out hover:bg-purple/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-opacity-75">
        {font.name}
        <Icon name="arrowDown" className="inline h-[0.4em]" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 z-10 mt-4 w-44 rounded-2xl bg-white p-4 shadow transition duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-opacity-75 dark:bg-neutral-800 dark:shadow-purple">
        {fontFamilies.map((fontFamily) => (
          <Menu.Item key={fontFamily.id}>
            {({ active }) => (
              <button
                className={`block p-2 font-bold ${fontFamily.className} ${
                  active ? "text-purple" : "text-neutral-700 dark:text-white"
                }`}
                onClick={() => setFont(fontFamily)}
              >
                {fontFamily.name}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default FontDropDown;
