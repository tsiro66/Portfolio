import { IoIosClose } from "react-icons/io";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-all duration-300
        ${isOpen ? "visible bg-black/75" : "invisible bg-black/0"}`}
      onClick={onClose}
    >
      <div
        className={`bg-white dark:bg-gray-800 rounded-2xl px-6 py-4 shadow-xl transition-all duration-300 max-w-lg w-full
            ${isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 cursor-pointer text-3xl"
        >
          <IoIosClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
