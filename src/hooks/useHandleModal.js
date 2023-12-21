import { useState, useEffect } from "react";
export const useHandleModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    console.log("clickeado");

    setIsModalOpen(false);
    document.querySelector("body").classList.remove("modal-open");
  };

  return {
    isModalOpen,
    setIsModalOpen,
    handleModalClose,
  };
};
