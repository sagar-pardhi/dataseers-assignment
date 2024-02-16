"use client";

import { Droppable } from "react-beautiful-dnd";
import { TasksList } from "./tasks-list";
import { useTaskStore } from "@/lib/store";

export const CompletedTasks = () => {
  const completedTasks = useTaskStore((state) => state.tasks?.completed);

  const priorities = ["high", "med", "low"];

  const priorityCompletedTasks = completedTasks.sort(
    (a, z) => priorities.indexOf(a.priority) - priorities.indexOf(z.priority)
  );

  return (
    <Droppable droppableId="completed">
      {(provided, snapshot) => (
        <div
          className={`border p-2 flex flex-col gap-3 h-fit ${
            snapshot.isDraggingOver ? "bg-blue-400" : ""
          }`}
        >
          <h2 className={snapshot.isDraggingOver ? "text-white" : "text-black"}>
            Completed Tasks
          </h2>
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <TasksList tasksList={priorityCompletedTasks} />
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};
