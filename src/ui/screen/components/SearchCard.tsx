import { useState } from "react";
import Modal from "./Modal";

interface SearchCardI {
  id: string;
  name: string;
  image: string;
}

export default function SearchCard(props: SearchCardI) {
  const { id, name, image } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center gap-4 hover:bg-base-300 rounded-lg py-2 pl-4 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img src={image} className="w-12 rounded-full" />
        <p className="text-white font-semibold">{name}</p>
      </div>
      <Modal
        id={id}
        currentImage={image}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
