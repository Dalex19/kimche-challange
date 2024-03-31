import { useStore } from "../../../../state/appState";
import Card from "../../components/Card";

export default function ListCharacters() {
  const characterState = useStore((state) => state.characters);

  return (
    <div className="h-[70%] overflow-y-scroll flex flex-wrap justify-center gap-6 py-4">
      {characterState.length < 1 ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        characterState
          .map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              myImage={character.image}
            />
          ))
      )}
    </div>
  );
}
