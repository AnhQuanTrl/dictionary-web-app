import React from "react";
import Icon from "./Icon";
import { cn } from "../utils";
import { Form, useLoaderData, useSubmit } from "react-router-dom";
import { rootLoader } from "../routes/rootLoader";

const SearchBar = () => {
  const { q } = useLoaderData() as Awaited<ReturnType<typeof rootLoader>>;
  const submit = useSubmit();
  const searchBar = React.useRef<HTMLInputElement>(null);
  const [searchInput, setSearchInput] = React.useState(q);
  const [error, setError] = React.useState("");

  const handleSubmit: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    if (searchInput === "") {
      setError("Whoops, can't be empty...");
    }

    searchBar.current?.blur();
    submit(e.currentTarget);
  };

  const handleInputChange: React.ComponentProps<"input">["onChange"] = (e) => {
    setError("");
    setSearchInput(e.target.value);
  };

  return (
    <Form id="search-form" role="search" onSubmit={handleSubmit} defaultValue={q}>
      <span className="relative block">
        <label className="sr-only" htmlFor="search-term">
          Search for meaning
        </label>
        <input
          ref={searchBar}
          id="search-term"
          name="q"
          value={searchInput}
          onChange={handleInputChange}
          type="search"
          placeholder="Search for any word..."
          className={cn(
            "block w-full rounded-2xl border-0 bg-neutral-300 py-[14px] pl-6 text-base font-bold ring-0 placeholder:text-neutral-700/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple dark:bg-neutral-800 dark:placeholder:text-white/25 md:py-5 md:text-xl",
            error
              ? "border border-orange focus-visible:border-orange focus-visible:ring-orange"
              : "",
          )}
        />
        <span className="absolute inset-y-0 right-0 mr-6 flex items-center">
          <Icon name="search" className="h-[1em]" />
        </span>
      </span>
      {error && <span className="mt-2 block text-orange">{error}</span>}
    </Form>
  );
};

export default SearchBar;
