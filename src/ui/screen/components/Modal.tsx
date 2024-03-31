import { useQuery } from "@apollo/client";
import { GET_SINGLE_CHARACTER } from "../../../services/querys";

interface ModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  currentImage: string;
}

export default function Modal(props: ModalProps) {
  const { id, isOpen, onClose, currentImage } = props;

  const { loading, data } = useQuery(GET_SINGLE_CHARACTER, {
    variables: { id: id },
  });

  return (
    <dialog className="z-[100] modal" open={isOpen}>
      <div className="h-screen w-screen bg-black/55 flex justify-center items-center">
        <div className="bg-black flex h-[300px] w-[500px] relative rounded-lg overflow-hidden">
          <img src={currentImage} className="w-[45%] h-full object-cover" />
          <div className="flex-1 bg-black flex flex-col items-center justify-evenly">
            {loading ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : (
              <>
                <h1 className="text-xl font-bold text-white">
                  {data.character.name}
                </h1>
                <ul className="font-semibold flex flex-col gap-1 items-center text-center">
                  <li>
                    <span className="text-blue-500">Status</span>{" "}
                    {data.character.status}
                  </li>
                  <li>
                    <span className="text-blue-500">Gender:</span>{" "}
                    {data.character.gender}
                  </li>
                  <li>
                    <span className="text-blue-500">Species:</span>{" "}
                    {data.character.species}
                  </li>
                  {data.character.type !== "" ? (
                    <li>
                      <span className="text-blue-500">Type:</span>{" "}
                      {data.character.type}
                    </li>
                  ) : (
                    ""
                  )}

                  <li className="leading-5">
                    <span className="text-blue-500">Location: </span>{" "}
                    {data.character.location.name}
                  </li>
                  <li className="leading-5">
                    <span className="text-blue-500">Origin: </span>
                    {data.character.origin.name}
                  </li>
                  <li>
                    <span className="text-blue-500">Dimension: </span>{" "}
                    {data.character.origin.dimension}
                  </li>
                </ul>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="absolute px-2 bg-white rounded-full text-black top-2 right-2 font-bold"
          >
            X
          </button>
        </div>
      </div>
    </dialog>
  );
}
