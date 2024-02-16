import { useState } from "react";
import { Task, TaskList } from "@/types";

export const useTasksHook = () => {
  const [data, setData] = useState<TaskList>({
    active: [
      {
        id: "1",
        title: "Hello",
        priority: "low",
        column: "active",
      },
    ],
    started: [],
    completed: [],
  });

  const addTask = (task: Task) => {
    setData((prev) => ({
      ...prev,
      active: [...prev.active, task],
    }));
  };

  const removeFromList = (list: Task[], index: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list: Task[], index: number, element: Task) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  return {
    data,
    setData,
    addTask,
    removeFromList,
    addToList,
  };
};
