"use client";

import { Task } from "@/types";
import { TaskItem } from "./task-item";

interface TasksListProps {
  tasksList: Task[];
}

export const TasksList = ({ tasksList }: TasksListProps) => {
  return (
    <div className="space-y-2">
      {tasksList.map((task, index) => (
        <TaskItem key={task.id} task={task} index={index} />
      ))}
    </div>
  );
};
