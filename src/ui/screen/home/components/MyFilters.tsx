import { useState, useEffect, ChangeEvent } from "react";

import { useLazyQuery } from "@apollo/client";
import { GET_CHARACTERS_FOR_FILTERS } from "../../../../services/querys";
import { useStore } from "../../../../state/appState";

import Select from "../../components/Select";
import {
  statusList,
  speciesList,
  genderList,
} from "../../../../helpers/constants";
import MyButtons from "./MyButtons";
import Alert from "./Alert";

export default function MyFilters() {
  const [showAllBtns, setShowAllBtns] = useState<boolean>(false); //Estado para cambiar los botones
  const [showAlert, setShowAlert] = useState<boolean>(false); //Estado para mostrar o no, una alert
  const [selectedFilters, setSelectedFilters] = useState({
    status: "",
    species: "",
    gender: "",
  });

  const setCharacters = useStore((state) => state.initialCharacters);
  const [myFetch, { loading, data }] = useLazyQuery(
    GET_CHARACTERS_FOR_FILTERS,
    {
      variables: {
        species: selectedFilters.species,
        status: selectedFilters.status,
        gender: selectedFilters.gender,
      },
    }
  );
  //funcion
  const resetFilters = () => {
    setSelectedFilters({
      status: "",
      species: "",
      gender: "",
    });
    setShowAllBtns(false);
  };

  //funcion, que permite obtener los valores de selects de los inputs
  const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  //funcion, que permite realizar la peticion, solo si los filtros, se estan usando
  const searchByFilters = () => {
    if (
      selectedFilters.gender !== "" &&
      selectedFilters.species !== "" &&
      selectedFilters.status !== ""
    ) {
      myFetch({
        variables: {
          species: selectedFilters.species,
          status: selectedFilters.status,
          gender: selectedFilters.gender,
        },
      });
      setShowAllBtns(true);
    } else {
      setShowAlert(true);
    }
  };

  //useEffect, que permite cambiar el estado de la app, con la info de los filtros
  useEffect(() => {
    if (!loading && data) {
      setCharacters(data.characters.results);
    }
  }, [data, loading, setCharacters]);

  return (
    <div className="flex justify-between lg:gap-8 ">
      <Select
        name="status"
        defaultValue={selectedFilters.status}
        label="Status"
        handleFilterChange={handleFilterChange}
        myOptions={statusList}
      />

      <Select
        name="species"
        label="Species"
        defaultValue={selectedFilters.species}
        handleFilterChange={handleFilterChange}
        myOptions={speciesList}
      />

      <Select
        name="gender"
        defaultValue={selectedFilters.gender}
        label="Gender"
        handleFilterChange={handleFilterChange}
        myOptions={genderList}
      />
      <MyButtons
        state={showAllBtns}
        searchByFilter={searchByFilters}
        resetFilters={resetFilters}
      />
      {showAlert && <Alert closeAlert={() => setShowAlert(false)} />}
    </div>
  );
}
