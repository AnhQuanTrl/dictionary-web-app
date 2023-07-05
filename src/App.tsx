import React, { useEffect } from "react";
import { ThemeContext } from "./contexts/themeContext";
import { Theme } from "./types/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { rootLoader } from "./routes/rootLoader";
import { useMediaQuery } from "./hooks/useMediaQuery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
  },
]);

function App() {
  const preferDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = React.useState<Theme>(preferDark ? "dark" : "light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
}

export default App;
