import { useState } from "react";
import Modal from "./Modal";

type DemoCardProps = {
  title: string;
  description: string;
  DemoComponent: React.FC;
};

const DemoCard: React.FC<DemoCardProps> = ({
  title,
  description,
  DemoComponent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 flex flex-col border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 dark:text-gray-300 mb-4">{description}</p>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out hover:scale-105"
        >
          Launch Demo
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <DemoComponent />
      </Modal>
    </>
  );
};

export default DemoCard;
