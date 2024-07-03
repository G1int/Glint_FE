import { useEffect, useRef, useState } from "react";

const useDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOpenDialog = (): void => {
    setIsOpen((prev) => !prev);
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: MouseEvent): void => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(e.target as HTMLElement) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target as HTMLElement)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!isOpen && !dialogRef.current) return;

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return { isOpen, dialogRef, buttonRef, handleOpenDialog };
};

export default useDialog;
