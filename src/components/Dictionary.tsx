import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { FontContext } from "../contexts/fontContext";
import { fontFamilies } from "../data/fontFamilies";
import { rootLoader } from "../routes/rootLoader";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResultContainer from "./SearchResultContainer";

function Dictionary() {
  const { searchResult } = useLoaderData() as Awaited<ReturnType<typeof rootLoader>>;
  const [font, setFont] = React.useState(fontFamilies[0]);
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <FontContext.Provider value={{ font, setFont }}>
      <div
        className={`mx-auto box-content min-h-screen max-w-2xl px-6 pt-6 md:pt-14 ${font.className}`}
      >
        <Header />
        <main>
          <SearchBar />
          <SearchResultContainer searchResult={searchResult} loading={loading} />
        </main>
      </div>
    </FontContext.Provider>
  );
}

export default Dictionary;
