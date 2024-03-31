import { ChangeEvent, useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_CHARACTER_FOR_NAME } from "../../../../services/querys";
import { useDebounce } from "use-debounce";
import SearchCard from "../../components/SearchCard";
import MyFilters from "./MyFilters";
import { Character } from "../../../../state/appState";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch] = useDebounce(searchTerm, 1000);
  const { loading, error, data } = useQuery(GET_CHARACTER_FOR_NAME, {
    variables: { name: debouncedSearch },
  });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col gap-4 relative lg:px-6">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {!loading && searchTerm !== "" && (
        <ul className="p-2 shadow menu dropdown-content flex flex-col gap-1 bg-base-100/95 rounded-box absolute w-full z-50 top-16">
          {data.characters.results.slice(0, 8).map((character: Character) => (
            <SearchCard
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </ul>
      )}
      <MyFilters />
    </div>
  );
}
