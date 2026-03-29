import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "Estudar",
      description: "Estudar programação slc",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Morrer",
      description: "morrer programação slc",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Vivier",
      description: "Vivier programação slc",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] ">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
