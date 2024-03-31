import { useEffect, useState } from "react";
import { useStore } from "../../../../state/appState";
import { useLazyQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../../../services/querys";

export default function Pagination({ totalPages = 7 }) {
  const [activeButton, setActiveButton] = useState(1);
  const setCharacters = useStore((state) => state.initialCharacters);

  const [myFetch, { data }] = useLazyQuery(GET_CHARACTER, {
    variables: { page: activeButton },
  });

  useEffect(() => {
    myFetch({ variables: { page: activeButton } });
  }, [activeButton, myFetch]);

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
    }
  }, [data, setCharacters]);

  const handleButtonClick = (pageNumber: number) => setActiveButton(pageNumber);

  return (
    <div className="join mx-auto">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index + 1}
          className={`join-item btn ${
            activeButton === index + 1 ? "btn-active" : ""
          }`}
          onClick={() => handleButtonClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
