import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { SearchIcon } from "./icons";

/*
 * This component contain a search box and a form that when submitted will push the route to /?q={searchBoxValue}
 */
export default function SearchBox() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const [query, setQuery] = useState(q);
  const [applyFilter, setApplyFilter] = useState<boolean>(false);

  useEffect(() => {
    setQuery(q);
  }, [q]);

  return (
    <>
      <form
        className="sticky left-0 right-0 top-1 z-10 flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/?q=${query}&filter=${applyFilter}`);
        }}
      >
        <div className="relative">
          <SearchIcon className="absolute top-[50%] ml-4 translate-y-[-50%] fill-white-400" />
          <input
            className="h-[5vmax] max-h-12 min-h-10 w-[max(calc(41vw+10rem),350px)] max-w-[95vw] rounded-xl border-2 border-dark-500 bg-dark-500 py-2 pl-10 pr-4 text-sm shadow-2xl shadow-[black] placeholder:text-white-400 placeholder:opacity-50 focus:border-accent focus:border-opacity-40 focus:outline-none md:max-lg:w-[max(calc(35vw+16rem),350px)]"
            type="text"
            placeholder="Search for images..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="relative mt-5 flex flex-row w-[max(calc(41vw+10rem),350px)] max-w-[95vw] gap-2">
          <p>Apply text filter</p>
          <input
            className="w-4"
            type="checkbox"
            placeholder="apply text filter"
            checked={applyFilter}
            onChange={(e) => setApplyFilter(e.target.checked)}
          />
        </div>
      </form>
    </>
  );
}
