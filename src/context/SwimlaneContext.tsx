import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  DragEvent,
} from "react";
import { useDispatch } from "react-redux";
import { updateTaskStatus } from "@store/actions/projectActions";
import { TypedDispatch } from "@store";

type AuthContextType = {
  task: number | null;
  onDragStart: (_e: DragEvent, id: number) => void;
  onDragEnd: (e: DragEvent) => void;
  onDrop: (_e: DragEvent, id: string) => void;
  onDragEnter: (e: DragEvent) => void;
};

const SwimlaneContext = createContext<AuthContextType | undefined>(undefined);

export const useSwimlaneContext = () => {
  const context = useContext(SwimlaneContext);
  if (!context) {
    throw new Error("useContext must be used within an Provider");
  }
  return context;
};

type SwimlaneProviderProps = {
  children: ReactNode;
};

export const SwimlaneContextProvider: React.FC<SwimlaneProviderProps> = ({
  children,
}) => {
  const [task, setTask] = useState<number | null>(null);
  const dispatch = useDispatch<TypedDispatch>();

  const onDragStart = (_e: DragEvent, id: number) => {
    setTask(id);
  };

  const onDragEnd = (e: DragEvent) => {
    e.preventDefault();
    setTask(null);
  };

  const onDrop = (_e: DragEvent, id: string) => {
    dispatch(updateTaskStatus(task, id));
  };

  const onDragEnter = (e: DragEvent) => {
    e.preventDefault();
  };

  return (
    <SwimlaneContext.Provider
      value={{ task, onDragStart, onDragEnd, onDrop, onDragEnter }}
    >
      {children}
    </SwimlaneContext.Provider>
  );
};
