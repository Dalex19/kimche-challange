
import { useState } from "react";
import Modal from "./Modal";

interface CardI {
  id: string;
  name: string;
  myImage: string;
}

export default function Card(props: CardI) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id, name, myImage } = props;
  return (
    <>
      <div
        className="relative flex items-end justify-center h-[200px] w-[200px] rounded-2xl overflow-hidden transition-all hover:scale-105"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={myImage}
          className="h-full w-full object-cover absolute z-10"
        />
        <div className="w-full py-1 flex items-center justify-center z-20 bg-black/50">
          <h2 className="font-bold text-white">{name}</h2>
        </div>
      </div>
      <Modal
        id={id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentImage={myImage}
      />
    </>
  );
}
