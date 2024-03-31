import Button from "../../components/Button";

interface MyButtonsI {
  searchByFilter: () => void;
  resetFilters: () => void;
  state: boolean | null;
}

export default function MyButtons(props: MyButtonsI) {
  const { searchByFilter, resetFilters, state } = props;

  return (
    <>
      {!state ? (
        <Button name="Search" onClick={searchByFilter} />
      ) : (
        <Button name="Reset Filters" onClick={resetFilters} />
      )}
    </>
  );
}
