"use client";

import { Droppable } from "react-beautiful-dnd";
import { TasksList } from "./tasks-list";
import { useTaskStore } from "@/lib/store";

export const StartedTasks = () => {
  const startedTasks = useTaskStore((state) => state.tasks.started);

  return (
    <Droppable droppableId="started">
      {(provided, snapshot) => (
        <div
          className={`border p-2 flex flex-col gap-3 h-fit ${
            snapshot.isDraggingOver ? "bg-blue-400" : ""
          }`}
        >
          <h2>Started Tasks</h2>
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <TasksList tasksList={startedTasks} />
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};
