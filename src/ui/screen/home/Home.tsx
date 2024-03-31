import Pagination from "./components/Pagination";
import ListCharacters from "./components/ListCharacters";
import Search from "./components/Search";

export default function Home() {
  return (
    <div className="w-[90%] h-full p-2 py-3 lg:py-6 lg:p-4 flex flex-col justify-around">
      <Search />
      <ListCharacters />
      <Pagination />
    </div>
  );
}
