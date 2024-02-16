"use client";

import { Droppable } from "react-beautiful-dnd";
import { TasksList } from "./tasks-list";
import { useTaskStore } from "@/lib/store";

export const CompletedTasks = () => {
  const completedTasks = useTaskStore((state) => state.tasks?.completed);

  return (
    <Droppable droppableId="completed">
      {(provided, snapshot) => (
        <div
          className={`border p-2 flex flex-col gap-3 h-fit ${
            snapshot.isDraggingOver ? "bg-blue-400" : ""
          }`}
        >
          <h2>Completed Tasks</h2>
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <TasksList tasksList={completedTasks} />
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};
