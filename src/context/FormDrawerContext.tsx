import { createContext, ReactNode } from 'react';

export interface DrawerContextProps {
  isOpen: boolean;
  content: ReactNode;
  openFormDrawer: (content: ReactNode) => void;
  closeFormDrawer: () => void;
}

export const FormDrawerContext = createContext<DrawerContextProps | undefined>(undefined);

