import { Task, TaskList } from "@/types";
import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface TaskStore {
  tasks: TaskList;
  addTask: (newTask: Task) => void;
  updateTaskList: (taskList: TaskList) => void;
}

export const useTaskStore = create<TaskStore>()(
  devtools(
    persist(
      (set) => ({
        tasks: {
          active: [],
          started: [],
          completed: [],
        },
        addTask: (newTask: Task) => {
          set((state) => ({
            tasks: {
              ...state.tasks,
              active: [...state.tasks.active, newTask],
            },
          }));
        },
        updateTaskList: (taskList: TaskList) => {
          set(() => ({
            tasks: taskList,
          }));
        },
      }),
      {
        name: "taskStore",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
