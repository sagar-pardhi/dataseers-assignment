"use client";

import { Droppable } from "react-beautiful-dnd";
import { TasksList } from "./tasks-list";
import { useTaskStore } from "@/lib/store";

export const StartedTasks = () => {
  const startedTasks = useTaskStore((state) => state.tasks.started);

  const priorities = ["high", "med", "low"];

  const priorityStartedTasks = startedTasks.sort(
    (a, z) => priorities.indexOf(a.priority) - priorities.indexOf(z.priority)
  );

  return (
    <Droppable droppableId="started">
      {(provided, snapshot) => (
        <div
          className={`border p-2 flex flex-col gap-3 h-fit ${
            snapshot.isDraggingOver ? "bg-blue-400" : ""
          }`}
        >
          <h2 className={snapshot.isDraggingOver ? "text-white" : "text-black"}>
            Started Tasks
          </h2>
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <TasksList tasksList={priorityStartedTasks} />
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};
