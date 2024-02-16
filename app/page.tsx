import { TaskBoard } from "@/components/task-board";
import { TaskForm } from "@/components/task-form";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-5">
      <TaskForm />
      <TaskBoard />
    </div>
  );
}
