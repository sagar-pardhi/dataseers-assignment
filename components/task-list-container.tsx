import { DroppableStateSnapshot } from "react-beautiful-dnd";

interface TaskListContainerProps {
  snapshot: DroppableStateSnapshot;
  children: React.ReactNode;
}

export const TaskListContainer = ({
  snapshot,
  children,
}: TaskListContainerProps) => {
  return (
    <div
      className={`border p-2 flex flex-col h-fit ${
        snapshot.isDraggingOver ? "bg-blue-500 text-white" : ""
      }`}
    >
      {children}
    </div>
  );
};
