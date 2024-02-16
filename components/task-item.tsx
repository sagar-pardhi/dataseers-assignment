"use client";

import { Task } from "@/types";
import { Draggable } from "react-beautiful-dnd";

interface TaskItemProps {
  task: Task;
  index: number;
}

export const TaskItem = ({ task, index }: TaskItemProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`border bg-white px-2 py-2 ${
            snapshot.isDragging ? "bg-green-400 shadow-lg" : ""
          }`}
        >
          <div className="flex justify-between items-center w-full">
            <p>{task.title}</p>
            <span className="text-sm">{task.priority}</span>
          </div>
        </div>
      )}
    </Draggable>
  );
};
