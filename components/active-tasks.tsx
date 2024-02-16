"use client";

import { useTaskStore } from "@/lib/store";
import { TasksList } from "./tasks-list";
import { Droppable } from "react-beautiful-dnd";

export const ActiveTasks = () => {
  const activeTasks = useTaskStore((state) => state.tasks?.active);

  return (
    <Droppable droppableId="active">
      {(provided, snapshot) => (
        <div
          className={`border p-2 flex flex-col gap-3 h-fit ${
            snapshot.isDraggingOver ? "bg-blue-400" : ""
          }`}
        >
          <h2>Active Tasks</h2>
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <TasksList tasksList={activeTasks} />
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};
