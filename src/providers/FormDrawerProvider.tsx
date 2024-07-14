import { ReactNode, useState } from "react";
import { FormDrawerContext } from "../context/FormDrawerContext";

export const FormDrawerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const openFormDrawer = (content: ReactNode) => {
    setContent(content);
    setIsOpen(true);
  };

  const closeFormDrawer = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <FormDrawerContext.Provider
      value={{ isOpen, content, openFormDrawer, closeFormDrawer }}
    >
      {children}
    </FormDrawerContext.Provider>
  );
};
