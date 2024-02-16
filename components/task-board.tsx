"use client";

import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { ActiveTasks } from "./active-tasks";
import { CompletedTasks } from "./completed-tasks";
import { StartedTasks } from "./started-tasks";
import { useTaskStore } from "@/lib/store";

export const TaskBoard = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const updateTaskList = useTaskStore((state) => state.updateTaskList);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const listCopy = { ...tasks };

    const sourceList = listCopy[source.droppableId];

    const [removed] = sourceList.splice(source.index, 1);
    listCopy[source.droppableId] = sourceList;

    const destinationList = listCopy[destination.droppableId];
    destinationList.splice(destination.index, 0, removed);

    updateTaskList(listCopy);
  };

  return (
    <div className="grid grid-cols-3 grid-flow-row w-full gap-5">
      <DragDropContext onDragEnd={onDragEnd}>
        <ActiveTasks />
        <StartedTasks />
        <CompletedTasks />
      </DragDropContext>
    </div>
  );
};
