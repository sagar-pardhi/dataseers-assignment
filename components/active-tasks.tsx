"use client";

import { useTaskStore } from "@/lib/store";
import { TasksList } from "./tasks-list";
import { Droppable } from "react-beautiful-dnd";

export const ActiveTasks = () => {
  const activeTasks = useTaskStore((state) => state.tasks?.active);

  const priorities = ["high", "med", "low"];

  const priorityActiveTasks = activeTasks.sort(
    (a, z) => priorities.indexOf(a.priority) - priorities.indexOf(z.priority)
  );

  return (
    <Droppable droppableId="active">
      {(provided, snapshot) => (
        <div
          className={`border p-2 flex flex-col gap-3 h-fit ${
            snapshot.isDraggingOver ? "bg-blue-400" : ""
          }`}
        >
          <h2 className={snapshot.isDraggingOver ? "text-white" : "text-black"}>
            Active Tasks
          </h2>
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <TasksList tasksList={priorityActiveTasks} />
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};
