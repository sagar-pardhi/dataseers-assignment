"use client";

import { Task } from "@/types";
import { Draggable } from "react-beautiful-dnd";

interface TaskItemProps {
  task: Task;
  index: number;
}

const priorityMap: {
  [key: string]: string;
} = {
  high: "bg-red-500",
  med: "bg-yellow-500",
  low: "bg-green-500",
};

export const TaskItem = ({ task, index }: TaskItemProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`border bg-slate-100 px-2 py-2  ${
            snapshot.isDragging ? "bg-green-400 shadow-lg" : ""
          }`}
        >
          <div className="flex justify-between items-center w-full">
            <p>{task.title}</p>
            <span
              className={`text-xs uppercase w-4 h-4 rounded-full ${
                priorityMap[task.priority]
              }`}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};
